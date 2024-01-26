import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";
import { BooksContextProvider } from "./context";

export const App = (): JSX.Element => {
  return (
    <BooksContextProvider>
      <Header />
      <Body />
    </BooksContextProvider>
  );
};
