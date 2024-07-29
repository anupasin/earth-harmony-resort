import Link from "next/link";
import Image from "next/image"; // Added for image handling
import premiumRoomImage from "../public/premium-room.jpg"; // Importing images
import standardRoomImage from "../public/standard-room.jpg";
import suiteImage from "../public/suite.jpg";
import Navbar from "../components/Navbar"; // Importing Navbar component

const Rooms = () => {
  return (
    <div className="rooms-container">
      <Navbar /> {/* Using Navbar component */}
      <div className="rooms-page">
        {" "}
        {/* Added class for styling */}
        <h1>Lorem Ipsum Headline</h1> {/* Dummy headline */}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>{" "}
        {/* Dummy text */}
        <div className="room-images">
          <Image
            src={premiumRoomImage}
            alt="Premium Room"
            layout="responsive"
          />
          <Image
            src={standardRoomImage}
            alt="Standard Room"
            layout="responsive"
          />
          <Image src={suiteImage} alt="Suite" layout="responsive" />
        </div>
      </div>
    </div>
  );
};

export default Rooms;
