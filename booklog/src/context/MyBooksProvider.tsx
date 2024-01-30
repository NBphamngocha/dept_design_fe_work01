import { createContext, ReactNode, useEffect } from "react";
import type { BookItem, MyBooksContextType } from "../types";
import { useLocalStorage } from "../hooks";

type Props = {
  children: ReactNode;
};

//初期値設定
const defaultMyBooks = {
  myBooks: [],
  addMyBooks: () => {},
  deleteMyBooks: () => {},
};

export const MyBooksContext = createContext<MyBooksContextType>(defaultMyBooks);

export const MyBooksProvider = ({ children }: Props) => {
  //useStateの代わりにカスタマイズHookを使ってkeyを指定する
  const [myBooks, setMyBooks] = useLocalStorage("books", []);

  //myBooksのデータが更新される時、localStorageに保存する
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(myBooks));
  }, [myBooks]);

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
    myBooks,
    addMyBooks,
    deleteMyBooks,
  };

  return (
    <MyBooksContext.Provider value={value}>{children}</MyBooksContext.Provider>
  );
};
