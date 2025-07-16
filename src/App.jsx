import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Market from "./pages/Market";
import Portfolio from "./pages/Portfolio";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("usd");

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-0 sm:ml-60 w-full">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedCurrency={selectedCurrency}
                setSelectedCurrency={setSelectedCurrency}
              />
            }
          />
          <Route
            path="/market"
            element={
              <Market
                searchQuery={searchQuery}
                selectedCurrency={selectedCurrency}
              />
            }
          />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
