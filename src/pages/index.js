import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Table from "@/components/Table";
import axios from "axios";
import { wrapper } from "../app/store";
import { setExchanges } from "../features/dataSlice";

export default function Home() {
  return (
    <>
      <Head>
        <title>Crypto</title>
        <meta name="description" content="display cryptocurrency exchanges" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.body}>
        <header className={styles.header}>Cryptocurrency exchanges</header>
        <Table />
      </div>
    </>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  async function getExchangesData() {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/exchanges?per_page=3&page=3"
      );

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  const exchangesData = await getExchangesData();
  store.dispatch(setExchanges(exchangesData));

  return {
    props: {},
  };
});
