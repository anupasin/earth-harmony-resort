import Navbar from "../components/Navbar";
import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <Navbar />
      <div className="about-content">
        <div className="about-text">
          <h1 className="about-heading-lg">Welcome to Earth Family Resort</h1>
          <h2 className="about-heading-sm">Your Sanctuary in Nature&apos;s Embrace</h2>
          <p className="about-paragraph">
            Nestled in the heart of breathtaking natural beauty, Earth Family Resort offers an idyllic retreat for families and nature enthusiasts alike. Our eco-friendly resort is designed to harmonize with the surrounding environment, providing luxurious accommodations and amenities without compromising our commitment to sustainability. From serene forest trails to rejuvenating spa experiences, every aspect of Earth Family Resort is crafted to reconnect you with nature and create unforgettable memories with your loved ones. Join us in celebrating the Earth and all its wonders, as you relax and recharge in our tranquil haven.
          </p>
        </div>
        <div className="about-image">
          <Image src="/about2.png" alt="About Image" layout="fill" />
          <div className="fancy-text-1">Reconnect. Rejuvenate. Rediscover Nature.</div>
          <div className="fancy-text-2">Earth Harmony Resort</div>
        </div>
      </div>
    </div>
  );
};

export default About;
