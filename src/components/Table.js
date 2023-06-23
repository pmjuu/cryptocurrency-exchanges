import styles from "./Table.module.css";
import { useSelector, useDispatch } from "react-redux";
import { sortAscending, sortDescending } from "@/features/dataSlice";
import { useState } from "react";
import Modal from "./Modal";

export default function Table() {
  const dispatch = useDispatch();
  const { exchanges, isAscending, isDescending } = useSelector(
    (state) => state.data
  );

  const [isModalOpened, setIsModalOpened] = useState(false);
  const closeModal = () => setIsModalOpened(false);
  const openModal = () => setIsModalOpened(true);

  return (
    <main>
      {isModalOpened && <Modal closeModal={closeModal}>exchange info</Modal>}
      <div className={styles.table}>
        <div className={styles.tableHead}>
          <div className={styles.cell}>거래소</div>
          <div className={styles.cell}>
            거래량
            <div className={styles.sortButtons}>
              <button
                className={`${styles.sortButton} ${
                  isAscending && styles.active
                }`}
                onClick={() => dispatch(sortAscending())}
              >
                ASC
              </button>
              <button
                className={`${styles.sortButton} ${
                  isDescending && styles.active
                }`}
                onClick={() => dispatch(sortDescending())}
              >
                DESC
              </button>
            </div>
          </div>
          <div className={styles.cell}>국가</div>
        </div>
        <div className={styles.tableContents}>
          {exchanges.map(
            ({ id, name, trade_volume_24h_btc, image, country }) => (
              <div className={styles.tableRow} key={id} onClick={openModal}>
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
