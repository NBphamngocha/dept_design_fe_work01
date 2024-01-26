import { useState } from "react";
import type { BookItem } from "../types";

//MyBooksの初期値をlocalStorageと同期する
const getLocalStorageValue = (key: string, initValue: BookItem[]) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : initValue;
};

///keyが指定できるように、カスタマイズHookを作成する
export const useLocalStorage = (key: string, initValue: BookItem[]) => {
  const [value, setValue] = useState<BookItem[]>(() =>
    getLocalStorageValue(key, initValue)
  );
  return [value, setValue] as const;
};
