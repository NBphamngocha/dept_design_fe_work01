import { useRef } from "react";
import styles from "./SearchBar.module.css";

type Props = {
  fetchBooksApi: (query: string) => void;
};

export const SearchBar = ({ fetchBooksApi }: Props): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputRef.current?.value) {
      fetchBooksApi(inputRef.current.value);
    } else {
      alert("キーワード入力してください！");
    }
  };
  return (
    <form className={styles.boxSearchBar} action="">
      <input
        ref={inputRef}
        type="text"
        className={styles.boxInput}
        placeholder="キーワードを入力して書籍を検索"
      />
      <button className={styles.boxButton} onClick={handleSearch}>
        Search
      </button>
    </form>
  );
};
