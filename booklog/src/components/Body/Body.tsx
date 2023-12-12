import { useState } from "react";
import type { BooksResult } from "../../types";
import styles from "../../App.module.css";
import { Books } from "./Books/Books";
import { SearchBar } from "./SearchBar/SearchBar";
import {
  Decoder,
  object,
  string,
  number,
  array,
  optional,
} from "@mojotech/json-type-validation";

export const Body = (): JSX.Element => {
  const endPoint: string = `https://www.googleapis.com/books/v1/`;
  const [bookItems, setBookItems] = useState<Result["items"]>();
  const [total, setTotal] = useState<Result["totalItems"]>(0);

  //JSON にバリデーションをかけるために、Decoderを定義する
  const ResultDecoder: Decoder<Result> = object({
    // id: number(),　//テスト
    items: array(
      object({
        volumeInfo: object({
          title: string(),
          authors: optional(array(string())),
          description: optional(string()),
          publisher: optional(string()),
          imageLinks: optional(
            object({
              smallThumbnail: string(),
              thumbnail: string(),
            })
          ),
          previewLink: optional(string()),
        }),
      })
    ),
    kind: string(),
    totalItems: number(),
  });

  //非同期の処理
  async function fetchBooksApi(query: string): Promise<BooksResult | void> {
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
    <main className={styles.boxWrap}>
      <SearchBar fetchBooksApi={fetchBooksApi} />
      {bookItems ? <Books bookItems={bookItems} total={total} /> : ""}
    </main>
  );
};
