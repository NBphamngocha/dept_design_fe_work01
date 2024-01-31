import { useContext } from "react";

//context
import { BooksContext } from "../../context/BooksProvider";

//component
import { Books } from "./Books/Books";
import { SearchBar } from "./SearchBar/SearchBar";
import { SideBar } from "./SideBar/SideBar";

//style
import styles from "../../App.module.css";

export const Body = (): JSX.Element => {
  const { bookItems } = useContext(BooksContext);
  return (
    <div className={styles.conWrap}>
      <SideBar />
      <main className={styles.boxMain}>
        <SearchBar />
        {bookItems.length !== 0 && <Books />}
      </main>
    </div>
  );
};
