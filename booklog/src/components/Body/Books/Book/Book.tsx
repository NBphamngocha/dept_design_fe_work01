import type { BookItem } from "../../../../types";
import styles from "../Books.module.css";

type Props = {
  bookInfo: BookItem["volumeInfo"];
};

export const Book = ({ bookInfo }: Props): JSX.Element => {
  const { title, authors, description, publisher, imageLinks, previewLink } =
    bookInfo;
  return (
    <>
      {imageLinks && (
        <picture className={styles.boxPicture}>
          <img src={imageLinks.thumbnail} alt="React.js&Next.js超入門第2版" />
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
        {previewLink && (
          <a className={styles.boxButton} href={previewLink} target="_blank">
            詳しく見る
          </a>
        )}
      </div>
    </>
  );
};
