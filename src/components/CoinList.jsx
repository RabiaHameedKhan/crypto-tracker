import React, { useEffect, useState } from "react";
import axios from "axios";

const CoinList = ({ selectedCurrency, searchQuery }) => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    if (!selectedCurrency) return;

    axios
      .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${selectedCurrency}`)
      .then((res) => setCoins(res.data))
      .catch((err) => console.error("❌ API fetch error:", err));
  }, [selectedCurrency]);

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
      {filteredCoins.map((coin) => (
        <div
          key={coin.id}
          className="bg-gray-800 p-3 rounded-xl shadow hover:shadow-lg hover:scale-105 transition-transform duration-200"
        >
          <div className="flex items-center space-x-3">
            <img src={coin.image} alt={coin.name} className="w-8 h-8" />
            <div>
              <h3 className="text-white text-sm font-semibold">{coin.name}</h3>
              <p className="text-xs uppercase text-gray-400">{coin.symbol}</p>
            </div>
          </div>
          <div className="mt-3 text-sm text-white space-y-1">
            <p>
              Price: {coin.current_price.toLocaleString()}{" "}
              {selectedCurrency.toUpperCase()}
            </p>
            <p
              className={
                coin.price_change_percentage_24h > 0
                  ? "text-green-400"
                  : "text-red-400"
              }
            >
              24h: {coin.price_change_percentage_24h?.toFixed(2)}%
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoinList;
