import { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";

export const Header = (): JSX.Element => {
  type TIMES = {
    hour: number;
    min: number;
    sec: number;
  };

  const [timer, setTimer] = useState<TIMES>({ hour: 0, min: 0, sec: 0 });
  const targetTime = useRef<number>(0);
  const textHour = String(timer.hour).padStart(2, "0");
  const textMin = String(timer.min).padStart(2, "0");
  const textSec = String(timer.sec).padStart(2, "0");

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer.sec > 0) {
        setTimer({ ...timer, sec: (timer.sec -= 1) });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);
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
              setTimer({ ...timer, sec: targetTime.current });
            }}
          >
            Start
          </button>
        </div>
      </div>
    </header>
  );
};
