import { useParams } from "react-router-dom";
import amenitiesData from "../data/amenities"; // wherever your data is

function AmenityDetail() {
  const { id } = useParams();
  const amenity = amenitiesData.find((item) => item.id === parseInt(id));

  if (!amenity) {
    return <h2>Amenity not found</h2>;
  }

  return (
    <div className="amenity-detail">
      <img src={amenity.image} alt={amenity.name} />
      <h1>{amenity.name}</h1>
      <p>{amenity.description}</p>
    </div>
  );
}

export default AmenityDetail;
