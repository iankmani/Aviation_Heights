import { motion } from "framer-motion";
import amenities from "../data/amenities.js"; // adjust path
import "./Amenities.css";
import { Link } from "react-router-dom";

const Amenities = () => {
  return (
    <div className="amenities-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1>
              <span className="scroll-left">Our</span>
              <span className="scroll-right">Amenities</span>
            </h1>
            <p className="about-hero-tagline">Comfort Meets Convenience</p>

            <p className="about-hero-description">
              Discover thoughtfully crafted spaces and modern amenities that make
              Aviation Heights more than just a home — a lifestyle. From outdoor
              relaxation areas to secure, connected living, every feature is designed
              with your comfort in mind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="amenities-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Modern Amenities</h2>
          <p>
            Experience the perfect balance of comfort, technology, and security —
            designed to make your living truly effortless.
          </p>
        </motion.div>

        <div className="amenities-grid">
          {amenities.map((item, index) => (
            <motion.div
              key={item.id}
              className="amenity-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="amenity-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="amenity-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="amenity-details">{item.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
       {/* CTA Section */}
      <section className="amenities-cta-section">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Ready to Experience Aviation Heights Living?</h2>
          <p>
            Get in touch with us today to schedule a visit or learn more about
            our apartments, amenities, and lifestyle.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
            <Link to="/about" className="btn-secondary">
              Learn More About Us
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Amenities;
