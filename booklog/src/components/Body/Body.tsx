import { useContext } from "react";
import { BooksContext } from "../../context/BooksProvider";
import { MyBooksProvider } from "../../context/MyBooksProvider";
import { BooksProvider } from "../../context/BooksProvider";
//component
import { Books } from "./Books/Books";
import { SearchBar } from "./SearchBar/SearchBar";
import { SideBar } from "./SideBar/SideBar";

//style
import styles from "../../App.module.css";

export const Body = (): JSX.Element => {
  const { bookItems } = useContext(BooksContext);
  return (
    <MyBooksProvider>
      <div className={styles.conWrap}>
        <SideBar />
        <BooksProvider>
          <main className={styles.boxMain}>
            <SearchBar />
            {bookItems.length !== 0 && <Books />}
          </main>
        </BooksProvider>
      </div>
    </MyBooksProvider>
  );
};
