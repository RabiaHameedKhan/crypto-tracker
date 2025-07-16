import React, { useEffect, useState } from "react";
import MarketChart from "../components/MarketChart";
import axios from "axios";

const Market = ({ selectedCurrency, searchQuery }) => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    if (!selectedCurrency) return;

    axios
      .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${selectedCurrency}`)
      .then((res) => setCoins(res.data))
      .catch((err) => console.error("API error:", err));
  }, [selectedCurrency]);

  // Filter coins by search
  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 text-white ">
      <h2 className="text-3xl font-semibold mb-6 text-black">Market Overview</h2>
          <MarketChart selectedCurrency={selectedCurrency} />
      <div className="overflow-x-auto bg-gray-800 rounded-lg shadow">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-700 text-left">
              <th className="px-4 py-3">Coin</th>
              <th className="px-4 py-3">Symbol</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">24h Change</th>
              <th className="px-4 py-3">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {filteredCoins.map((coin) => (
              <tr
                key={coin.id}
                className="border-t border-gray-700 hover:bg-gray-700 transition duration-200"
              >
                <td className="px-4 py-3 flex items-center gap-2">
                  <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                  {coin.name}
                </td>
                <td className="px-4 py-3 uppercase text-gray-300">{coin.symbol}</td>
                <td className="px-4 py-3">{coin.current_price.toLocaleString()} {selectedCurrency.toUpperCase()}</td>
                <td
                  className={`px-4 py-3 ${
                    coin.price_change_percentage_24h >= 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {coin.price_change_percentage_24h?.toFixed(2)}%
                </td>
                <td className="px-4 py-3">
                  ${coin.market_cap.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Market;
