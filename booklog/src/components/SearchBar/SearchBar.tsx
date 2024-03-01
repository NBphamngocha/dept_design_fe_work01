import { useRef } from "react";
import styles from "./SearchBar.module.css";

export const SearchBar = (): JSX.Element => {
  const searchRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>): void => {
    e.preventDefault();
    searchRef.current?.value
      ? alert(`${searchRef.current?.value} で検索しました。`)
      : alert("キーワードを入力してください！");
  };
  return (
    <div>
      <form className={styles.boxSearchBar} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.boxInput}
          placeholder="キーワードを入力して書籍を検索"
          ref={searchRef}
        />
        <button type="submit" className={styles.boxButton}>
          Search
        </button>
      </form>
    </div>
  );
};
