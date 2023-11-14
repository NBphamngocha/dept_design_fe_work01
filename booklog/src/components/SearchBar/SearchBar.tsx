import { useRef } from "react";
import styles from "./SearchBar.module.css";

export const SearchBar = (): JSX.Element => {
  const searchQuery = useRef<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    searchQuery.current = e.target.value;
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    searchQuery.current
      ? alert(`${searchQuery.current} で検索しました。`)
      : alert("キーワードを入力してください！");
  };
  return (
    <div>
      <form className={styles.boxSearchBar} action="">
        <input
          type="text"
          className={styles.boxInput}
          placeholder="キーワードを入力して書籍を検索"
          onChange={handleChange}
        />
        <button
          type="submit"
          className={styles.boxButton}
          onClick={handleClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};
