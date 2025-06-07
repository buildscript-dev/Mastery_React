function SummonBeast({ name, summoner, powerLevel, types, isLegendary }) {
  return (
    <div
      style={{
        border: "2px solid #4b0082",
        borderRadius: "16px",
        padding: "24px",
        width: "320px",
        background: "linear-gradient(135deg, #1f1f2e, #2b134c)",
        color: "#f0f0f0",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.4)",
        margin: "20px auto",
        transition: "transform 0.3s ease-in-out",
        fontFamily: "Segoe UI, sans-serif",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <h2 style={{ color: "#00ffe5", marginBottom: "10px" }}>🐉 {name}</h2>
      <p><strong>Summoned by:</strong> {summoner}</p>
      <p><strong>Power Level:</strong> {powerLevel} ⚡</p>
      <p><strong>Type:</strong> {types}</p>
      <p>
        <strong>Legendary Status:</strong>{" "}
        {isLegendary ? (
          <span style={{ color: "#ffd700" }}>Yes 🌟</span>
        ) : (
          <span style={{ color: "#ff4d4d" }}>No ❌</span>
        )}
      </p>
    </div>
  );
}

export default SummonBeast;
