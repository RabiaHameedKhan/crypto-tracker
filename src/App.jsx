import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  const [currency, setCurrency] = useState("usd");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Navbar />
      <Home
        selectedCurrency={currency}
        onCurrencyChange={setCurrency}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
    </>
  );
};

export default App;
