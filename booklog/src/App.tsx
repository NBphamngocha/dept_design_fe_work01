import { useState } from "react";
import type { BookItem } from "./types";
import { MOCK_DATA } from "./mockdata";
import { Header } from "./components/Header/Header";
import { Books } from "./components/Books/Books";
import { SearchBar } from "./components/SearchBar/SearchBar";
import styles from "./App.module.css";

export const App = (): JSX.Element => {
  const [books] = useState<BookItem[]>(MOCK_DATA.items);

  return (
    <>
      <Header />
      <main className={styles.boxWrap}>
        <SearchBar />
        <Books books={books} />
      </main>
    </>
  );
};
