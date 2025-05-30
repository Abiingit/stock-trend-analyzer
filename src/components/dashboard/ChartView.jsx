import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const colors = [
  "#3b82f6", // blue
  "#ef4444", // red
  "#10b981", // green
  "#8b5cf6", // purple
  "#f97316", // orange
];

const ChartView = ({ multiTrendData }) => {
    
  if (!multiTrendData || Object.keys(multiTrendData).length === 0) {
    return <p>Loading chart...</p>;
  }

  const datasets = Object.keys(multiTrendData).map((ticker, idx) => ({
    label: ticker,
    data: multiTrendData[ticker].map(point => point.price),
    borderColor: colors[idx % colors.length],
    backgroundColor: colors[idx % colors.length],
    fill: false,
    tension: 0.4,
  }));

  const labels = multiTrendData[Object.keys(multiTrendData)[0]].map(point => point.date);

  const chartData = {
    labels,
    datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div style={{
      background: "rgba(238, 228, 228, 0.2)",
      padding: "20px",
      borderRadius: "10px",
      marginBottom: "20px",
    }}>
      <h3>📈 Stock Trend Comparison</h3>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default ChartView;
