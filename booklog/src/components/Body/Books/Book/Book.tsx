import { useContext } from "react";
import type { BookItem } from "../../../../types";
import { BooksContext } from "../../../../context";
import styles from "../Books.module.css";

type Props = {
  bookInfo: BookItem;
};

export const Book = ({ bookInfo }: Props): JSX.Element => {
  const { title, authors, description, publisher, imageLinks, previewLink } =
    bookInfo["volumeInfo"];

  const { addMyBooks } = useContext(BooksContext);
  return (
    <>
      {imageLinks && (
        <picture className={styles.boxPicture}>
          <img src={imageLinks.thumbnail} alt={title} />
        </picture>
      )}
      <div className={styles.boxInfo}>
        <h2 className={styles.boxBookTitle}>{title}</h2>
        {description && <p className={styles.boxDescription}>{description}</p>}
        {authors && (
          <p>
            著者: <span>{authors.join("、")}</span>
          </p>
        )}
        {publisher && (
          <p>
            出版社: <span>{publisher}</span>
          </p>
        )}
        <div className={styles.conButton}>
          {previewLink && (
            <a className={styles.boxButton} href={previewLink} target="_blank">
              詳しく見る
            </a>
          )}
          <button
            className={styles.boxButtonOrange}
            onClick={() => addMyBooks(bookInfo)}
          >
            MyBooksに追加
          </button>
        </div>
      </div>
    </>
  );
};
