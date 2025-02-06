// import React, { useEffect, useState } from 'react';
// import './AnimalList.css';

// const AnimalList = () => {
//   const [animals, setAnimals] = useState([]);

//   useEffect(() => {
//     // Fetch the animal data from the Django backend
//     fetch('http://localhost:8000/api/animals') // Change URL as needed
//       .then(response => response.json())
//       .then(data => {
//         setAnimals(data.animals);
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   // Sort animals alphabetically by name
//   const sortedAnimals = animals.sort((a, b) => a.name.localeCompare(b.name));

//   return (
//     <div className="animal-list-container">
//       <h1>Animal List</h1>
//       <div className="animal-list">
//         {sortedAnimals.map((animal) => (
//           <div className="animal-card" key={animal.name}>
//             <img src={animal.image_url} alt={animal.name} className="animal-image" />
//             <h2 className="animal-name">{animal.name}</h2>
//             <p className="animal-description">{animal.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AnimalList;
