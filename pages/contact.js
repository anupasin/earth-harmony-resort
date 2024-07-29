import Image from "next/image";
import sustainabilityImage from "../public/sustainability.jpg";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div className="contact-container">
      <Navbar />
      <div className="content">
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
      <style jsx>{`
        .contact-container {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background-image: url(${sustainabilityImage.src});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .content {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
          background-color: rgba(255, 255, 255, 0.8);
        }
        h1 {
          font-size: 2rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 20px;
          color: #333;
        }
        .contact-form {
          width: 100%;
          max-width: 500px;
          background-color: white;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .form-group {
          margin-bottom: 20px;
        }
        label {
          display: block;
          margin-bottom: 5px;
          color: #333;
        }
        input, textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          box-sizing: border-box;
        }
        textarea {
          height: 150px;
          resize: vertical;
        }
        button {
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        }
        button:hover {
          background-color: #0056b3;
        }
        @media (max-width: 768px) {
          .contact-form {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;