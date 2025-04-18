// src/keyManager.js

const apiKeys = [
    import.meta.env.VITE_ALPHA_KEY_1,
    import.meta.env.VITE_ALPHA_KEY_2,
    import.meta.env.VITE_ALPHA_KEY_3,
    import.meta.env.VITE_ALPHA_KEY_4,
  ];
  
  let callCount = 0;
  let currentKeyIndex = 0;
  const MAX_CALLS_PER_KEY = 25;
  
  export const getAPIKey = () => {
    if (callCount >= MAX_CALLS_PER_KEY) {
      currentKeyIndex++;
      callCount = 0;
    }
  
    if (currentKeyIndex >= apiKeys.length) {
      throw new Error("🔥 All API keys exhausted for the day!");
    }
  
    callCount++;
    return apiKeys[currentKeyIndex];
  };
  