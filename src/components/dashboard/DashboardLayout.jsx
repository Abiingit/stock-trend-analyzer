// src/components/dashboard/DashboardLayout.jsx
import React from "react";
import ChartView from "./ChartView";
import NewsFeed from "./NewsFeed";
import SnapshotCard from "./SnapshotCard";
import PredictionCard from "./PredictionCard";
import Chatbot from "./Chatbot";

import "../../App.css"; // if using global styles

const DashboardLayout = ({ ticker, multiTrendData, quote, predictedPrice, news }) => {
  return (
    <div className="dashboard">
      {/* Left Sidebar */}
      <div className="sidebar">
        <h2>📊 Stock Picker</h2>
        <SnapshotCard quote={quote} ticker={ticker} />
        <PredictionCard predictedPrice={predictedPrice} />
      </div>

      {/* Main Content */}
      <div className="main">
        <ChartView multiTrendData={multiTrendData} />
        <NewsFeed articles={news} />
        <Chatbot />
      </div>
    </div>
  );
};

export default DashboardLayout;
