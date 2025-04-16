import axios from "axios";

const FINNHUB_API_KEY = "cvvpi59r01qi0bq6s2fgcvvpi59r01qi0bq6s2g0";
console.log("KEY USED:", FINNHUB_API_KEY); 

export const fetchStockQuote = async (ticker) => {
  try {
    const response = await axios.get("https://finnhub.io/api/v1/quote", {
      params: {
        symbol: ticker,
        token: FINNHUB_API_KEY,
      },
    });

    console.log("Quote Response:", response.data);

    // Return the current price and a dummy chart value
    return {
      price: response.data.c,
      previousClose: response.data.pc,
      trend: response.data.c > response.data.pc ? "UPWARD 📈" : "DOWNWARD 📉",
    };
  } catch (err) {
    console.error("API Fetch Error:", err);
    return null;
  }
};

export const fetchStockTrend = async (ticker) => {
    const today = new Date();
  
    // Add 1 extra day buffer to avoid missing data due to timezone/market hours
    const now = Math.floor(today.getTime() / 1000);
  
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(today.getDate() - 10); // buffer of 10 days for better data
    const past = Math.floor(sevenDaysAgo.getTime() / 1000);
  
    try {
      const response = await axios.get("https://finnhub.io/api/v1/stock/candle", {
        params: {
          symbol: ticker,
          resolution: "D",
          from: past,
          to: now,
          token: FINNHUB_API_KEY,
        },
      });
      console.log("Trend API Response:", response.data); // <-- this tells us the truth
  
  
      if (response.data.s !== "ok" || !response.data.t) return [];
  
      return response.data.t.map((timestamp, index) => ({
        date: new Date(timestamp * 1000).toLocaleDateString("en-GB"),
        price: response.data.c[index],
      }));
    } catch (error) {
      console.error("Trend Fetch Error:", error);
      return [];
    }
  };
  
  