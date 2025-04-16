import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const StockChart = ({ data }) => {
  if (!data || data.length === 0) return <p>No trend data available.</p>;

  return (
    <div style={{ maxWidth: "700px", margin: "30px auto" }}>
      <h3>📉 Last 7 Days Price Chart</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" />
          <Line type="monotone" dataKey="price" stroke="#0d9488" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockChart;
