import { SyntheticEvent, useState } from "react";
import { BookItem } from "../../types";
import styles from "../../App.module.css";
import { Books } from "./Books/Books";
import { SearchBar } from "./SearchBar/SearchBar";

export const Body = (): JSX.Element => {
  const endPoint: string = `https://www.googleapis.com/books/v1/`;
  const [bookItems, setBookItems] = useState<BookItem[]>(); //arrayかundefined
  const [query, setQuery] = useState<string>("");
  const [total, setTotal] = useState<number>(0);

  //非同期の処理
  async function fetchBooksApi(e: SyntheticEvent) {
    try {
      const response = await fetch(
        `${endPoint}volumes?q=${encodeURIComponent(query)}&maxResults=10`
      );
      // OK以外エラーメッセージを表示する
      if (!response.ok) {
        throw new Error(
          `response.status = ${response.status}, response.statusText = ${response.statusText}`
        );
      }
      const bookData = await response.json();
      setTotal(bookData.totalItems);
      setBookItems(bookData.items);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className={styles.boxWrap}>
      <SearchBar query={query} setQuery={setQuery} fetchApi={fetchBooksApi} />
      {bookItems ? <Books bookItems={bookItems} total={total} /> : ""}
    </main>
  );
};
