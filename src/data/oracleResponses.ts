// Response data from shared catpool package
import { responses as catpoolResponses, templates as catpoolTemplates } from 'catpool';
import type { OracleCategory as CatpoolCategory, OracleResponse as CatpoolResponse, Template } from 'catpool';

// Re-export types for existing consumers
// Note: catpool's OracleResponse has an additional hopecookie? field
// MaybeCat consumers use the same type
export type OracleCategory = CatpoolCategory;
export type OracleResponse = CatpoolResponse;

// Use catpool data
// @ts-ignore - Array exceeds TypeScript union complexity limit
const oracleResponses: OracleResponse[] = catpoolResponses;
const templates: Template[] = catpoolTemplates;

// === Everything below this line is selection logic — unchanged ===

// Generate response from template
function generateFromTemplate(template: Template): OracleResponse {
  let text = template.pattern;
  const usedSlots: string[] = [];
  for (const [slot, options] of Object.entries(template.slots)) {
    // Prefer slot values not recently used AND not in recent static responses
    const fresh = options.filter(o => !isSlotRecent(o) && !slotInRecentResponses(o));
    const semifresh = fresh.length > 0 ? fresh : options.filter(o => !isSlotRecent(o));
    const pool = semifresh.length > 0 ? semifresh : options;
    const pick = pool[Math.floor(Math.random() * pool.length)];
    usedSlots.push(pick);
    text = text.replace(`{${slot}}`, pick);
  }
  // Track the slot values we used
  for (const s of usedSlots) addSlotToRecent(s);
  return { text, category: template.category };
}

// ============================================
// WEIGHTED RANDOM SELECTION
// Distribution tuned for viral sharing
// ============================================

const categoryWeights: Record<OracleCategory, number> = {
  wise: 20,         // 540 responses
  chaotic: 18,      // 565 responses
  cold: 10,         // 349 responses
  judgy: 10,        // 281 responses
  demanding: 10,    // 231 responses
  mystical: 7,      // 197 responses
  existential: 7,   // 157 responses
  heartfelt: 7,     // 178 responses
  nurturing: 6,     // 134 responses
  angry: 5,         // 76 responses
  poetic: 5,        // 97 responses
  meta: 4,          // 85 responses
  adoption: 1,      // 29 responses — has its own 2.5% trigger
};

// Track recently shown responses to avoid repeats
// Persisted to localStorage so it survives page reloads
const MAX_RECENT = 200;
const STORAGE_KEY = 'maybecat_recent_responses';
const SLOT_STORAGE_KEY = 'maybecat_recent_slots';
const MAX_RECENT_SLOTS = 30;

function loadRecent(): string[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch { /* corrupted or unavailable — start fresh */ }
  return [];
}

function loadRecentSlots(): string[] {
  try {
    const stored = localStorage.getItem(SLOT_STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch { /* corrupted or unavailable */ }
  return [];
}

function addToRecent(text: string): void {
  const recent = loadRecent();
  recent.push(text);
  while (recent.length > MAX_RECENT) {
    recent.shift();
  }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recent));
  } catch { /* storage full or unavailable */ }
}

function addSlotToRecent(value: string): void {
  const slots = loadRecentSlots();
  if (!slots.includes(value)) {
    slots.push(value);
    while (slots.length > MAX_RECENT_SLOTS) {
      slots.shift();
    }
    try {
      localStorage.setItem(SLOT_STORAGE_KEY, JSON.stringify(slots));
    } catch { /* no-op */ }
  }
}

function isRecent(text: string): boolean {
  return loadRecent().includes(text);
}

function isSlotRecent(value: string): boolean {
  return loadRecentSlots().includes(value);
}

// === TEMPLATE ↔ STATIC CROSS-CHECK ===
// Prevents thematic overlap between template-generated and static responses.
// Only checks multi-word slot values — single words like "chaos" are too generic.

const crossCheckableSlots: string[] = (() => {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const template of templates) {
    for (const options of Object.values(template.slots)) {
      for (const opt of options) {
        if (opt.includes(' ') && !seen.has(opt)) {
          seen.add(opt);
          result.push(opt);
        }
      }
    }
  }
  return result;
})();

function overlapsWithRecentSlots(text: string): boolean {
  const recentSlots = loadRecentSlots();
  const lowerText = text.toLowerCase();
  return recentSlots.some(slot =>
    slot.includes(' ') && lowerText.includes(slot.toLowerCase())
  );
}

function markOverlappingSlots(text: string): void {
  const lowerText = text.toLowerCase();
  for (const slot of crossCheckableSlots) {
    if (lowerText.includes(slot.toLowerCase())) {
      addSlotToRecent(slot);
    }
  }
}

