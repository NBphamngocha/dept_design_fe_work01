//context
import { MyBooksProvider } from "../../context/MyBooksProvider";
//hook
import { useSearchForm } from "../../hooks/useSearchForm";

//component
import { Books } from "./Books/Books";
import { SearchBar } from "./SearchBar/SearchBar";
import { SideBar } from "./SideBar/SideBar";

//style
import styles from "../../App.module.css";

export const Body = (): JSX.Element => {
  const { bookItems, total, fetchBooksApi } = useSearchForm();

  return (
    <div className={styles.conWrap}>
      <MyBooksProvider>
        <SideBar />
        <main className={styles.boxMain}>
          <SearchBar fetchBooksApi={fetchBooksApi} />
          {bookItems.length !== 0 && (
            <Books total={total} bookItems={bookItems} />
          )}
        </main>
      </MyBooksProvider>
    </div>
  );
};
