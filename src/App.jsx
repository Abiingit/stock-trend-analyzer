import React, { useEffect, useState } from "react";
import { fetchStockQuote, fetchStockTrend } from "./api/stockAPI";
import StockChart from "./components/stockChart";

const STOCKS = ["AAPL", "TSLA", "GOOGL", "MSFT", "AMZN"];

const App = () => {
  const [ticker, setTicker] = useState("AAPL");
  const [quote, setQuote] = useState(null);
  const [trendData, setTrendData] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadStockData = async () => {
    setLoading(true);
    const quoteData = await fetchStockQuote(ticker);
    const trend = await fetchStockTrend(ticker);
    setQuote(quoteData);
    setTrendData(trend);
    setLoading(false);
  };

  useEffect(() => {
    loadStockData();
  }, [ticker]);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial", textAlign: "center" }}>
      <h1>📊 Stock Trend Analyzer</h1>

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
      ) : (
        <>
          {quote ? (
            <div style={{ marginBottom: "20px" }}>
              <h2>{ticker} – ${quote.price}</h2>
              <p>Yesterday's Close: ${quote.previousClose}</p>
              <p>📈 Trend: <strong>{quote.trend}</strong></p>
            </div>
          ) : (
            <p>No quote data available.</p>
          )}

          <StockChart data={trendData} />
        </>
      )}
    </div>
  );
};

export default App;