function slotInRecentResponses(slotValue: string): boolean {
  if (!slotValue.includes(' ')) return false;
  const recent = loadRecent();
  const lowerSlot = slotValue.toLowerCase();
  return recent.some(r => r.toLowerCase().includes(lowerSlot));
}

/**
 * Easter eggs — specific questions that always get specific answers.
 * Pattern matching is case-insensitive, ignores punctuation.
 */
const easterEggs: Array<{ patterns: RegExp[]; response: OracleResponse }> = [
  {
    patterns: [/what(?:'?s| is)\s+9\s*\+\s*10/, /9\s*\+\s*10/, /9\s*plus\s*10/],
    response: { text: "21.", category: 'meta' },
  },
];

export function getEasterEggResponse(question: string): OracleResponse | null {
  const q = question.toLowerCase().replace(/[?.!,'"]/g, '').trim();
  for (const egg of easterEggs) {
    if (egg.patterns.some(p => p.test(q))) {
      return egg.response;
    }
  }
  return null;
}

export function getRandomResponse(options?: { isShelterCat?: boolean }): OracleResponse {
  // ~2.5% chance to show adoption fourth-wall break for shelter cats
  if (options?.isShelterCat && Math.random() < 0.025) {
    const adoptionResponses = oracleResponses.filter(r => r.category === 'adoption');
    const response = adoptionResponses[Math.floor(Math.random() * adoptionResponses.length)];
    if (!isRecent(response.text) && !overlapsWithRecentSlots(response.text)) {
      addToRecent(response.text);
      markOverlappingSlots(response.text);
      return response;
    }
  }

  // Try up to 10 times to find a non-repeat
  for (let attempt = 0; attempt < 10; attempt++) {
    const response = getRandomResponseInternal();
    if ((!isRecent(response.text) && !overlapsWithRecentSlots(response.text)) || attempt === 9) {
      addToRecent(response.text);
      markOverlappingSlots(response.text);
      return response;
    }
  }
  // Fallback (shouldn't reach here)
  const response = getRandomResponseInternal();
  addToRecent(response.text);
  markOverlappingSlots(response.text);
  return response;
}

function getRandomResponseInternal(): OracleResponse {
  // 88% chance: use handcrafted response
  // 12% chance: generate from template (seasoning, not the main course)
  const useTemplate = Math.random() < 0.12;

  // Build weighted array of categories
  const weightedCategories: OracleCategory[] = [];
  for (const [category, weight] of Object.entries(categoryWeights)) {
    for (let i = 0; i < weight; i++) {
      weightedCategories.push(category as OracleCategory);
    }
  }

  // Pick random category
  const randomCategory = weightedCategories[Math.floor(Math.random() * weightedCategories.length)];

  if (useTemplate) {
    // Find templates matching this category
    const categoryTemplates = templates.filter(t => t.category === randomCategory);
    if (categoryTemplates.length > 0) {
      const template = categoryTemplates[Math.floor(Math.random() * categoryTemplates.length)];
      return generateFromTemplate(template);
    }
  }

  // Use handcrafted response
  const categoryResponses = oracleResponses.filter(r => r.category === randomCategory);
  if (categoryResponses.length === 0) {
    // Fallback to any response if category is empty
    return oracleResponses[Math.floor(Math.random() * oracleResponses.length)];
  }
  return categoryResponses[Math.floor(Math.random() * categoryResponses.length)];
}

export function getResponseByCategory(category: OracleCategory): OracleResponse {
  // 30% chance to use template for variety
  const useTemplate = Math.random() < 0.3;

  if (useTemplate) {
    const categoryTemplates = templates.filter(t => t.category === category);
    if (categoryTemplates.length > 0) {
      const template = categoryTemplates[Math.floor(Math.random() * categoryTemplates.length)];
      return generateFromTemplate(template);
    }
  }

  const categoryResponses = oracleResponses.filter(r => r.category === category);
  if (categoryResponses.length === 0) {
    return oracleResponses[Math.floor(Math.random() * oracleResponses.length)];
  }
  return categoryResponses[Math.floor(Math.random() * categoryResponses.length)];
}

// For debugging: count total possible combinations
export function countTotalResponses(): { handcrafted: number; templateCombinations: number; total: number } {
  const handcrafted = oracleResponses.length;

  let templateCombinations = 0;
  for (const template of templates) {
    let combinations = 1;
    for (const options of Object.values(template.slots)) {
      combinations *= options.length;
    }
    templateCombinations += combinations;
  }

  return {
    handcrafted,
    templateCombinations,
    total: handcrafted + templateCombinations
  };
}
