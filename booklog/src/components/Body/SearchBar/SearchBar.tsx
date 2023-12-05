import { SyntheticEvent } from "react";
import styles from "./SearchBar.module.css";

type Props = {
  query: string;
  setQuery: (query: string) => void;
  fetchApi: (e: SyntheticEvent) => void;
};

export const SearchBar = ({
  query,
  setQuery,
  fetchApi,
}: Props): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (query) {
      fetchApi(e);
    } else {
      alert("キーワード入力してください！");
    }
  };
  return (
    <form className={styles.boxSearchBar} action="#">
      <input
        type="text"
        className={styles.boxInput}
        value={query}
        placeholder="キーワードを入力して書籍を検索"
        onChange={handleChange}
      />
      <button type="submit" className={styles.boxButton} onClick={handleSearch}>
        Search
      </button>
    </form>
  );
};
