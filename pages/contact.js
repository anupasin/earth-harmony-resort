import Image from "next/image";
import sustainabilityImage from "../public/sustainability.jpg";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div className="contact-container" style={{backgroundImage: `url(${sustainabilityImage.src})`}}>
      <Navbar />
      <div className="contact-content">
        <h1>Contact Us</h1>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;