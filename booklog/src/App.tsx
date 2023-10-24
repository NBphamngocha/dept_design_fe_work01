import { useState } from 'react'
import { BookItem } from './types'
import { MOCK_DATA } from './mockdata'
import styles from './App.module.css'


const App = () => {
  const [bookData, setBookData] = useState<BookItem[]>(MOCK_DATA.items)
  const { title, authors, description, publisher, imageLinks, previewLink } = bookData[0].volumeInfo
  console.log(typeof imageLinks)

  return (
    <>
      <main className={styles.boxWrap}>
        {
          imageLinks && (
            <picture className={styles.boxPicture}>
              <img src={imageLinks.thumbnail} alt="React.js&Next.js超入門第2版" />
            </picture>
          )
        }
        <div className={styles.boxInfo}>
          <h2 className={styles.boxTitle}>{title}</h2>
          {
            description && <p className={styles.boxDescription}>{description}</p>}
          {
            authors && <p>著者: <span>{authors.join("、")}</span></p>
          }
          {
            publisher && <p>出版社: <span>{publisher}</span></p>
          }
          {
            previewLink && <button className={styles.boxButton}><a href={previewLink} target="_blank">詳しく見る</a></button>
          }
        </div>
      </main >
    </>
  )
}

export default App
