import type { BookItem } from "../../../types";
import styles from "./SideBar.module.css";

type Props = {
  myBooks: BookItem[];
};

export const SideBar = ({ myBooks }: Props): JSX.Element => {
  return (
    <ul className={styles.wrapMyBooks}>
      {myBooks.map((item) => {
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
            {previewLink && (
              <a
                className={styles.boxButton}
                href={previewLink}
                target="_blank"
              >
                詳しく見る
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
};
