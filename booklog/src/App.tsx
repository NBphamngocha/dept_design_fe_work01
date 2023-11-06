import { useState } from "react";
import type { BookItem } from "./types";
import { MOCK_DATA } from "./mockdata";
import { Header } from "./components/Header/Header";
import { Book } from "./components/Book/Book";
import { SearchBar } from "./components/SearchBar/SearchBar";
import styles from "./App.module.css";

export const App = (): JSX.Element => {
  const [books, setBooks] = useState<BookItem[]>(MOCK_DATA.items);

  return (
    <>
      <Header />
      <main className={styles.boxWrap}>
        <SearchBar />
        <ul className={styles.conBook}>
          {books.map((book) => {
            return (
              <li key={book.id} className={styles.boxBook}>
                <Book bookInfo={book.volumeInfo} />
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};
