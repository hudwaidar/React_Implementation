// src/components/DestinationCard.jsx
function DestinationCard({ name, country, status }) {
  return (
    <div className="destination-card">
      <h2>{name}</h2>
      <p>Country: {country}</p>
      <p>Status: {status}</p>
    </div>
  );
}

export default DestinationCard;