import styles from "./Table.module.css";

export default function Table({ exchangesData }) {
  return (
    <main>
      <div className={styles.table}>
        <div className={styles.tableHead}>
          <div className={styles.cell}>거래소</div>
          <div className={styles.cell}>
            거래량
            <div className={styles.sortButtons}>
              <button className={styles.sortButton}>ACS</button>
              <button className={styles.sortButton}>DESC</button>
            </div>
          </div>
          <div className={styles.cell}>국가</div>
        </div>
        <div className={styles.tableContents}>
          {exchangesData.map(
            ({ id, name, trade_volume_24h_btc, image, url, country }) => (
              <div className={styles.tableRow} key={id}>
                <div className={styles.cell}>
                  <img src={image} />
                  <span>{name}</span>
                </div>
                <div className={styles.cell}>{trade_volume_24h_btc}</div>
                <div className={styles.cell}>{country}</div>
              </div>
            )
          )}
        </div>
      </div>
    </main>
  );
}
