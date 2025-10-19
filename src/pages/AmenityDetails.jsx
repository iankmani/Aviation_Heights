import { useParams } from "react-router-dom";
import amenities from "../data/amenities";

function AmenityDetails() {
  const { id } = useParams();
  const amenity = amenities.find((item) => item.id === parseInt(id));

  if (!amenity) return <p>Amenity not found</p>;

  return (
    <section className="amenity-details">
      <img src={amenity.image} alt={amenity.name} />
      <h1>{amenity.name}</h1>
      <p>{amenity.details}</p>
    </section>
  );
}

export default AmenityDetails;
