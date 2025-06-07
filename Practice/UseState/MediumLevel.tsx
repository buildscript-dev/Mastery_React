import { useState } from "react";

function ChakraColor() {
  const [chakra, setChakra] = useState(50);

  const increaseChakra = () => setChakra((prev) => Math.min(prev + 10, 100));
  const resetChakra = () => setChakra(50);
  const decreaseChakra = () => setChakra((prev) => Math.max(prev - 10, 0));

  const chakraColor =
    chakra >= 70 ? "#00e676" : chakra >= 40 ? "#ffd600" : "#ff3d00";

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "4rem auto",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        borderRadius: "20px",
        padding: "2.5rem",
        boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
        color: "#e0e0e0",
        fontFamily: "'Poppins', sans-serif",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "2.2rem",
          fontWeight: "700",
          marginBottom: "1rem",
          letterSpacing: "1.2px",
          textShadow: "0 0 6px #00e676",
        }}
      >
        Chakra Tracker
      </h1>

      <div
        style={{
          fontSize: "1.4rem",
          marginBottom: "2rem",
          color: chakraColor,
          fontWeight: "600",
        }}
      >
        Current Chakra: {chakra}
      </div>

      <div
        style={{
          backgroundColor: "#444",
          borderRadius: "50px",
          height: "25px",
          width: "100%",
          overflow: "hidden",
          marginBottom: "2.5rem",
          boxShadow: "inset 0 2px 6px rgba(0,0,0,0.4)",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${chakra}%`,
            background: `linear-gradient(90deg, ${chakraColor}, #76ff03)`,
            borderRadius: "50px",
            transition: "width 0.4s ease-in-out",
            boxShadow: `0 0 10px ${chakraColor}`,
          }}
        ></div>
      </div>

      <button
        style={{
          padding: "0.75rem 2rem",
          fontSize: "1rem",
          margin: "0 0.5rem",
          borderRadius: "30px",
          border: "none",
          cursor: "pointer",
          background: "#00c853",
          color: "#fff",
          fontWeight: "600",
        }}
        onClick={increaseChakra}
      >
        Increase
      </button>

      <button
        style={{
          padding: "0.75rem 2rem",
          fontSize: "1rem",
          margin: "0 0.5rem",
          borderRadius: "30px",
          border: "none",
          cursor: "pointer",
          background: "#757575",
          color: "#fff",
          fontWeight: "600",
        }}
        onClick={resetChakra}
      >
        Reset
      </button>

      <button
        style={{
          padding: "0.75rem 2rem",
          fontSize: "1rem",
          margin: "0 0.5rem",
          borderRadius: "30px",
          border: "none",
          cursor: "pointer",
          background: "#d50000",
          color: "#fff",
          fontWeight: "600",
        }}
        onClick={decreaseChakra}
      >
        Decrease
      </button>
    </div>
  );
}

export default ChakraColor;
