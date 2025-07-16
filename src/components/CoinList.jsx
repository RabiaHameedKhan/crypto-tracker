import React, { useEffect, useState } from "react";
import axios from "axios";

const CoinList = ({ selectedCurrency, searchQuery }) => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const coinsPerPage = 12;

  useEffect(() => {
    if (!selectedCurrency) return;

    setIsLoading(true);
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${selectedCurrency}`
      )
      .then((res) => {
        
        setCoins(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("❌ API fetch error:", err);
        setIsLoading(false);
      });
  }, [selectedCurrency]);

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination Logic
  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = filteredCoins.slice(indexOfFirstCoin, indexOfLastCoin);
  const totalPages = Math.ceil(filteredCoins.length / coinsPerPage);

  return (
    <div className="mt-4">
      {isLoading ? (
        <div className="flex justify-center py-10">
          <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {currentCoins.map((coin) => (
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

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 rounded ${
                    page === currentPage
                      ? "bg-yellow-500 text-black"
                      : "bg-gray-700 text-white"
                  } hover:bg-yellow-600 transition`}
                >
                  {page}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CoinList;
