import Link from "next/link";
import Image from "next/image";
import premiumRoomImage from "../public/premium-room.jpg";
import standardRoomImage from "../public/standard-room.jpg";
import suiteImage from "../public/suite.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Rooms = () => {
  return (
    <div className="rooms-container">
      <Navbar />
      <div className="rooms-page">
        <h1>Cozy Accommodations</h1>
        <p>
          At Earth Harmony Resort, we offer a range of cozy and comfortable accommodations to suit your needs. From our Standard Rooms to our luxurious Suites, each room is designed to provide a peaceful and rejuvenating retreat from the stresses of everyday life.
        </p>
        <p>
          Our rooms feature plush bedding, crisp linens, and modern amenities to ensure a comfortable and relaxing stay. And, with breathtaking views of our surrounding gardens and mountains, youll feel like youre a world away from the hustle and bustle of city life.
        </p>
        <p>
          Whether youre looking for a romantic getaway, a family vacation, or a solo retreat, we have the perfect room for you. So why wait? Book your stay with us today and experience the tranquility and beauty of Earth Harmony Resort.
        </p>
        <div className="room-cards">
          <div className="room-card">
            <Image
              src={standardRoomImage}
              alt="Standard Room"
              layout="responsive"
              className="room-image"
            />
            <div className="room-details">
              <h3>Standard Room</h3>
              <p className="room-description">Comfortable and cozy with all necessary amenities.</p>
            </div>
          </div>
          <div className="room-card">
            <Image
              src={premiumRoomImage}
              alt="Premium Room"
              layout="responsive"
              className="room-image"
            />
            <div className="room-details">
              <h3>Premium Room</h3>
              <p className="room-description">Luxurious amenities with breathtaking views.</p>
            </div>
          </div>
          <div className="room-card">
            <Image
              src={suiteImage}
              alt="Suite"
              layout="responsive"
              className="room-image"
            />
            <div className="room-details">
              <h3>Suite</h3>
              <p className="room-description">Spacious suites with luxurious amenities.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Rooms;
