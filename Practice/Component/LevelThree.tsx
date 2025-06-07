

const NinjaList= () => {

const ninjas = [
  { name: "Madara", rank: "Kage", active: true },
  { name: "Sasuke", rank: "Elite", active: false },
  { name: "Itachi", rank: "Anbu", active: false },
];

    return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
     {ninjas.map((ninja, index) => (
        ninja.active ? (<h2 key={index}>Hey, I'm {ninja.name}, the {ninja.rank} of the Hidden Leaf 🍃</h2>

        ):(<h2 key={index}> {ninja.name} is not active ❌
</h2>)

     ))}

    </div>
  );

}



export default NinjaList;