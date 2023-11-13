import styles from "./Header.module.css";

export const Header = (): JSX.Element => {
  return (
    <header className={styles.boxHeader}>
      <h1 className={styles.boxHeaderTitle}>Booklog</h1>
    </header>
  );
};
