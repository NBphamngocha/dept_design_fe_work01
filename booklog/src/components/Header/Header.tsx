import { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";

type TIMES = {
  hour: number;
  min: number;
  sec: number;
};

export const Header = (): JSX.Element => {
  const [hour, setHour] = useState<TIMES["hour"]>(0);
  const [min, setMin] = useState<TIMES["min"]>(0);
  const [sec, setSec] = useState<TIMES["sec"]>(0);
  const targetTime = useRef<number>(0);

  //テキストに変更
  const textHour = String(hour).padStart(2, "0");
  const textMin = String(min).padStart(2, "0");
  const textSec = String(sec).padStart(2, "0");

  useEffect(() => {
    const interval = setInterval(() => {
      if (sec > 0) {
        setSec((sec) => (sec -= 1));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sec]);

  return (
    <header className={styles.boxHeader}>
      <h1 className={styles.boxHeaderTitle}>Booklog</h1>
      <div className={styles.boxTimer}>
        <p className={styles.boxTextTimer}>
          読書タイマー {textHour}:{textMin}:{textSec}
        </p>
        <div className={styles.boxControl}>
          <select
            className={styles.boxSelect}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              targetTime.current = parseInt(e.target.value);
            }}
          >
            <option value="5">5秒</option>
            <option value="10">10秒</option>
            <option value="15">15秒</option>
          </select>
          <button
            className={styles.btnControl}
            onClick={() => {
              setSec(targetTime.current);
            }}
          >
            Start
          </button>
        </div>
      </div>
    </header>
  );
};
