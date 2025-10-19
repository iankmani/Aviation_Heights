import { Link } from "react-router-dom";

function AmenityCard({ amenity }) {
  return (
    <div className="amenity-card">
      <img src={amenity.image} alt={amenity.name} />
      <h2>{amenity.name}</h2>
      <p>{amenity.description}</p>
      <Link to={`/amenities/${amenity.id}`} className="btn">
        Learn More
      </Link>
    </div>
  );
}

export default AmenityCard;
