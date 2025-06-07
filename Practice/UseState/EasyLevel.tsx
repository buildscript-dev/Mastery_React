import { useState } from "react";

function ChakraTracker() {
  const [chakra, setChakra] = useState(50);

  const increaseChakra = () => setChakra((prev) => Math.min(prev + 10, 100));
  const resetChakra = () => setChakra(50);
  const decreaseChakra = () => setChakra((prev) => Math.max(prev - 10, 0));

  return (
    <div
      style={{
        maxWidth: "360px",
        margin: "4rem auto",
        padding: "2rem",
        borderRadius: "12px",
        backgroundColor: "#f4f4f4",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "center",
      }}
    >
      <h1 style={{ marginBottom: "1rem", color: "#333" }}>Chakra Tracker</h1>

      <div
        style={{
          height: "24px",
          width: "100%",
          backgroundColor: "#ddd",
          borderRadius: "12px",
          overflow: "hidden",
          marginBottom: "1.5rem",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${chakra}%`,
            backgroundColor: "#4caf50",
            transition: "width 0.3s ease",
          }}
        />
      </div>

      <p style={{ marginBottom: "2rem", fontWeight: "600", color: "#555" }}>
        Current Chakra: {chakra}
      </p>

      <div>
        <button
          onClick={increaseChakra}
          style={{
            padding: "0.6rem 1.2rem",
            marginRight: "1rem",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#4caf50",
            color: "#fff",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Increase
        </button>

        <button
          onClick={resetChakra}
          style={{
            padding: "0.6rem 1.2rem",
            marginRight: "1rem",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#2196f3",
            color: "#fff",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Reset
        </button>

        <button
          onClick={decreaseChakra}
          style={{
            padding: "0.6rem 1.2rem",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#f44336",
            color: "#fff",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Decrease
        </button>
      </div>
    </div>
  );
}

export default ChakraTracker;
