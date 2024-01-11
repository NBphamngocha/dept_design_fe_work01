import { useContext } from "react";
import { BooksContext } from "../Body";
import { Book } from "./Book/Book";
import type { BooksResult, BookItem, MyBooksContextType } from "../../../types";
import styles from "./Books.module.css";

type Props = {
  bookItems: BookItem[];
  total: BooksResult["totalItems"];
};

export const Books = ({ bookItems, total }: Props): JSX.Element => {
  const { AddMyBooks } = useContext(BooksContext) as MyBooksContextType;

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
              <Book bookInfo={item} AddMyBooks={AddMyBooks} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
