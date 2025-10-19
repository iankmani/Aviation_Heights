import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import unfinished_building from "../../assets/Avaition_Heights_Full_Pic_Unfinished.jpg";
import "./About.css";

const About = () => {
  const stats = [
    { number: "2+", label: "Years of Service" },
    { number: "1k+", label: "Happy Customers" },
    { number: "50+", label: "Houses Rented" },
    { number: "100%", label: "Satisfaction Rate" },
  ];

  const values = [
    {
      icon: "🏡",
      title: "Our Mission",
      description:
        "To provide comfortable, stylish, and affordable living spaces that make residents feel truly at home while enjoying modern amenities and a peaceful environment.",
    },
    {
      icon: "🌅",
      title: "Our Vision",
      description:
        "To become the most sought-after apartment community, known for our serene surroundings, exceptional service, and a vibrant lifestyle that blends comfort and convenience.",
    },
    {
      icon: "🤝",
      title: "Our Values",
      description:
        "We value community, trust, sustainability, and excellence. Every detail—from design to service—is built around enhancing the quality of life for our residents.",
    },
  ];

  //   const team = [
  //     {
  //       name: 'John Kamau',
  //       role: 'General Manager',
  //       image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  //       description: 'Leading our team with 10+ years of hospitality experience.'
  //     },
  //     {
  //       name: 'Sarah Wanjiku',
  //       role: 'Head Chef',
  //       image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
  //       description: 'Creating culinary masterpieces with passion and creativity.'
  //     },
  //     {
  //       name: 'David Omondi',
  //       role: 'Events Coordinator',
  //       image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  //       description: 'Orchestrating memorable events and experiences.'
  //     },
  //     {
  //       name: 'Grace Akinyi',
  //       role: 'Customer Relations',
  //       image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  //       description: 'Ensuring every guest feels valued and welcomed.'
  //     }
  //   ];

  const timeline = [
    {
      year: "2019",
      title: "The Beginning",
      description:
        "Zero4Gardens opened its doors with a vision to create a unique entertainment destination.",
    },
    {
      year: "2020",
      title: "Expansion",
      description:
        "Added premium car wash services and expanded parking facilities.",
    },
    {
      year: "2021",
      title: "Entertainment Hub",
      description: "Introduced pool tables and started hosting weekend events.",
    },
    {
      year: "2022",
      title: "Culinary Excellence",
      description:
        "Revamped our menu with gourmet offerings and craft cocktails.",
    },
    {
      year: "2024",
      title: "Community Favorite",
      description: "Recognized as the top entertainment venue in the region.",
    },
  ];

  return (
    <div className="about-page">
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
              <span className="scroll-left">About</span>
              <span className="scroll-right">Us</span>
            </h1>
            <p className="about-hero-tagline">Redefining Modern Living</p>

            <p className="about-hero-description">
              Explore what makes Aviation Heights the ideal destination for
              modern, stylish living — where every detail is designed for your
              comfort and peace of mind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="section-container">
          <motion.div
            className="stats-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="section-container">
          <div className="story-content">
            <motion.div
              className="story-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title">Our Story</h2>
              <p>
                Aviation Heights was founded on a simple idea — to redefine
                modern living by blending comfort, style, and convenience in one
                welcoming community. What started as a vision to create elegant,
                affordable homes has grown into a vibrant residential haven that
                residents are proud to call home.
              </p>
              <p>
                From thoughtfully designed apartments to a wide range of premium
                amenities, Aviation Heights offers everything you need for
                modern, comfortable living. Enjoy reliable security with 24-hour
                surveillance and outdoor lighting, a safe children’s playground,
                strong network connectivity, an advanced aerial and DSTV system,
                and a convenient water and electric token setup. Relax on the
                rooftop with stunning views and experience a community designed
                for balance, safety, and a true sense of belonging.
              </p>

              <p>
                Today, Aviation Heights stands as more than just a place to live
                — it’s a lifestyle. A place where neighbors become friends,
                where every sunrise brings opportunity, and where every corner
                feels like home. We’re proud to welcome you to be part of our
                story.
              </p>
            </motion.div>

            <motion.div
              className="story-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={unfinished_building}
                alt="unfinished Aviation Heights pic"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Our Mission, Vision & Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section
      <section className="timeline-section">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">
              Milestones that shaped Zero4Gardens
            </p>
          </motion.div>

          <div className="timeline">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      {/* <section className="team-section">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              The passionate people behind your exceptional experience
            </p>
          </motion.div>

          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="team-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="team-image-container">
                  <img src={member.image} alt={member.name} />
                  <div className="team-overlay">
                    <p>{member.description}</p>
                  </div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="about-cta-section">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Ready to Experience Aviation Heights?</h2>
          <p>
            Join us for an unforgettable time filled with great food,
            entertainment, and memories.
          </p>
          <div className="cta-buttons">
            <Link to="/amenities" className="btn-primary">
              Explore Amenities
            </Link>
            <Link to="/contact" className="btn-secondary">
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
