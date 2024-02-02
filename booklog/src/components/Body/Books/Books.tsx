import { Book } from "./Book/Book";
import type { BookItem } from "../../../types";
import styles from "./Books.module.css";

type Props = {
  total: number;
  bookItems: BookItem[];
};

export const Books = ({ total, bookItems }: Props): JSX.Element => {
  return (
    <>
      <p className={styles.boxTotalCounts}>
        {total}件の書籍が見つかりました。
        <br />
        {total >= 10 && `そのうち10件を表示します。`}
      </p>
      <ul className={styles.conBook}>
        {bookItems.map((item) => {
          return (
            <li key={item.id} className={styles.boxBook}>
              <Book bookInfo={item} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
