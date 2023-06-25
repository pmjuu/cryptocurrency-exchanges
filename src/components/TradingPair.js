import styles from "../styles/TradingPair.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function TradingPair({ exchange, exchangeId }) {
  const [tradingPairs, setTradingPairs] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getTradingPair();
  }, []);

  async function getTradingPair() {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/exchanges/${exchangeId}`
      );
      const pairs = response.data.tickers.map(
        (ticker) => `${ticker.base}/${ticker.target}`
      );
      setTradingPairs(pairs);
    } catch (error) {
      setErrorMessage(`Request Failed\n\n${error.response.data.error}`);
    }
  }

  return (
    <section>
      <h1 className={styles.title}>{`${exchange}\n거래쌍 목록`}</h1>
      {errorMessage ? (
        <p className={styles.error}>{errorMessage}</p>
      ) : (
        <ul className={styles.tradingPairs}>
          {tradingPairs.map((pair, index) => (
            <li className={styles.pair} key={`${pair}${index}`}>
              {`${String(index + 1).padStart(2, "0")}. ${pair}`}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
