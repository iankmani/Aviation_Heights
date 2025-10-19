import amenities from "../data/amenities";
import AmenityCard from "../components/AmenityCard";

function Amenities() {
  return (
    <section className="amenities-page">
      <h1>Our Amenities</h1>
      <p>
        Enjoy modern comforts designed to make your living experience
        exceptional.
      </p>
      <div className="amenities-grid">
        {amenities.map((amenity) => (
          <AmenityCard key={amenity.id} amenity={amenity} />
        ))}
      </div>
    </section>
  );
}

export default Amenities;
