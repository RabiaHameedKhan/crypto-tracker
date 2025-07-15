import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gray-800 p-4 rounded-lg shadow-md mb-6">
      <input
        type="text"
        placeholder="Search cryptocurrency..."
        className="w-full sm:w-1/2 px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />

      <div className="relative w-full sm:w-40">
  <select
    className="appearance-none w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 cursor-pointer"
  >
    <option value="usd">USD</option>
    <option value="inr">INR</option>
    <option value="pkr">PKR</option>
  </select>

  {/* Custom dropdown arrow */}
  <div className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none text-white">
    ▼
  </div>
</div>

    </div>
  );
};

export default SearchBar;
