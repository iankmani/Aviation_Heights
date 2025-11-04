import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Home.css";
import buildingImage from "../../public/images/Aviation_Heights_Complete.jpg";

function Home() {
  return (
    <section className="home-page">
      {/* Hero Section */}
      <motion.div
        className="home-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.h1
          className="home-title"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to <span className="highlight">Aviation Heights</span>
        </motion.h1>

        {/* Hero Image */}
        <motion.div
          className="home-image-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <img
            src={buildingImage}
            alt="Aviation Heights Building"
            className="home-image"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          className="home-description"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Discover a lifestyle of comfort and tranquility at Aviation Heights —
          where modern design meets peaceful living. From thoughtfully designed
          apartments to top-tier amenities and scenic rooftop views, every
          detail is crafted for your convenience and well-being.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="home-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Link to="/amenities" className="btn-primary">
            Explore Amenities
          </Link>
          <Link to="/contact" className="btn-secondary">
            Get in Touch
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Home;
