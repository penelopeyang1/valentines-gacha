import React, { useState } from "react";

const items = [
  { name: "Box of Chocolates", emoji: "🍫" },
  { name: "Bouquet of Roses", emoji: "🌹" },
  { name: "Wrapped Present", emoji: "🎁" },
  { name: "Surprise Box", emoji: "❔" }
];

const memories = [
  { text: "You just opened a memory of Penelope and Alex at Horseshoe Bend!", image: "/images/horseshoe.jpg" },
  { text: "You just opened FORTNITE, Penelope and Alex's favorite game!", image: "/images/fortnite.jpg" },
  { text: "You just unlocked a cozy coffee date at Central Perk!", image: "/images/coffee.jpg" },
  { text: "You revealed a handwritten love letter from Alex to Penelope!", image: "/images/loveletter.jpg" }
];

const GachaGame = () => {
  const [selectedMemory, setSelectedMemory] = useState(null);

  const handleItemClick = () => {
    const randomMemory = memories[Math.floor(Math.random() * memories.length)];
    setSelectedMemory(randomMemory);
  };

  return (
    <div className="container">
      <h1>💖 Couples Gacha 💖</h1>
      <p>Tap an item to reveal a special memory!</p>
      
      <div className="grid">
        {items.map((item, index) => (
          <button key={index} onClick={handleItemClick} className="gacha-item">
            {item.emoji}
          </button>
        ))}
      </div>
      
      {selectedMemory && (
        <div className="memory-box">
          <p>{selectedMemory.text}</p>
          <img src={selectedMemory.image} alt="Memory" />
        </div>
      )}
    </div>
  );
};

export default GachaGame;
