import React from "react";
import SearchBar from "../components/SearchBar";
import CoinList from "../components/CoinList";

const Home = ({ selectedCurrency, onCurrencyChange, searchTerm, onSearchChange }) => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-4 text-black">Live Crypto Prices</h2>
      <SearchBar
        selectedCurrency={selectedCurrency}
        onCurrencyChange={onCurrencyChange}
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
      />
      <CoinList
        selectedCurrency={selectedCurrency}
        searchTerm={searchTerm}
      />
    </div>
  );
};

export default Home;
