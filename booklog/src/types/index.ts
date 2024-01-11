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
  myBooks: BookItem[];
  AddMyBooks: (id: string) => void;
  DeleteMyBooks: (id: string) => void;
};
