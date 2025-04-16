import axios from "axios";

const ALPHA_API_KEY = "7DWEAI5840YR9RSV";

export const fetchStockTrend = async (ticker) => {
  try {
    const response = await axios.get(
      "https://www.alphavantage.co/query",
      {
        params: {
          function: "TIME_SERIES_DAILY",
          symbol: ticker,
          apikey: ALPHA_API_KEY,
        },
      }
    );

    const rawData = response.data["Time Series (Daily)"];

    if (!rawData) {
      console.error("Invalid or missing data from Alpha Vantage:", response.data);
      return [];
    }

    const sortedDates = Object.keys(rawData).sort((a, b) => new Date(a) - new Date(b));
    const last7Days = sortedDates.slice(-7);

    return last7Days.map((date) => ({
      date: new Date(date).toLocaleDateString("en-GB"),
      price: parseFloat(rawData[date]["4. close"]),
    }));
  } catch (error) {
    console.error("Error fetching trend from Alpha Vantage:", error);
    return [];
  }
};
