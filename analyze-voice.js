import fs from 'fs';
const content = fs.readFileSync('src/data/oracleResponses.ts', 'utf8');

// Extract all response texts
const responseRegex = /\{ text: ['"]([^'"]+)['"], category: '([^']+)' \}/g;
let match;
const responses = [];
while ((match = responseRegex.exec(content)) !== null) {
  responses.push({ text: match[1], category: match[2] });
}

// Analyze voice
function analyzeVoice(text) {
  const hasFirst = /\b(I|I'm|I've|I'll|I'd|me|my|mine)\b/i.test(text);
  const hasSecond = /\b(you|you're|you've|you'll|you'd|your|yours)\b/i.test(text);
  if (hasFirst && hasSecond) return 'mixed';
  if (hasFirst) return 'first-person';
  if (hasSecond) return 'second-person';
  return 'impersonal';
}

// Count by voice
const voiceCounts = { 'first-person': 0, 'second-person': 0, 'impersonal': 0, 'mixed': 0 };
const byCategory = {};

responses.forEach(r => {
  const voice = analyzeVoice(r.text);
  voiceCounts[voice]++;
  if (!byCategory[r.category]) {
    byCategory[r.category] = { 'first-person': 0, 'second-person': 0, 'impersonal': 0, 'mixed': 0 };
  }
  byCategory[r.category][voice]++;
});

console.log('=== VOICE DISTRIBUTION ANALYSIS ===\n');
console.log('OVERALL:');
const total = responses.length;
Object.entries(voiceCounts).forEach(([voice, count]) => {
  console.log(`  ${voice}: ${count} (${Math.round(count/total*100)}%)`);
});
console.log(`  TOTAL: ${total}`);

console.log('\nBY CATEGORY:');
Object.entries(byCategory).sort((a,b) => a[0].localeCompare(b[0])).forEach(([cat, counts]) => {
  const catTotal = Object.values(counts).reduce((a,b) => a+b, 0);
  console.log(`\n  ${cat.toUpperCase()} (${catTotal} responses):`);
  Object.entries(counts).forEach(([voice, count]) => {
    if (count > 0) {
      console.log(`    ${voice}: ${count} (${Math.round(count/catTotal*100)}%)`);
    }
  });
});

// Find examples that might need voice changes
console.log('\n\n=== POTENTIAL VOICE MISMATCHES ===');
console.log('(Examples where voice may not match category expectations)\n');

// Heartfelt responses that are impersonal might feel disconnected
const heartfeltImpersonal = responses.filter(r =>
  r.category === 'heartfelt' && analyzeVoice(r.text) === 'impersonal'
);
if (heartfeltImpersonal.length > 0) {
  console.log('HEARTFELT but IMPERSONAL (might need more direct voice):');
  heartfeltImpersonal.slice(0, 5).forEach(r => console.log(`  - "${r.text}"`));
  if (heartfeltImpersonal.length > 5) console.log(`  ... and ${heartfeltImpersonal.length - 5} more`);
}

// Nurturing responses that are impersonal
const nurturingImpersonal = responses.filter(r =>
  r.category === 'nurturing' && analyzeVoice(r.text) === 'impersonal'
);
if (nurturingImpersonal.length > 0) {
  console.log('\nNURTURING but IMPERSONAL (might need more personal voice):');
  nurturingImpersonal.slice(0, 5).forEach(r => console.log(`  - "${r.text}"`));
  if (nurturingImpersonal.length > 5) console.log(`  ... and ${nurturingImpersonal.length - 5} more`);
}

// Cold responses that use "I" heavily (should be more dismissive/impersonal?)
const coldFirstPerson = responses.filter(r =>
  r.category === 'cold' && analyzeVoice(r.text) === 'first-person'
);
if (coldFirstPerson.length > 0) {
  console.log('\nCOLD but FIRST-PERSON (fits - cat dismissing directly):');
  coldFirstPerson.slice(0, 3).forEach(r => console.log(`  - "${r.text}"`));
  console.log('  (This is fine - cold can be "I refuse")');
}

// Wise responses - check distribution
const wiseVoices = responses.filter(r => r.category === 'wise');
console.log(`\nWISE category voice distribution (${wiseVoices.length} total):`);
const wiseByVoice = {};
wiseVoices.forEach(r => {
  const v = analyzeVoice(r.text);
  wiseByVoice[v] = (wiseByVoice[v] || 0) + 1;
});
Object.entries(wiseByVoice).forEach(([v, c]) => {
  console.log(`  ${v}: ${c} (${Math.round(c/wiseVoices.length*100)}%)`);
});
