import React from "react";

const PredictionCard = ({ predictedPrice }) => {
  if (!predictedPrice) return <p>Loading prediction...</p>;

  return (
    <div className="snapshotcard">
      <h3>🔮 Prediction</h3>
      <p><strong>Tomorrow’s Price:</strong> ${predictedPrice}</p>
    </div>
  );
};

export default PredictionCard;
