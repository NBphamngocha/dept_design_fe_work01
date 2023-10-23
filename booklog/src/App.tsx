import { useState } from 'react'
import { BookItem } from './types'
import { MOCK_DATA } from './mockdata'
import styles from './index.module.css'


const App = () => {
  const [bookData, setBookData] = useState(MOCK_DATA.items)
  const [book, setBook] = useState<BookItem>(bookData[0])
  const { id, volumeInfo } = book;
  const { title, authors, description, publisher, imageLinks, previewLink } = volumeInfo
  const handleBookLink = () => {
    window.open(`${previewLink}`, '_blank');
  }

  return (
    <>
      <main className={styles.boxWrap}>
        <picture className={styles.boxPicture}>
          <img src={imageLinks?.thumbnail} alt="React.js&Next.js超入門第2版" />
        </picture>
        <div className={styles.boxInfo}>
          <h2 className={styles.boxTitle}>{title}</h2>
          <p className={styles.boxDescription}>{description}</p>
          <p>著者:<span>{authors}</span></p>
          <p>出版社:<span>{publisher}</span></p>
          <button className={styles.boxButton} onClick={handleBookLink}>詳しく見る</button>
        </div>
      </main >
    </>
  )
}

export default App
