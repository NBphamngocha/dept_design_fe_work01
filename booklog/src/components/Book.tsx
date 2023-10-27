import { FC, useState } from 'react'
import type { BookItem } from '../types'
import styles from '../App.module.css'

const Book: FC<{ bookInfo: BookItem["volumeInfo"] }> = ({ bookInfo }) => {
  const { title, authors, description, publisher, imageLinks, previewLink } = bookInfo
  return (
    <>
      <li className={styles.boxBook}>
        {
          imageLinks && (
            <picture className={styles.boxPicture}>
              <img src={imageLinks.thumbnail} alt="React.js&Next.js超入門第2版" />
            </picture>
          )
        }
        <div className={styles.boxInfo}>
          <h2 className={styles.boxBookTitle}>{title}</h2>
          {
            description && <p className={styles.boxDescription}>{description}</p>}
          {
            authors && <p>著者: <span>{authors.join("、")}</span></p>
          }
          {
            publisher && <p>出版社: <span>{publisher}</span></p>
          }
          {
            previewLink && <p className={styles.boxButton}><a href={previewLink} target="_blank">詳しく見る</a></p>
          }
        </div>

      </li>
    </>
  )
}

export default Book


