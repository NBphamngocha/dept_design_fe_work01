import { createContext, useState, ReactNode } from "react";
import type { BookItem, MyBooksContextType } from "../types";

type Props = {
  children: ReactNode;
};

const defaultMyBooks = {
  myBooks: [],
  addMyBooks: () => {},
  deleteMyBooks: () => {},
};

export const BooksContext = createContext<MyBooksContextType>(defaultMyBooks);

export const BooksContextProvider = ({ children }: Props) => {
  const [myBooks, setMyBooks] = useState<BookItem[]>([]);

  //MyBooksに本を追加
  function addMyBooks(selectedBook: BookItem) {
    myBooks.find((book) => book.id === selectedBook.id)
      ? alert("その本はすでにマイブックに存在します。")
      : setMyBooks([...myBooks, selectedBook]);
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
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
};
