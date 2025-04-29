import React, { useEffect, useState } from "react";
import "./App.css";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import { fetchStockTrend, fetchLiveQuote } from "./api/stockAPI";
import { fetchStockNews } from "./api/fetchNews";
import axios from "axios";

const STOCKS = ["AAPL", "TSLA", "GOOGL", "MSFT", "AMZN"];

const App = () => {
  const [ticker, setTicker] = useState("AAPL");
  const [trendData, setTrendData] = useState([]);
  const [liveQuote, setLiveQuote] = useState(null);
  const [predictedPrice, setPredictedPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [newsArticles, setNewsArticles] = useState([]);
  const [multiTrendData, setMultiTrendData] = useState({});


  const loadStockData = async () => {
    setLoading(true);
    setPredictedPrice(null);

    const trend = await fetchStockTrend(ticker);
    const quote = await fetchLiveQuote(ticker);

    setTrendData(trend);
    setLiveQuote(quote);

    const news = await fetchStockNews(ticker);
    setNewsArticles(news);

    try {
      const prices = trend.map((item) => item.price);

      const response = await axios.post("http://127.0.0.1:5000/predict", {
        prices: prices,
      });

      setPredictedPrice(response.data.predicted_price);
    } catch (err) {
      console.error("Prediction fetch failed:", err);
      setPredictedPrice(null);
    }

    setLoading(false);
  };

  const loadMultiTrendData = async () => {
    let newTrendData = {};
  
    for (const stock of STOCKS) {
      const trend = await fetchStockTrend(stock);
      newTrendData[stock] = trend;
    }
  
    setMultiTrendData(newTrendData);
  };

  useEffect(() => {
    loadStockData();
    loadMultiTrendData();
  }, [ticker]);

  return (
    <>

    <h1 style={{alignItems:'center'}}>Stock Trend DashBoard</h1>
    <h3>Select your ticker Symbol</h3>
      <select
        value={ticker}
        onChange={(e) => setTicker(e.target.value)}
        className="dropdown"
      >
        {STOCKS.map((symbol) => (
          <option key={symbol} value={symbol}>
            {symbol}
          </option>
        ))}
      </select>

      {!loading && (
        <DashboardLayout
        ticker={ticker}
        multiTrendData={multiTrendData}
        quote={liveQuote}
        predictedPrice={predictedPrice}
        news={newsArticles}
      />
      )}
    </>
  );
};

export default App;
