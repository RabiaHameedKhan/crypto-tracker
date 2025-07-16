import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import CoinList from '../components/CoinList';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("usd");

  return (
    <div className="p-6 " >
      <h2 className="text-3xl font-semibold text-black mb-4">Live Crypto Prices</h2>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency}
      />
      <CoinList
        selectedCurrency={selectedCurrency}
        searchQuery={searchQuery}
      />
    </div>
  );
};

export default Home;
