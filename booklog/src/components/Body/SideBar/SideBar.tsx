import { useContext } from "react";
import { BooksContext } from "../../../context";
import styles from "./SideBar.module.css";

export const SideBar = (): JSX.Element => {
  const { myBooks, deleteMyBooks } = useContext(BooksContext);

  return (
    <ul className={styles.wrapMyBooks}>
      {myBooks.map((item) => {
        const { id } = item;
        const { title, authors, imageLinks, previewLink } = item.volumeInfo;
        return (
          <li className={styles.boxMyBooks} key={item.id}>
            {imageLinks && (
              <picture className={styles.boxPicture}>
                <img src={imageLinks.thumbnail} alt={title} />
              </picture>
            )}
            <h2 className={styles.boxBookTitle}>{title}</h2>
            {authors && (
              <p>
                著者: <span>{authors.join("、")}</span>
              </p>
            )}
            <div className={styles.conButton}>
              {previewLink && (
                <a
                  className={styles.boxButton}
                  href={previewLink}
                  target="_blank"
                >
                  詳しく見る
                </a>
              )}
              <button
                className={styles.boxButtonOrange}
                onClick={() => deleteMyBooks(id)}
              >
                MyBooksから削除
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
