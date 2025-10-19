import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaCheckCircle
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    setFormStatus('success');
    setTimeout(() => {
      setFormStatus('');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Visit Us',
      details: ['Avaition Heights', 'Nairobi, Kenya'],
      link: null
    },
    {
      icon: <FaPhone />,
      title: 'Call Us',
      details: ['+254 XXX XXX XXX', 'Mon - Sun: 9:00 AM - 11:00 PM'],
      link: 'tel:+254XXXXXXXXX'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Us',
      details: ['info@aviationHeights.com', 'We reply within 24 hours'],
      link: 'mailto:info@avaitionHeights.com'
    },
    {
      icon: <FaClock />,
      title: 'Opening Hours',
      details: ['Monday - Sunday', '9:00 AM - 11:00 PM'],
      link: null
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <motion.div 
            className="contact-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1>
              <span className="scroll-left">Contact</span>
              <span className="scroll-right">Us</span>
            </h1>
            <p className="contact-hero-tagline">
              We would Love to Hear From You
            </p>
            <p className="contact-hero-description">
              Have questions or want to make a reservation? Reach out to us and we will get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="section-container">
          <motion.div
            className="contact-info-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="contact-info-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="contact-info-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="contact-info-link">
                    {info.details.map((detail, idx) => (
                      <p key={idx}>{detail}</p>
                    ))}
                  </a>
                ) : (
                  info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="contact-form-section">
        <div className="section-container">
          <div className="contact-content-wrapper">
            {/* Contact Form */}
            <motion.div
              className="contact-form-container"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title">Send Us a Message</h2>
              <p className="section-subtitle">
                Fill out the form below and we will respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Kamau"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="johnkamau@gmail.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+254 XXX XXX XXX"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="House-renting Inquiry"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                {formStatus === 'success' && (
                  <div className="form-success">
                    <FaCheckCircle className="success-icon" />
                    Message sent successfully! We will get back to you soon.
                  </div>
                )}

                <button type="submit" className="btn-primary btn-submit">
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              className="contact-map-container"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
             <div className="map-wrapper">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2820.4834915132346!2d36.90399728028835!3d-1.3159619451393063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f134c548625ed%3A0xf92fcba85872c006!2sAviation%20apartments!5e0!3m2!1sen!2ske!4v1760870227578!5m2!1sen!2ske"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Aviation Heights Location"
  ></iframe>
</div>


              <div className="additional-info">
                <h3>Why Visit Us?</h3>
                <ul>
                  <li>
                    <FaCheckCircle className="info-icon" />
                    Tour beautifully finished spaces built for modern living
                  </li>
                  <li>
                    <FaCheckCircle className="info-icon" />
                    Explore modern amenities that make life easier and more enjoyable
                  </li>
                  <li>
                    <FaCheckCircle className="info-icon" />
                     Discover what makes Avaition Heights Apartments the talk of the neighborhood
                  </li>
                  <li>
                    <FaCheckCircle className="info-icon" />
                    Visit today — your dream apartment might be waiting right here
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="social-section">
        <div className="section-container">
          <motion.div
            className="social-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Follow Us on Social Media</h2>
            <p>Stay updated with our latest events, offers, and news</p>
            <div className="social-links">
              <a href="#" className="social-link facebook" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="social-link instagram" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="social-link twitter" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="social-link whatsapp" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;