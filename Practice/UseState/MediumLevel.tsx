import { useState } from "react";

function ChakraColor() {
  // Use parentheses, not curly braces for useState
  const [chakra, setChakra] = useState(50);
  const [hoveredBtn, setHoveredBtn] = useState(null);

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
        background:
          "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
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
            transition: "width 0.4s ease-in-out, background 0.4s ease-in-out",
            boxShadow: `0 0 10px ${chakraColor}`,
          }}
        ></div>
      </div>

      <button
        style={{
          padding: "0.75rem 2rem",
          fontSize: "1rem",
          margin: "0 0.7rem",
          borderRadius: "50px",
          border: "none",
          cursor: "pointer",
          fontWeight: "600",
          boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
          transition: "all 0.3s ease",
          userSelect: "none",
          background:
            hoveredBtn === "inc"
              ? "linear-gradient(45deg, #00e676, #b2ff59)"
              : "linear-gradient(45deg, #00c853, #b2ff59)",
          color: "#0b370b",
          filter: hoveredBtn === "inc" ? "brightness(110%)" : "none",
          transform: hoveredBtn === "inc" ? "scale(1.05)" : "none",
        }}
        onClick={increaseChakra}
        onMouseEnter={() => setHoveredBtn("inc")}
        onMouseLeave={() => setHoveredBtn(null)}
      >
        Increase
      </button>

      <button
        style={{
          padding: "0.75rem 2rem",
          fontSize: "1rem",
          margin: "0 0.7rem",
          borderRadius: "50px",
          border: "none",
          cursor: "pointer",
          fontWeight: "600",
          boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
          transition: "all 0.3s ease",
          userSelect: "none",
          background:
            hoveredBtn === "reset"
              ? "linear-gradient(45deg, #8a8a8a, #bdbdbd)"
              : "linear-gradient(45deg, #616161, #9e9e9e)",
          color: "#f0f0f0",
          filter: hoveredBtn === "reset" ? "brightness(110%)" : "none",
          transform: hoveredBtn === "reset" ? "scale(1.05)" : "none",
        }}
        onClick={resetChakra}
        onMouseEnter={() => setHoveredBtn("reset")}
        onMouseLeave={() => setHoveredBtn(null)}
      >
        Reset
      </button>

      <button
        style={{
          padding: "0.75rem 2rem",
          fontSize: "1rem",
          margin: "0 0.7rem",
          borderRadius: "50px",
          border: "none",
          cursor: "pointer",
          fontWeight: "600",
          boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
          transition: "all 0.3s ease",
          userSelect: "none",
          background:
            hoveredBtn === "dec"
              ? "linear-gradient(45deg, #ff5252, #ff8a80)"
              : "linear-gradient(45deg, #d50000, #ff8a80)",
          color: "#4a0000",
          filter: hoveredBtn === "dec" ? "brightness(110%)" : "none",
          transform: hoveredBtn === "dec" ? "scale(1.05)" : "none",
        }}
        onClick={decreaseChakra}
        onMouseEnter={() => setHoveredBtn("dec")}
        onMouseLeave={() => setHoveredBtn(null)}
      >
        Decrease
      </button>
    </div>
  );
}

export default ChakraColor;
s