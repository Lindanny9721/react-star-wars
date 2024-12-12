import { useState, useEffect } from 'react';
import { getAllStarships } from './services/sw-api';

function App() {
  const [starships, setStarships] = useState([]);
  useEffect(() => {
    const fetchStarships = async () => {
      const data = await getAllStarships();
      setStarships(data);
    };

    fetchStarships(); 
  }, []);

  return (
    <div className="App">
      <h1>STAR WARS STARSHIP</h1>
      <>
        {starships.map((starship, index) => (
          <div key={index}>
            <h2>{starship.name}</h2>
          </div>
        ))}
      </>
    </div>
  );
}

export default App;