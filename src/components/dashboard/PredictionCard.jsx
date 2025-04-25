import React from "react";

const PredictionCard = ({ predictedPrice }) => {
  if (!predictedPrice) return <p>Loading prediction...</p>;

  return (
    <div style={{
      background: "#fef3c7",
      padding: "16px",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      marginBottom: "20px",
      color: "#78350f"
    }}>
      <h3>🔮 Prediction</h3>
      <p><strong>Tomorrow’s Price:</strong> ${predictedPrice}</p>
    </div>
  );
};

export default PredictionCard;
