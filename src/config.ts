// Centralized configuration for tunable behavior values

export const config = {
  // Image brightness analysis
  brightness: {
    sampleSize: 100,           // Canvas sample size for brightness calculation
    threshold: 70,             // Below this = image needs brightening
    enhanceFilter: 'brightness(1.3) contrast(1.1)',
  },

  // Shelter cats from RescueGroups API
  shelterCats: {
    fetchCount: 50,  // Fetch more to filter for quality data
  },

  // Oracle "thinking" delays (milliseconds)
  thinking: {
    firstAsk: { base: 1500, variance: 1500 },   // 1.5-3s total
    askAgain: { base: 800, variance: 800 },     // 0.8-1.6s total
  },

  // Image export settings
  export: {
    scale: 2,                  // html2canvas scale factor
    backgroundColor: '#fef3c7',
  },
};
