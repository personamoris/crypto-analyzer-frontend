import React, { useState } from "react";
import { getHighestNormalizedRange } from "../services/cryptoService";

const Crypto = () => {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await getHighestNormalizedRange();
      setStats(response);
      setError("");
    } catch (err) {
      setError("I couldn't find any information.");
      setStats(null);
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Crypto with Highest Normalized Range</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <button type="submit" style={{ padding: "0.1rem 1rem" }}>
          Highest Normalized Range
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {stats && (
        <div>
          <h3>Results:</h3>
          <p>Symbol: {stats.symbol}</p>
          <p>Maximum price: {stats.maxPrice}</p>
          <p>Minimum price: {stats.minPrice}</p>
          <p>Normalized Range: {stats.normalizedValue}</p>
        </div>
      )}
    </div>
  );
};

export default Crypto;
