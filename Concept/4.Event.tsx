//Events in React work just like in HTML, but with a twist:
// You use camelCase instead of lowercase.
// You pass a function (not a string) as the event handler.

import React, { useState } from "react";

function DisplayEvent() {
  const [level, setLevel] = useState(null);
  const [userName, setUserName] = useState("Madara Uchiha")

  const handleClick = () => {
    alert("You Are Looser");
  };

  const chakraLevel = () => {
    const input = prompt("Enter your chakra level:");
    const num = parseInt(input);
    if (!isNaN(num)) {
      setLevel(num);
    } else {
      alert("Please enter a valid number");
    }
  };

  const toggleHandler = () => {
    setUserName((prev) =>
      prev === "Madara Uchiha" ? "Obito Uchiha" : "Madara Uchiha"
    );
  };


  return (
    <div>
      <button onClick={handleClick}>Truth</button>
      <button onClick={chakraLevel}>Check Chakra Level</button>
      {level !== null && (
        <h2>
          {level > 50 && level < 300
            ? "You are Strong Enough"
            : level < 50
            ? "You are So Weak"
            : "Hold on, Don't Take Fight"}
        </h2>
      )}

      <button onClick={toggleHandler}>{userName}</button>
    </div>
  );
}

export default DisplayEvent;
