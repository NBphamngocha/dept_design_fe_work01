import type { BooksResult } from "../index";
import {
  Decoder,
  object,
  string,
  number,
  array,
  optional,
} from "@mojotech/json-type-validation";

//JSON にバリデーションをかけるために、Decoderを定義する
export const ResultDecoder: Decoder<BooksResult> = object({
  // id: number(), //テスト用
  items: array(
    object({
      id: string(),
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
