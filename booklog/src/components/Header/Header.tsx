import { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";

export const Header = (): JSX.Element => {
  const [timer, setTimer] = useState<number>(0);
  const [isStop, setIsStop] = useState<boolean>(false);
  const ref = useRef<HTMLSelectElement>(null);

  //テキストに変更
  const textTimer: string = String(timer).padStart(2, "0");

  function handleStartTimer(): void {
    if (ref.current?.value !== undefined && ref.current.value) {
      setTimer(parseInt(ref.current.value));
      setIsStop(false);
    }
  }

  useEffect(() => {
    //intervalのセットアップ
    const interval = setInterval(() => {
      clearInterval(interval);
      if (timer > 1) {
        setTimer((timer) => timer - 1);
      }
      if (timer === 1) {
        setIsStop(true);
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
        <p className={isStop ? styles.redText : undefined}>
          読書タイマー {isStop ? "終了" : `残り ${textTimer}秒`}
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
