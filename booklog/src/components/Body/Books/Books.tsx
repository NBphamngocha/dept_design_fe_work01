import { useContext } from "react";
import { Book } from "./Book/Book";
import styles from "./Books.module.css";
import { BooksContext } from "../../../context";

export const Books = (): JSX.Element => {
  const { total, bookItems } = useContext(BooksContext);
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
