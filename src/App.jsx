import React, { useEffect, useState } from "react";
import StockChart from "./components/stockChart";
import "./App.css";
import { fetchStockTrend, fetchLiveQuote } from "./api/stockAPI";
import { predictNextPrice } from "./utils/predictor";



const STOCKS = ["AAPL", "TSLA", "GOOGL", "MSFT", "AMZN"];

const App = () => {
  const [ticker, setTicker] = useState("AAPL");
  const [trendData, setTrendData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [liveQuote, setLiveQuote] = useState(null);
  const [predictedPrice, setPredictedPrice] = useState(null);


  

  const loadStockData = async () => {
    setLoading(true);
    const trend = await fetchStockTrend(ticker);
    const quote = await fetchLiveQuote(ticker);
    setTrendData(trend);
    setLiveQuote(quote);
    setLoading(false);
    //prediction function
    setTrendData(trend);
    
    // 👇 Predict next price
    const prediction = predictNextPrice(trend);
    setPredictedPrice(prediction);
  };
  

  useEffect(() => {
    loadStockData();
  }, [ticker]);


  return (
    <div className="container">
      <h1 className="title">📈 Stock Trend Analyzer</h1>

      <select
        value={ticker}
        onChange={(e) => setTicker(e.target.value)}
        className="dropdown"
      >
        {STOCKS.map((stock) => (
          <option key={stock} value={stock}>
            {stock}
          </option>
        ))}
      </select>

      {loading ? (
        <p className="message">Loading data...</p>
      ) : trendData.length ? (
        <StockChart data={trendData} />
      ) : (
        <p className="message">No trend data available. Try another stock.</p>
      )}
      {liveQuote && (
  <div style={{
    marginBottom: "30px",
    padding: "15px",
    backgroundColor: "#e2e8f0",
    borderRadius: "10px"
  }}>
    <h2>{ticker} Snapshot</h2>
    <p>Current Price: <strong>${liveQuote.current}</strong></p>
    <p>Previous Close: ${liveQuote.previousClose}</p>
    <p>Market Trend: {liveQuote.trend}</p>
  </div>
)}

{predictedPrice && (
  <div style={{
    marginTop: "20px",
    padding: "15px",
    backgroundColor: "#fef9c3",
    borderRadius: "10px",
    color: "#78350f",
    fontWeight: "500"
  }}>
    🔮 <strong>Predicted Price (Tomorrow): ${predictedPrice}</strong>
  </div>
)}

    </div>
  );
};

export default App;
