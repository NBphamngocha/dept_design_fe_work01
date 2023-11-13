import { Book } from "./Book/Book";
import type { BookItem } from "../../types";
import styles from "./Books.module.css";

type Props = {
  books: BookItem[];
};

export const Books = ({ books }: Props): JSX.Element => {
  return (
    <ul className={styles.conBook}>
      {books.map((book) => {
        return (
          <li key={book.id} className={styles.boxBook}>
            <Book bookInfo={book.volumeInfo} />
          </li>
        );
      })}
    </ul>
  );
};
