import React, { useState } from "react";
import { getHighestNormalizedRangeForDay } from "../services/cryptoService";

const CryptoByDate = () => {
  const [inputDate, setInputDate] = useState("");
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert dd.mm.yyyy to YYYY-MM-DD
    const [day, month, year] = inputDate.split(".");
    const formattedDate = `${year}-${month}-${day}`;

    try {
      const response = await getHighestNormalizedRangeForDay(formattedDate);
      setStats(response);
      setError("");
    } catch (err) {
      setError("I couldn't find any information for this date.");
      setStats(null);
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Find Crypto with Highest Normalized Range</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <label htmlFor="inputDate">Date: </label>
        <input
          type="text"
          id="inputDate"
          value={inputDate}
          onChange={(e) => setInputDate(e.target.value)}
          placeholder="dd.mm.yyyy"
          style={{ padding: "0.1rem", marginRight: "1rem" }}
        />
        <button type="submit" style={{ padding: "0.1rem 1rem" }}>
          Search
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {stats && (
        <div>
          <h3>Results:</h3>
          <p>Crypto: {stats.symbol}</p>
          <p>Normalized Range: {stats.normalizedValue}</p>
        </div>
      )}
    </div>
  );
};

export default CryptoByDate;
