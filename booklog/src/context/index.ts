import { createContext } from "react";
import type { MyBooksContextType } from "../types";

const defaultMyBooks = {
  myBooks: [],
  addMyBooks: () => {},
  deleteMyBooks: () => {},
};

export const BooksContext = createContext<MyBooksContextType>(defaultMyBooks);
