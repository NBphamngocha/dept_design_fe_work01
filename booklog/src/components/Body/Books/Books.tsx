import { Book } from "./Book/Book";
import type { BookItem } from "../../../types";
import styles from "./Books.module.css";

type Props = {
  bookItems: BookItem[];
  total: number;
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
        {bookItems.map((item) => {
          return (
            <li key={item.id} className={styles.boxBook}>
              <Book bookInfo={item.volumeInfo} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
