import React, { useEffect, useState } from "react";
import { Combobox } from "@headlessui/react";

const SearchBar = ({
  searchQuery,
  setSearchQuery,
  selectedCurrency,
  setSelectedCurrency,
}) => {
  const [currencies, setCurrencies] = useState([]);
  const [query, setQuery] = useState("");

  // Fetch supported currencies once
  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/simple/supported_vs_currencies")
      .then((res) => res.json())
      .then((data) => {
        setCurrencies(data.map((c) => c.toLowerCase())); // normalize
      });
  }, []);

  // Filter currencies based on query
  const filteredCurrencies =
    query === ""
      ? currencies
      : currencies.filter((currency) =>
          currency.toLowerCase().includes(query.toLowerCase())
        );

  // Handle selection safely
  const handleCurrencyChange = (value) => {
    if (value && currencies.includes(value.toLowerCase())) {
      setSelectedCurrency(value.toLowerCase());
      setQuery(""); // reset query after selection
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-gray-800 p-4 rounded-lg shadow-md mb-6">
      {/* Coin search input */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search coins..."
        className="w-full md:w-1/2 px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />

      {/* Currency dropdown */}
      <Combobox value={selectedCurrency} onChange={handleCurrencyChange}>
        <div className="relative w-full md:w-52">
          <Combobox.Input
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            displayValue={(currency) => currency?.toUpperCase() || ""}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Select currency"
          />
          {/* Only show options if available */}
          {filteredCurrencies.length > 0 && (
            <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-sm shadow-lg">
              {filteredCurrencies.map((currency) => (
                <Combobox.Option
                  key={currency}
                  value={currency}
                  className={({ active }) =>
                    `cursor-pointer select-none px-4 py-2 ${
                      active ? "bg-yellow-500 text-white" : "text-gray-900"
                    }`
                  }
                >
                  {currency.toUpperCase()}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          )}
        </div>
      </Combobox>
    </div>
  );
};

export default SearchBar;
