import React, { useEffect, useState } from "react";
import { Combobox } from "@headlessui/react";

const SearchBar = ({ selectedCurrency, onCurrencyChange, searchTerm, onSearchChange }) => {
  const [currencies, setCurrencies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/simple/supported_vs_currencies")
      .then((res) => res.json())
      .then((data) => setCurrencies(data));
  }, []);

  const filteredCurrencies = query === ""
    ? currencies
    : currencies.filter((currency) =>
        currency.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gray-800 p-4 rounded-lg shadow-md mb-6">
      {/* Search coin input */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search cryptocurrency..."
        className="w-full sm:w-1/2 px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />

      {/* Currency dropdown */}
      <Combobox
  value={selectedCurrency}
  onChange={(value) => {
    if (value) {
      onCurrencyChange(value); // Only update if value is not empty
    }
  }}
>

        <div className="relative w-full sm:w-40">
          <Combobox.Input
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(currency) => currency}
            placeholder="Currency"
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white shadow-lg z-50">
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
        </div>
      </Combobox>
    </div>
  );
};

export default SearchBar;
