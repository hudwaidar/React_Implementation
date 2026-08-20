// src/components/DestinationList.jsx
import DestinationCard from "./DestinationCard";

function DestinationList({ destinations }) {
  return (
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
  );
}

export default DestinationList;