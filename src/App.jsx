// src/App.jsx
import { useState } from "react";
import DestinationCard from "./components/DestinationCard";
import { destinations } from "./data/dataset";
import "./App.css";

function App() {
  const [showDestinations, setShowDestinations] = useState(true);

  function handleClick() {
    setShowDestinations(!showDestinations);
  }

  return (
    <div className="container">
      <h1>Travel Destinations</h1>
      
      <button onClick={handleClick}>
        Show/Hide Destinations
      </button>

      {showDestinations && (
        <div className="destination-list">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              name={destination.name}
              country={destination.country}
              status={destination.status}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;