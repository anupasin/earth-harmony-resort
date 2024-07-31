import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const image = new globalThis.Image();
    image.src = '/sustainability.jpg';
    image.onload = () => {
      setIsLoaded(true);
    };
  }, []);

  return (
    <div className="page-container">
      <Navbar />
      <div className={`contact-container ${isLoaded ? 'loaded' : ''}`}>
        <div className="contact-content">
          <h1>Contact Us</h1>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;