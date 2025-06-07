import { useState } from "react";

function DisplayName() {
  const [toggle, setToggle] = useState(true);
  const [level, setLevel] = useState(49);

  const ChakraIncrease = () => {
    setLevel((prev) => prev + 1);
  };

  const buttonHandler = () => {
    setToggle((prev) => !prev);
  };

  let name;
  if (toggle) {
    name = (
      <div style={{ color: "#ff4757" }}>
        <h2>I'm Ghost of Uchiha</h2>
        <h2>Madara Uchiha</h2>
      </div>
    );
  } else {
    name = (
      <div style={{ color: "#1e90ff" }}>
        <h2>I'm the Hacker Uchiha</h2>
        <h2>Obito Uchiha</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#111",
        color: "#fff",
        padding: "2rem",
        borderRadius: "10px",
        width: "400px",
        margin: "3rem auto",
        textAlign: "center",
        boxShadow: "0 0 30px rgba(255, 0, 0, 0.3)",
      }}
    >
      <h1
        style={{
          color: level >= 50 ? "#2ed573" : "#ffa502",
          marginBottom: "1rem",
        }}
      >
        {level >= 50 ? "Battle Ready 💪" : "Low Chakra 💤"}
      </h1>

      <h2 style={{ marginBottom: "1.5rem" }}>
        Chakra Level: <span style={{ color: "#70a1ff" }}>{level}</span>
      </h2>

      {name}

      <div style={{ marginTop: "2rem" }}>
        <button
          onClick={ChakraIncrease}
          style={{
            padding: "0.7rem 1.5rem",
            fontSize: "1rem",
            marginRight: "1rem",
            background: "#2ed573",
            border: "none",
            color: "#000",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Increase Chakra
        </button>

        <button
          onClick={buttonHandler}
          style={{
            padding: "0.7rem 1.5rem",
            fontSize: "1rem",
            background: "#57606f",
            border: "none",
            color: "#fff",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Switch Identity
        </button>
      </div>
    </div>
  );
}

export default DisplayName;
