import React from 'react';
import SearchBar from '../components/SearchBar';
import CoinList from '../components/CoinList';

const Home = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-4">Live Crypto Prices</h2>
      <SearchBar/>
      <CoinList/>
     
    </div>
  );
};

export default Home;
