export const predictNextPrice = (data) => {
    if (!data || data.length < 2) return null;
  
    // Use day indices as x and closing prices as y
    const x = data.map((_, i) => i);
    const y = data.map((d) => d.price);
  
    const n = x.length;
    const xMean = x.reduce((a, b) => a + b) / n;
    const yMean = y.reduce((a, b) => a + b) / n;
  
    const numerator = x.reduce((sum, xi, i) => sum + (xi - xMean) * (y[i] - yMean), 0);
    const denominator = x.reduce((sum, xi) => sum + Math.pow(xi - xMean, 2), 0);
  
    const slope = numerator / denominator;
    const intercept = yMean - slope * xMean;
  
    const nextDay = n;
    const predictedPrice = slope * nextDay + intercept;
  
    return predictedPrice.toFixed(2); // Round to 2 decimals
  };
  