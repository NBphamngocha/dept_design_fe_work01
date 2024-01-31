import { useState, createContext, ReactNode } from "react";
import type { BooksContextType, BooksResult } from "../types";
import { ResultDecoder } from "../types/decoder";

type Props = {
  children: ReactNode;
};

//初期値設定
const defaultBooks = {
  total: 0,
  bookItems: [],
  fetchBooksApi: () => {},
};

export const BooksContext = createContext<BooksContextType>(defaultBooks);

export const BooksProvider = ({ children }: Props) => {
  const endPoint: string = `https://www.googleapis.com/books/v1/`;
  const [bookItems, setBookItems] = useState<BooksResult["items"]>([]);
  const [total, setTotal] = useState<BooksResult["totalItems"]>(0);

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

  const value = {
    total,
    bookItems,
    fetchBooksApi,
  };

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
};
