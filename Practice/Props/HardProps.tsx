function Greeting(props) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
      {props.launch.map((weapon, index) => (
        <div
          key={index}
          style={{
            border: "2px solid #333",
            borderRadius: "12px",
            padding: "20px",
            width: "280px",
            backgroundColor: "#1e1e2f",
            color: "#f5f5f5",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
            transition: "transform 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <h2 style={{ marginBottom: "10px", color: "#00ffe5" }}>{weapon.userName} says:</h2>
          <h3 style={{ fontWeight: "normal", fontStyle: "italic" }}>
            "{weapon.weaponName}" is ready to declare The Third Great Ninja War. 💥
          </h3>
        </div>
      ))}
    </div>
  );
}

function Weapons() {
  const weapons = [
    { weaponName: "Kusanagi Sword", userName: "Orochimaru" },
    { weaponName: "Samehada", userName: "Kisame Hoshigaki" },
    { weaponName: "Kubikiribōchō (Executioner's Blade)", userName: "Zabuza Momochi" },
    { weaponName: "Shuriken", userName: "Shikamaru Nara" },
    { weaponName: "Kunai", userName: "Naruto Uzumaki" },
    { weaponName: "Chidori Katana", userName: "Sasuke Uchiha" },
    { weaponName: "Hiraishin Kunai", userName: "Minato Namikaze" },
    { weaponName: "Sword of Totsuka", userName: "Itachi Uchiha" },
    { weaponName: "Gunbai (War Fan)", userName: "Tsunade" },
    { weaponName: "Kama (Scythe)", userName: "Killer Bee" }
  ];

  return (
    <div style={{ padding: "40px", backgroundColor: "#121212", minHeight: "100vh" }}>
      <h1 style={{ color: "#fff", textAlign: "center", marginBottom: "30px" }}>
        ⚔️ Weapon Loadout: Shinobi War Edition
      </h1>
      <Greeting launch={weapons} />
    </div>
  );
};

export default Weapons;
