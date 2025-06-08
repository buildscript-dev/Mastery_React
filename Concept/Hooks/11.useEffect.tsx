import { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(100);
  const [color, setColor] = useState("black"); // tracking the color

  useEffect(() => {
    if (count === 0) return; // stop at zero

    if (count < 30) {
      setColor("red");
    }

    const timer = setTimeout(() => {
      setCount((prev) => prev - 1);
    },500);

    return () => clearTimeout(timer); // cleanup
  }, [count]); // runs when count changes

  return (
    <h1 style={{ color: color }}>
      My Chakra is decreasing {count}!
    </h1>
  );
}

export default Timer;
