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

const ChartView = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>Loading chart...</p>;
  }

  const chartData = {
    labels: data.map((point) => point.date),
    datasets: [
      {
        label: "Price",
        data: data.map((point) => point.price),
        fill: false,
        borderColor: "#3b82f6",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
    },
  };

  return (
    <div style={{ background: "#fff", padding: "20px", borderRadius: "10px" }}>
      <h3>📈 Stock Trend (Past 7 Days)</h3>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default ChartView;
