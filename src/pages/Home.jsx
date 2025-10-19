import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <h1>Welcome to Sunset Apartments</h1>
      <p>
        Experience modern living with premium amenities and top-tier comfort.
      </p>
      <Link to="/amenities" className="btn">
        View Amenities
      </Link>
    </section>
  );
}

export default Home;
