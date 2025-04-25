import axios from "axios";

export const fetchStockNews = async (ticker) => {
  try {
    const response = await axios.get(
      `https://newsdata.io/api/1/news?apikey=${import.meta.env.VITE_NEWS_API_KEY}&q=${ticker}&language=en&category=business`
    );

    return response.data.results.slice(0, 5); // top 5 articles
  } catch (error) {
    console.error("News Fetch Error:", error);
    return [];
  }
};
