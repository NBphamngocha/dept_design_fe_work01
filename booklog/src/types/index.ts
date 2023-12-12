export type BooksResult = {
  items: BookItem[];
  kind: string;
  totalItems: number;
  // id: number;  //テスト
};

export type BookItem = {
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
