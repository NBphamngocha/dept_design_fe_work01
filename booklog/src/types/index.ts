export type BooksResult = {
  items: BookItem[];
  kind: string;
  totalItems: number;
  // id: number; //テスト用
};

export type BookItem = {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    description?: string;
    publisher?: string;
    imageLinks?: {
      smallThumbnail: string;
      thumbnail: string;
    };
    previewLink?: string;
  };
};

export type MyBooksContextType = {
  total: number;
  bookItems: BooksResult["items"];
  myBooks: BookItem[];
  fetchBooksApi: (query: string) => void;
  addMyBooks: (selectedBook: BookItem) => void;
  deleteMyBooks: (id: string) => void;
};
