import { useState } from "react";

//type,decoder
import type { BookItem, BooksResult } from "../../types";
import { ResultDecoder } from "../../types/decoder";

//component
import { Books } from "./Books/Books";
import { SearchBar } from "./SearchBar/SearchBar";
import { SideBar } from "./SideBar/SideBar";

//style
import styles from "../../App.module.css";

//data
import { MOCK_DATA } from "../../mockdata";

export const Body = (): JSX.Element => {
  const endPoint: string = `https://www.googleapis.com/books/v1/`;
  const [bookItems, setBookItems] = useState<BooksResult["items"]>();
  const [total, setTotal] = useState<BooksResult["totalItems"]>(0);
  const myBooks: BookItem[] = MOCK_DATA.items;

  //非同期の処理
  async function fetchBooksApi(query: string): Promise<void> {
    try {
      const response = await fetch(
        `${endPoint}volumes?q=${encodeURIComponent(query)}&maxResults=10`
      );
      // OK以外エラーメッセージを表示する
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText} Error`);
      }
      const bookData: BooksResult = await response.json();
      //JSONのバリデーション実装（awaitがいらない）
      ResultDecoder.runWithException(bookData);
      setTotal(bookData.totalItems);
      setBookItems(bookData.items);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.conWrap}>
      <aside className={styles.boxSideBar}>
        <SideBar myBooks={myBooks} />
      </aside>
      <main className={styles.boxMain}>
        <SearchBar fetchBooksApi={fetchBooksApi} />
        {bookItems && <Books bookItems={bookItems} total={total} />}
      </main>
    </div>
  );
};
