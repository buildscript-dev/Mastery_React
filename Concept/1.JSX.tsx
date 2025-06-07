// App.jsx or JSX.jsx
import React from "react";

function JSX() {
  /*
    ✅ JSX stands for JavaScript XML.
    ✅ It lets us write HTML-like code inside JavaScript.
    ✅ Makes writing UI in React easy and readable.
  */

  // JSX element
  const myElementOne = <h1>Hey, it's JSX!</h1>;

  // Non-JSX way using createElement
  const myElementTwo = React.createElement("Hi", null, "Hey, it's Non-JSX!");

  // JSX with expression inside {}
  const sum = <p>The Sum of 5 and 10 is: {5 + 10}</p>;

  // JSX with multiple lines → needs one parent (div or fragment)
  const myElementThree = (
    <>
      <p>I am a paragraph.</p>
      <p>I am a paragraph too.</p>
    </>
  );

  // JSX with className instead of class
  const myElementFour = <h1 className="classAttribute">We use className instead of class</h1>;

  // Conditional rendering with if...else (outside JSX)
  const x = 5;
  let text = "Goodbye";
  if (x < 10) {
    text = "Hello";
  }
  const myElementFifth = <h1>{text}</h1>;

  // Ternary operator inside JSX
  const myElementSixth = <h1>{x < 10 ? "Hello (ternary)" : "Goodbye (ternary)"}</h1>;

  return (
    <>
      <h2>🔥 JSX Cheat Sheet (React Notes)</h2>

      {/* Basic JSX */}
      {myElementOne}

      {/* Non-JSX method */}
      {myElementTwo}

      {/* JSX with Expression */}
      {sum}

      {/* Multi-line JSX block */}
      {myElementThree}

      {/* JSX with className */}
      {myElementFour}

      {/* Conditional Rendering - if/else */}
      {/* {myElementFifth} */}

      {/* Conditional Rendering - Ternary */}
      {myElementSixth}
    </>
  );
}

export default JSX;
