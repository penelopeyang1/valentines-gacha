import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles.css";

const items = [
  { name: "Box of Chocolates", emoji: "🍫" },
  { name: "Bouquet of Roses", emoji: "🌹" },
  { name: "Wrapped Present", emoji: "🎁" },
  { name: "Surprise Box", emoji: "❔" },
  { name: "Love Letter", emoji: "💌" },
  { name: "Romantic Dinner", emoji: "🍽️" },
  { name: "Teddy Bear", emoji: "🧸" },
  { name: "Heart Necklace", emoji: "💖" },
  { name: "Movie Night", emoji: "🎬" },
  { name: "Couple's Trip", emoji: "✈️" }
];


const memories = [
  { text: "You just opened a memory of Penelope and Alex at Horseshoe Bend!", image: import.meta.env.BASE_URL + "images/horseshoe.png" },
  { text: "You just opened the moment Penelope and Alex stepped into 2025 together in Fortnite!", image: import.meta.env.BASE_URL + "images/2025.png" },
  { text: "You just unlocked a moment between Penelope and Alex before the wedding in New York!", image: import.meta.env.BASE_URL + "images/wedding.png" },
  { text: "You revealed the first picture taken of Penelope and Alex together!", image: import.meta.env.BASE_URL + "images/first.png" },
  { text: "Bruce!", image: import.meta.env.BASE_URL + "images/bruce.png" },
  { text: "You are viewing the morning Alex asked to be Penelope's boyfriend!", image: import.meta.env.BASE_URL + "images/dating.png" },
  { text: "You are witnessing the magic of Penelope and Alex's first Christmas together!", image: import.meta.env.BASE_URL + "images/christmas.png" },
  { text: "You unlocked an empty Times Square with just Penelope and Alex in it! ULTRA RARE!!!", image: import.meta.env.BASE_URL + "images/times.png" },
  { text: "You unlocked one of the most delicious and heartwarming meals ever!", image: import.meta.env.BASE_URL + "images/kbbq.png" },
  {
    text: "Looking back on all of these memories, it's hard to pick my favorites. Every moment I share with you is so special and precious to me. To creating many more together! I'll always love you Alex ~ Happy Valentine's Day ❤️",
    image: import.meta.env.BASE_URL + "images/love.gif" 
  }
];


const GachaGame = () => {
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [itemMemoryMap, setItemMemoryMap] = useState({});

  // useEffect(() => {
  //   if (!Object.keys(itemMemoryMap).length) {
  //     let map = {};
  //     items.forEach((item, index) => {
  //       map[index] = memories[Math.floor(Math.random() * memories.length)];
  //     });
  //     setItemMemoryMap(map);
  //   }
  // }, []);
  useEffect(() => {
    if (!Object.keys(itemMemoryMap).length) {
      // Shuffle the memories array so each run gets a random order
      const shuffledMemories = [...memories].sort(() => Math.random() - 0.5);
      
      // Assign each item a unique memory
      let map = {};
      items.forEach((item, index) => {
        map[index] = shuffledMemories[index]; // Ensure no duplicates
      });
  
      setItemMemoryMap(map);
    }
  }, []);

  const handleItemClick = (index) => {
    setSelectedMemory(itemMemoryMap[index]);
    setShowPopup(true);
  };

  const rotateCarousel = (direction) => {
    setRotation((prevRotation) => prevRotation + direction * (360 / items.length));
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="container">
      <div className="background">
         <div className="cloud" style={{ top: "5%", left: "5%" }}></div>
         <div className="cloud" style={{ top: "15%", left: "35%" }}></div>
         <div className="cloud" style={{ top: "25%", left: "65%" }}></div>
         <div className="cloud" style={{ top: "40%", left: "10%" }}></div>
         <div className="cloud" style={{ top: "50%", left: "50%" }}></div>
         <div className="cloud" style={{ top: "65%", left: "80%" }}></div>
         <div className="cloud" style={{ top: "75%", left: "20%" }}></div>
         <div className="cloud" style={{ top: "85%", left: "60%" }}></div>
         <div className="cloud" style={{ top: "95%", left: "90%" }}></div>
       </div>

      <div className="header-container">
        <h1>💖 Valentine's Gacha 💖</h1>
        <p>Tap an item to reveal something special!</p>
      </div>

      <div className="carousel-wrapper">
        {/* <motion.div
          className="carousel"
          animate={{ rotateY: rotation }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="carousel-item"
              style={{ transform: `rotateY(${index * (360 / items.length)}deg) translateZ(300px)` }}
              onClick={() => handleItemClick(index)}
            >
              <span>{item.emoji}</span>
            </motion.div>
          ))}
        </motion.div> */}
          <motion.div
            className="carousel"
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="carousel-item"
                style={{
                  transform: `rotateY(${index * (360 / items.length) + rotation}deg) translateZ(300px)`
                }}
                onClick={() => handleItemClick(index)}
              >
                <span>{item.emoji}</span>
              </motion.div>
            ))}
          </motion.div>                 
      </div>

      <div className="controls">
        <button onClick={() => rotateCarousel(-1)}>◀</button>
        <button onClick={() => rotateCarousel(1)}>▶</button>
      </div>

      {/* <AnimatePresence>
        {showPopup && selectedMemory && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="memory-popup"
          >
            <div className="memory-card">
              <p>{selectedMemory.text}</p>
              <img src={selectedMemory.image} alt="Memory" />
              <button onClick={closePopup}>Close</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}
      <AnimatePresence>
        {showPopup && selectedMemory && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="memory-popup"
          >
            {/* Heart Explosion Effect */}
            <div className="heart-explosion">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="heart"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 1.5],
                    x: [0, (Math.random() - 0.5) * 200],
                    y: [0, (Math.random() - 0.5) * 200],
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                    delay: i * 0.1,
                  }}
                >
                  ❤️
                </motion.div>
              ))}
            </div>

            {/* Pop-up Memory Card */}
            <div className="memory-card">
              <p>{selectedMemory.text}</p>
              <img src={selectedMemory.image} alt="Memory" />
              <button onClick={closePopup}>Close</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GachaGame;