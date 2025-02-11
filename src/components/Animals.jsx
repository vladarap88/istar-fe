import React from "react";
import "./Animals.css";

const animalNames = [
  "Alligator", "Bear", "Cat", "Dolphin", "Elephant", "Frog", "Giraffe",
  "Horse", "Iguana", "Jaguar", "Kangaroo", "Lion", "Monkey", "Nutcracker bird",
  "Octopus", "Penguin", "Quoll", "Rabbit", "Snake", "Tiger", "Unau",
  "Vulture bird", "Wombat", "Xenops bird", "Yak", "Zebra"
];

// Sort alphabetically
const sortedAnimalNames = animalNames.sort();

const Animals = () => {
  return (
    <div className="animals-page">
      {/* iStar logo at the top */}
      <header>
        <div className="logo">
          <img src="/images/logo.jpeg" alt="iStar Logo" />
        </div>
      </header>

      <h1 className="animals-title">Meet the Animals</h1>
      <div className="animals-grid">
        {sortedAnimalNames.map((name, index) => {
          const formattedName = name.replace(/\s+/g, "%20"); 
          return (
            <div className="animal-card" key={index}>
              <img src={`/images/animals/${formattedName}.jpeg`} alt={name} />
              <p className="animal-name">{name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Animals;
