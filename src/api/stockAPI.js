import axios from "axios";

// Multiple Alpha Vantage API keys
const API_KEYS = [
  import.meta.env.VITE_ALPHA_KEY_1,
  import.meta.env.VITE_ALPHA_KEY_2,
  import.meta.env.VITE_ALPHA_KEY_3,
  import.meta.env.VITE_ALPHA_KEY_4,
  // Add more keys here if you have!
];

let apiKeyIndex = 0;

// Function to rotate API keys
const getNextApiKey = () => {
  const key = API_KEYS[apiKeyIndex];
  apiKeyIndex = (apiKeyIndex + 1) % API_KEYS.length;
  return key;
};

/**
 * Fetch trend data (last 7 days) for a stock ticker
 */
// export const fetchStockTrend = async (ticker) => {
//   console.log("🚨 API KEYS LOADED:", API_KEYS);
//   const today = new Date();
//   const past = new Date(today);
//   past.setDate(today.getDate() - 6); // last 7 days

//   const format = (d) => d.toISOString().split('T')[0];

//   const from = format(past);
//   const to = format(today);

//   try {
//     const apiKey = getNextApiKey(); // 💥 Rotate API key here

//     const response = await axios.get(
//       `https://www.alphavantage.co/query`,
//       {
//         params: {
//           function: "TIME_SERIES_DAILY",
//           symbol: ticker,
//           apikey: apiKey,
//         }
//       }
//     );

//     const timeSeries = response.data["Time Series (Daily)"];

//     if (!timeSeries) {
//       console.error(`No time series for ${ticker}:`, response.data);
//       return [];
//     }

//     const trend = Object.keys(timeSeries)
//       .slice(0, 7)
//       .reverse()
//       .map(date => ({
//         date,
//         price: parseFloat(timeSeries[date]["4. close"]),
//       }));

//     console.log(`Trend for ${ticker}:`, trend); // ✅ Debug

//     return trend;
//   } catch (err) {
//     console.error(`Error fetching trend for ${ticker}:`, err);
//     return [];
//   }
// };

/**
 * Fetch live quote price (optional)
 */
export const fetchLiveQuote = async (ticker) => {
  const apiKey = getNextApiKey(); // 💥 Rotate API key here

  try {
    const response = await axios.get(
      `https://www.alphavantage.co/query`,
      {
        params: {
          function: "GLOBAL_QUOTE",
          symbol: ticker,
          apikey: apiKey,
        }
      }
    );

    const quote = response.data["Global Quote"];
    if (!quote) {
      console.error(`No quote for ${ticker}:`, response.data);
      return null;
    }

    const liveQuote = {
      currentPrice: parseFloat(quote["05. price"]),
      previousClose: parseFloat(quote["08. previous close"]),
      change: parseFloat(quote["09. change"]),
      percentChange: parseFloat(quote["10. change percent"]),
    };

    console.log(`Live quote for ${ticker}:`, liveQuote);

    return liveQuote;
  } catch (err) {
    console.error(`Error fetching live quote for ${ticker}:`, err);
    return null;
  }
};

const FMP_API_KEY = import.meta.env.VITE_FMP_API_KEY;
const BASE_URL = "https://financialmodelingprep.com/api/v3";

export const fetchStockTrend = async (ticker) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/historical-price-full/${ticker}?timeseries=7&apikey=${FMP_API_KEY}`
    );

    const historical = response.data.historical;
    if (!historical) {
      console.error(`No trend data for ${ticker}:`, response.data);
      return [];
    }

    const trend = historical
      .reverse() // to make it oldest ➡️ newest
      .map((item) => ({
        date: item.date,
        price: item.close,
      }));

    console.log(`📈 Trend for ${ticker}:`, trend);

    return trend;
  } catch (error) {
    console.error(`Error fetching trend for ${ticker}:`, error);
    return [];
  }
};
