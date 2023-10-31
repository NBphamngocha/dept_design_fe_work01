import { useState } from 'react'
import type { BookItem } from './types'
import { MOCK_DATA } from './mockdata'
import styles from './App.module.css'
import Header from './components/Header'
import Book from './components/Book'

const App = (): JSX.Element => {
  const [books, setBooks] = useState<BookItem[]>(MOCK_DATA.items)

  return (
    <>
      <Header />
      <main className={styles.boxWrap}>
        <ul className={styles.conBook}>
          {books.map((book) => {
            return (
              <li className={styles.boxBook}>
                <Book bookInfo={book.volumeInfo} />
              </li>
            )
          })}
        </ul>
      </main >
    </>
  )
}

export default App
