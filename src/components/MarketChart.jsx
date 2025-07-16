import React, { useEffect, useState } from "react";
import axios from "axios";
import numeral from "numeral";
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from "recharts";

const COLORS = ["#FFBB28", "#FF8042", "#00C49F", "#0088FE", "#FF6666"];

const MarketChart = ({ selectedCurrency }) => {
  const [topCoins, setTopCoins] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${selectedCurrency}&order=market_cap_desc&per_page=5&page=1`)
      .then((res) => setTopCoins(res.data))
      .catch((err) => console.error("Chart data error:", err));
  }, [selectedCurrency]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
      {/* Bar Chart */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <ResponsiveContainer width="100%" height={250}>
  <BarChart data={topCoins}>
    <XAxis dataKey="name" stroke="#ccc" />
    <YAxis
      stroke="#ccc"
      tickFormatter={(value) => numeral(value).format("0.00a").toUpperCase()}
    />
    <Tooltip
      formatter={(value) => numeral(value).format("$0,0.00a").toUpperCase()}
    />
    <Bar dataKey="market_cap" fill="#a855f7" />
  </BarChart>
</ResponsiveContainer>
</div>

      {/* Pie Chart */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <h3 className="text-white text-lg font-semibold mb-3">Market Cap Share</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={topCoins}
              dataKey="market_cap"
              nameKey="name"
              outerRadius={100}
              label
            >
              {topCoins.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MarketChart;
