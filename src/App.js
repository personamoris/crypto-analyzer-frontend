import React from "react";
import CryptoStatsPage from "./components/CryptoStatsPage";
import CryptoByDate from "./components/CryptoByDate";
import Crypto from "./components/Crypto";

function App() {
  return (
    <div className="App">
      <CryptoStatsPage />
      <CryptoByDate />
      <Crypto />
    </div>
  );
}

export default App;
