import { Book } from "./Book/Book";
import type { Result, BookItem } from "../../../types";
import styles from "./Books.module.css";

type Props = {
  bookItems: BookItem[];
  total: Result["totalItems"];
};

export const Books = ({ bookItems, total }: Props): JSX.Element => {
  return (
    <>
      <p className={styles.boxTotalCounts}>
        {total}件の書籍が見つかりました。
        <br />
        そのうち10件を表示します。
      </p>
      <ul className={styles.conBook}>
        {bookItems.map((item, i) => {
          return (
            <li key={i} className={styles.boxBook}>
              <Book bookInfo={item.volumeInfo} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
