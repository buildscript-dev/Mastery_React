import { useEffect, useState } from "react";

function AutoTimer() {
  const [timer, setTimer] = useState(0);
  const [timerButton, setTimerButton] = useState(false);

  const ButtonClick = () => {
    setTimerButton((prev) => !prev);
  };

  useEffect(() => {
    let interval;
    if (timerButton) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timerButton]);

  return (
    <div>
      <h1>Stop Watch</h1>
      <h2>{timer}</h2>
      <button onClick={ButtonClick}>
        {timerButton ? "Pause" : "Start"}
      </button>
    </div>
  );
}

export default AutoTimer;
