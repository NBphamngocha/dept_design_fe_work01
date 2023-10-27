import { useState } from 'react'
import type { BookItem } from './types'
import { MOCK_DATA } from './mockdata'
import styles from './App.module.css'
import Header from './components/Header'
import Book from './components/Book'

const App: React.FC = () => {
  const [books, setBooks] = useState<BookItem[]>(MOCK_DATA.items)
  // const { title, authors, description, publisher, imageLinks, previewLink } = books[0].volumeInfo

  return (
    <>
      <Header />
      <main className={styles.boxWrap}>
        <ul className={styles.conBook}>
          {books.map((book) => {
            return (
              <Book bookInfo={book.volumeInfo} />
            )
          })}
        </ul>
      </main >
    </>
  )
}

export default App
