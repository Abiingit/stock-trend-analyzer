import axios from "axios";
import { getAPIKey } from "../keyManager";

// 🔹 Live Quote Fetch
export const fetchLiveQuote = async (ticker) => {
  const key = getAPIKey();

  try {
    const response = await axios.get("https://www.alphavantage.co/query", {
      params: {
        function: "GLOBAL_QUOTE",
        symbol: ticker,
        apikey: key,
      },
    });

    const quote = response.data["Global Quote"];
    if (!quote) return null;

    return {
      current: parseFloat(quote["05. price"]),
      previousClose: parseFloat(quote["08. previous close"]),
      trend:
        parseFloat(quote["05. price"]) > parseFloat(quote["08. previous close"])
          ? "📈 Upward"
          : "📉 Downward",
    };
  } catch (err) {
    console.error("Live Quote Fetch Error:", err);
    return null;
  }
};

// 🔹 Trend Fetch
export const fetchStockTrend = async (ticker) => {
  const key = getAPIKey();

  try {
    const response = await axios.get("https://www.alphavantage.co/query", {
      params: {
        function: "TIME_SERIES_DAILY",
        symbol: ticker,
        apikey: key,
      },
    });

    const rawData = response.data["Time Series (Daily)"];
    if (!rawData) return [];

    const sortedDates = Object.keys(rawData).sort(
      (a, b) => new Date(a) - new Date(b)
    );
    const last7Days = sortedDates.slice(-7);

    return last7Days.map((date) => ({
      date: new Date(date).toLocaleDateString("en-GB"),
      price: parseFloat(rawData[date]["4. close"]),
    }));
  } catch (error) {
    console.error("Trend Fetch Error:", error);
    return [];
  }
};
