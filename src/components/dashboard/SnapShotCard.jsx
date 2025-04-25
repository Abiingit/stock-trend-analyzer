import React from "react";

const SnapshotCard = ({ quote, ticker }) => {
  if (!quote) return <p>Loading snapshot...</p>;

  return (
    <div style={{
      background: "#f0f9ff",
      padding: "16px",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      marginBottom: "20px"
    }}>
      <h3>{ticker} Snapshot 📍</h3>
      <p><strong>Current Price:</strong> ${quote.current}</p>
      <p><strong>Previous Close:</strong> ${quote.previousClose}</p>
      <p><strong>Market Trend:</strong> {quote.trend}</p>
    </div>
  );
};

export default SnapshotCard;
