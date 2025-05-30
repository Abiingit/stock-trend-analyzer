import React from "react";


const SnapshotCard = ({ quote, ticker }) => {
  if (!quote) return <p>Loading snapshot...</p>;

  return (
    <div className="snapshotcard">
      <h3>{ticker} Snapshot 📍</h3>
      <p><strong>Current Price:</strong> ${quote.currentPrice}</p>
      <p><strong>Previous Close:</strong> ${quote.previousClose}</p>
      <p><strong>Market Trend:</strong> {quote.trend}</p>
    </div>
  );
};

export default SnapshotCard;
