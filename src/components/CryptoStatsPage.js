import React, { useState } from "react";
import { getCryptoStats } from "../services/cryptoService";

const CryptoStatsPage = () => {
  const [symbol, setSymbol] = useState("");
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await getCryptoStats(symbol);
      setStats(result);
      setError("");
    } catch (err) {
      setError("Nu am găsit informații pentru această criptomonedă.");
      setStats(null);
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Cryptocurrency Statistics - *BTC *ETH *DOGE *XRP</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <input
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          placeholder="Crypto ex. (BTC)"
          style={{ padding: "0.5rem", marginRight: "1rem" }}
        />
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          Caută
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {stats && (
        <div>
          <h3>Results for {symbol}</h3>
          <p>Oldest price: {stats.oldestPrice} </p>
          <p>Newest price: {stats.newestPrice}</p>
          <p>Minimum price: {stats.minPrice}</p>
          <p>Maximum price: {stats.maxPrice}</p>
        </div>
      )}
    </div>
  );
};

export default CryptoStatsPage;
