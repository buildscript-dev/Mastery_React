// The useRef Hook allows you to persist values between renders.
// It can be used to store a mutable value that does not cause a re-render when updated.

import { useEffect, useRef, useState } from "react";

function Refresh() {
  const [count, setCount] = useState(0);
  const num = useRef(0);

  useEffect(() => {
    num.current = num.current + 1;
    console.log(`Re-rendering... Value of num is ${num.current}`);
  });

  return (
    <>
      <h2>Count: {count}</h2>
      <h3>Renders: {num.current}</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase Count</button>
    </>
  );
}

export default Refresh;
