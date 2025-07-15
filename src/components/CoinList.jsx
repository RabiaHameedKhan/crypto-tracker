import React, { useEffect, useState } from "react";
import axios from "axios";

const CoinList = () => {
    // usestat to store coin data
  const [coins, setCoins] = useState([]);

  //useffect to run API when component loads
  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.error("❌ Error fetching data:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

      {coins.map((coin) => (
        <div
          key={coin.id}
          className="bg-gray-800 rounded-lg p-4 shadow-md hover:scale-105 transition-transform"
        >
          <div className="flex items-center gap-4">
            <img src={coin.image} alt={coin.name} className="w-10 h-10" />
            <div>
              <h3 className="text-lg font-bold text-white">{coin.name}</h3>
              <p className="text-gray-400 uppercase text-sm">{coin.symbol}</p>
            </div>
          </div>
          <div className="mt-4 text-white">
            <p>Price: ${coin.current_price.toLocaleString()}</p>
            <p
              className={
                coin.price_change_percentage_24h > 0
                  ? "text-green-400"
                  : "text-red-400"
              }
            >
        
              24h Change: {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoinList;
