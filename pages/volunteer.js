import Link from "next/link";
import Image from "next/image";
import volunteerImage from "../public/volunteer.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Volunteer = () => {
  return (
    <div className="volunteer-container">
      <Navbar />
      <div className="volunteer-page">
        <h1>Join Our Volunteer Team</h1>
        <div className="volunteer-content">
          <p>
            At Earth Harmony Resort, we're passionate about making a positive impact on our community and the environment. Our volunteer program is designed to bring like-minded individuals together to make a difference. Whether you're looking to give back, learn new skills, or simply be part of a dynamic team, we invite you to join us on this journey.
          </p>
          <p>
            As a volunteer, you'll have the opportunity to participate in a variety of activities, from conservation efforts to community outreach programs. You'll work alongside our dedicated staff and like-minded volunteers to make a real difference in the lives of others. And, as a bonus, you'll get to enjoy the beautiful surroundings and tranquil atmosphere of our resort.
          </p>
          <p>
            We're looking for individuals who share our values of sustainability, compassion, and community. If you're interested in joining our volunteer team, please don't hesitate to reach out. We can't wait to hear from you!
          </p>
        </div>
        <Image
          src={volunteerImage}
          alt="Volunteer"
          layout="responsive"
          className="volunteer-image"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Volunteer;
