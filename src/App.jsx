import React, { useEffect, useState } from "react";
import { fetchStockTrend } from "./api/stockAPI";
import StockChart from "./components/StockChart";

const STOCKS = ["AAPL", "TSLA", "GOOGL", "MSFT", "AMZN"];

const App = () => {
  const [ticker, setTicker] = useState("AAPL");
  const [trendData, setTrendData] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadStockData = async () => {
    setLoading(true);
    const trend = await fetchStockTrend(ticker);
    setTrendData(trend);
    setLoading(false);
  };

  useEffect(() => {
    loadStockData();
  }, [ticker]);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial", textAlign: "center" }}>
      <h1>📊 Stock Trend Analyzer (Alpha Vantage Powered)</h1>

      <select
        value={ticker}
        onChange={(e) => setTicker(e.target.value)}
        style={{ padding: "10px", margin: "20px", fontSize: "16px" }}
      >
        {STOCKS.map((stock) => (
          <option key={stock} value={stock}>
            {stock}
          </option>
        ))}
      </select>

      {loading ? (
        <p>Loading data...</p>
      ) : trendData.length ? (
        <StockChart data={trendData} />
      ) : (
        <p>No trend data available. Try another stock.</p>
      )}
    </div>
  );
};

export default App;
