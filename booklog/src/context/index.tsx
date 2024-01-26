import { useState, createContext, ReactNode } from "react";
import type { BookItem, MyBooksContextType, BooksResult } from "../types";
import { ResultDecoder } from "../types/decoder";
import { useLocalStorage } from "../hooks";

type Props = {
  children: ReactNode;
};

//初期値設定
const defaultMyBooks = {
  total: 0,
  bookItems: [],
  myBooks: [],
  fetchBooksApi: () => {},
  addMyBooks: () => {},
  deleteMyBooks: () => {},
};

export const BooksContext = createContext<MyBooksContextType>(defaultMyBooks);

export const BooksContextProvider = ({ children }: Props) => {
  const endPoint: string = `https://www.googleapis.com/books/v1/`;
  const [bookItems, setBookItems] = useState<BooksResult["items"]>([]);
  const [total, setTotal] = useState<BooksResult["totalItems"]>(0);
  //useStateの代わりにカスタマイズHookを使ってkeyを指定する
  const [myBooks, setMyBooks] = useLocalStorage("books", []);

  async function fetchBooksApi(query: string): Promise<void> {
    try {
      const response = await fetch(
        `${endPoint}volumes?q=${encodeURIComponent(
          query
        )}&maxResults=10&key=AIzaSyCQT7Sg-xEq72wJgmK11kgu5GYF2n1HWpk`
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
  function addMyBooks(selectedBook: BookItem) {
    myBooks.find((book) => book.id === selectedBook.id)
      ? alert("その本はすでにマイブックに存在します。")
      : setMyBooks([selectedBook, ...myBooks]);
  }

  //MyBooksから本を削除
  function deleteMyBooks(id: string) {
    setMyBooks(myBooks.filter((item) => item.id !== id));
  }

  const value = {
    total,
    bookItems,
    myBooks,
    fetchBooksApi,
    addMyBooks,
    deleteMyBooks,
  };

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
};
