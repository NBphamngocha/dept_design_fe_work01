import { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";

export const Header = (): JSX.Element => {
  const [timer, setTimer] = useState<number>(0);
  const [isTimeUp, setIsTimeUp] = useState<boolean>(false);
  const ref = useRef<HTMLSelectElement>(null);

  //テキストに変更
  const textTimer: string = String(timer).padStart(2, "0");

  function handleStartTimer(): void {
    if (ref.current?.value) {
      setTimer(parseInt(ref.current.value));
      setIsTimeUp(false);
    }
  }

  useEffect(() => {
    //intervalのセットアップ
    console.log(isTimeUp);
    console.log(timer);
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer((timer) => timer - 1);
        if (timer === 1) {
          setIsTimeUp(true);
        }
      } else {
        clearInterval(interval);
      }
    }, 1000);
    //intervalのクリーンアップ
    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <header className={styles.boxHeader}>
      <h1 className={styles.boxHeaderTitle}>Booklog</h1>
      <div className={styles.boxTimer}>
        <p
          className={`${styles.boxTextTimer}${
            isTimeUp ? " " + styles.redText : ""
          }`}
        >
          読書タイマー {isTimeUp ? "終了" : `残り ${textTimer}秒`}
        </p>

        <div className={styles.boxControl}>
          <select className={styles.boxSelect} ref={ref}>
            <option value="5">5秒</option>
            <option value="10">10秒</option>
            <option value="15">15秒</option>
          </select>
          <button className={styles.btnControl} onClick={handleStartTimer}>
            start
          </button>
        </div>
      </div>
    </header>
  );
};
