import React from "react";
import { useRef } from "react";
import styles from "./SearchBar.module.css";

export const SearchBar = (): JSX.Element => {
  let inputRef = useRef("");
  return (
    <div>
      <form className={styles.boxSearchBar} action="">
        <input
          type="text"
          className={styles.boxInput}
          onChange={(e) => (inputRef.current = e.target.value)}
          placeholder="キーワードを入力して書籍を検索"
        />
        <button
          type="submit"
          className={styles.boxButton}
          onClick={(e) => {
            e.preventDefault();
            inputRef.current
              ? alert(`${inputRef.current} で検索しました。`)
              : alert("キーワードを入力してください！");
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};
