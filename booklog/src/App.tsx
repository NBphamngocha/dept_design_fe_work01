import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";
import { MyBooksProvider } from "./context/MyBooksProvider";
import { BooksProvider } from "./context/BooksProvider";

export const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <BooksProvider>
        <MyBooksProvider>
          <Body />
        </MyBooksProvider>
      </BooksProvider>
    </>
  );
};
