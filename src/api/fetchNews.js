import axios from "axios";

const companyNames = {
  AAPL: "Apple Inc",
  TSLA: "Tesla",
  GOOGL: "Google",
  MSFT: "Microsoft",
  AMZN: "Amazon",
};

export const fetchStockNews = async (ticker) => {
  const company = companyNames[ticker] || ticker;

  try {
    const response = await axios.get(
      `https://newsdata.io/api/1/news`, {
        params: {
          apikey: import.meta.env.VITE_NEWS_API_KEY,
          q: company + " stock",
          language: "en",
          category: "business"
        }
      }
    );

    return response.data.results?.slice(0, 5) || [];
  } catch (error) {
    console.error("News Fetch Error:", error);
    return [];
  }
};
