
// render lists with some type of loop.

// The JavaScript map() array method is generally the preferred method.

import React from "react";

function ListRendering() {
  const tailsBeast = [
    { name: "Shukaku", tails: 1, beast: "Tanuki (Raccoon Dog)", jinchuriki: "Gaara" },
    { name: "Matatabi", tails: 2, beast: "Nibi (Flaming Blue Cat)", jinchuriki: "Yugito Nii" },
    { name: "Isobu", tails: 3, beast: "Sanbi (Turtle-like)", jinchuriki: "Yagura Karatachi" },
    { name: "Son Gokū", tails: 4, beast: "Yonbi (Monkey)", jinchuriki: "Rōshi" },
    { name: "Kokuō", tails: 5, beast: "Gobi (Horse-Dolphin)", jinchuriki: "Han" },
    { name: "Saiken", tails: 6, beast: "Rokubi (Slug)", jinchuriki: "Utakata" },
    { name: "Chōmei", tails: 7, beast: "Nanabi (Beetle)", jinchuriki: "Fū" },
    { name: "Gyūki", tails: 8, beast: "Hachibi (Octopus-Bull)", jinchuriki: "Killer Bee" },
    { name: "Kurama", tails: 9, beast: "Kyūbi (Fox)", jinchuriki: "Naruto Uzumaki" },
  ];

  // Styles as objects
  const containerStyle = {
    background: "#1a1a1a",
    color: "#f1f1f1",
    fontFamily: "'Segoe UI', sans-serif",
    padding: "2rem",
    borderRadius: "12px",
    width: "90%",
    maxWidth: "700px",
    margin: "2rem auto",
    boxShadow: "0 0 30px rgba(255, 0, 0, 0.3)",
  };
  const listStyle = {
    listStyle: "none",
    padding: 0,
  };

  const listItemStyle = {
    background: "#2f3542",
    marginBottom: "1.5rem",
    padding: "1rem 1.5rem",
    borderLeft: "5px solid #ffa502",
    borderRadius: "8px",
    transition: "all 0.3s ease-in-out",
  };

  // For hover effect, you’d usually need CSS, but we keep it simple here.

  const listItemHoverStyle = {
    transform: "scale(1.03)",
    borderLeftColor: "#2ed573",
  };

  const textStyle = {
    margin: 0,
    fontSize: "1.1rem",
    lineHeight: 1.4,
    color: "#f1f2f6",
  };

  return (
    <div style={containerStyle}>
     <h2>All the Tailed Beasts are here:</h2>
      <ul style={listStyle}>
        {tailsBeast.map((beast, index) => (
          <li key={index} style={listItemStyle}>
            <h3 style={textStyle}>
              I'm {beast.name}, a {beast.tails}-Tails {beast.beast}. My Jinchūriki is {beast.jinchuriki}.
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListRendering;
