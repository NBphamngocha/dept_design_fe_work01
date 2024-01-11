import { useState, createContext } from "react";

//type,decoder
import type { BookItem, BooksResult, MyBooksContextType } from "../../types";
import { ResultDecoder } from "../../types/decoder";

//component
import { Books } from "./Books/Books";
import { SearchBar } from "./SearchBar/SearchBar";
import { SideBar } from "./SideBar/SideBar";

//style
import styles from "../../App.module.css";

export const BooksContext = createContext<MyBooksContextType | null>(null);
export const Body = (): JSX.Element => {
  const endPoint: string = `https://www.googleapis.com/books/v1/`;
  const [bookItems, setBookItems] = useState<BooksResult["items"]>([]);
  const [total, setTotal] = useState<BooksResult["totalItems"]>(0);
  const [myBooks, setMyBooks] = useState<BookItem[]>([]);

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

  //MyBooksに本を追加
  function AddMyBooks(id: string) {
    const selectedBook = bookItems.find((item) => item.id === id);
    if (selectedBook) {
      const checkAvailable = myBooks.find((item) => item.id === id);
      if (!checkAvailable) {
        setMyBooks([...myBooks, selectedBook]);
      } else {
        alert("その本はすでにマイブックに存在します。");
      }
    }
  }

  //MyBooksから本を削除
  function DeleteMyBooks(id: string) {
    setMyBooks(myBooks.filter((item) => item.id !== id));
  }

  return (
    <div className={styles.conWrap}>
      <BooksContext.Provider value={{ myBooks, AddMyBooks, DeleteMyBooks }}>
        <aside className={styles.boxSideBar}>
          <SideBar />
        </aside>
        <main className={styles.boxMain}>
          <SearchBar fetchBooksApi={fetchBooksApi} />
          {bookItems.length !== 0 && (
            <Books bookItems={bookItems} total={total} />
          )}
        </main>
      </BooksContext.Provider>
    </div>
  );
};
