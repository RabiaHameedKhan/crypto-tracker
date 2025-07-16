// src/pages/Portfolio.jsx

import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const dummyHoldings = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
    quantity: 0.5,
    current_price: 65000,
    price_change_percentage_24h: 2.3,
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
    quantity: 2,
    current_price: 3500,
    price_change_percentage_24h: -1.5,
  },
];

const COLORS = ["#facc15", "#60a5fa", "#f472b6", "#34d399", "#a78bfa"];

const Portfolio = () => {
  const totalValue = dummyHoldings.reduce(
    (acc, coin) => acc + coin.quantity * coin.current_price,
    0
  );

  const chartData = dummyHoldings.map((coin) => ({
    name: coin.name,
    value: coin.quantity * coin.current_price,
  }));

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-black mb-4">My Portfolio</h2>

      {/* Total Value */}
      <div className="bg-gray-800 p-4 rounded-lg text-white mb-6">
        <p className="text-lg">Total Portfolio Value:</p>
        <h3 className="text-2xl font-bold">${totalValue.toLocaleString()}</h3>
      </div>

      

      {/* Holdings Table */}
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full text-sm text-white bg-gray-900 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-700 text-left">
              <th className="py-3 px-4">Coin</th>
              <th className="py-3 px-4">Quantity</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Value</th>
              <th className="py-3 px-4">% 24h</th>
            </tr>
          </thead>
          <tbody>
            {dummyHoldings.map((coin) => (
              <tr key={coin.id} className="border-t border-gray-700">
                <td className="py-3 px-4 flex items-center gap-2">
                  <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                  {coin.name}
                  <span className="text-gray-400 text-xs">
                    ({coin.symbol.toUpperCase()})
                  </span>
                </td>
                <td className="py-3 px-4">{coin.quantity}</td>
                <td className="py-3 px-4">
                  ${coin.current_price.toLocaleString()}
                </td>
                <td className="py-3 px-4">
                  ${(coin.quantity * coin.current_price).toLocaleString()}
                </td>
                <td
                  className={`py-3 px-4 ${
                    coin.price_change_percentage_24h > 0
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     {/* Pie Chart – Modern Styled Box */}
<div className="bg-gray-900 p-4 sm:p-6 rounded-2xl border border-gray-700 shadow-sm text-white">
  <h3 className="text-lg font-semibold mb-4 text-yellow-400">Portfolio Allocation</h3>

  <div className="w-full h-64">
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          labelLine={false}
          label={({ name, percent }) =>
            `${name} (${(percent * 100).toFixed(1)}%)`
          }
        >
          {chartData.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{ backgroundColor: "#1f2937", border: "none", color: "#fff" }}
          formatter={(value) => `$${parseFloat(value).toLocaleString()}`}
        />
        <Legend
          verticalAlign="bottom"
          height={36}
          wrapperStyle={{ color: "#ccc" }}
        />
      </PieChart>
    </ResponsiveContainer>
  </div>
</div>

    </div>
  );
};

export default Portfolio;
