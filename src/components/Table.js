import styles from "@/styles/Home.module.css";
import axios from "axios";

export default function Table() {
  return (
    <>
      <div className={styles.table}>
        <div className={styles.tableRow}>
          <div>거래소</div>
          <div>
            거래량
            <div>
              <button className={styles.sortButton}>ACS</button>
              <button className={styles.sortButton}>DESC</button>
            </div>
          </div>
          <div>data..</div>
        </div>
        <div className={styles.tableContents}></div>
      </div>
    </>
  );
}
