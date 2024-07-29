import Link from "next/link";
import Image from "next/image"; // Added for image handling
import volunteerImage from "../public/volunteer.jpg"; // Importing the image
import Navbar from "../components/Navbar"; // Importing Navbar component

const Volunteer = () => {
  return (
    <div className="volunteer-container">
      <Navbar /> {/* Using Navbar component */}
      <div className="volunteer-page">
        {" "}
        {/* Added class for styling */}
        <Image src={volunteerImage} alt="Volunteer" layout="responsive" />{" "}
        {/* Responsive image */}
        <h1>Lorem Ipsum Headline</h1> {/* Dummy headline */}
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Est eros nisi ligula aliquet duis vehicula fames hendrerit. Fringilla integer hac orci ut ex tortor consequat natoque leo. Sem turpis magnis nisi vestibulum faucibus amet potenti. Cubilia vitae tempor vestibulum nam suspendisse; nam curae. Urna varius fermentum placerat vestibulum auctor facilisi. Neque inceptos primis eleifend lacus, ornare inceptos laoreet. Apretium nascetur rutrum ornare ante malesuada. Augue eu nascetur habitant; sociosqu varius hendrerit efficitur id condimentum. Molestie diam ornare ornare fermentum sociosqu enim; iaculis aliquet laoreet.

Dui vulputate maximus sit; metus finibus felis hac! Nascetur imperdiet eget pharetra nostra enim arcu lacus fusce. Tempor ante ut vulputate curae, ut consectetur dui phasellus posuere. Purus posuere maecenas parturient nibh netus imperdiet maximus non ornare. Torquent odio laoreet tempor est praesent placerat commodo mi quis. Ac eget risus litora pretium habitasse magnis nullam. Fusce quam donec nibh aliquam tempor class porta morbi. Ut aptent enim tellus rhoncus phasellus auctor.

Tristique massa eros natoque dolor curae per imperdiet fames. Felis vel cursus habitant ullamcorper dictumst rhoncus. Taciti dapibus purus conubia inceptos ullamcorper neque. Ultrices aliquet nisi luctus; erat ligula porta dui blandit. Urna eros tristique vestibulum eu, donec sodales. Lobortis feugiat congue egestas magna eros tellus. At sapien orci arcu fermentum ut aliquam ligula.</p>{" "}
        {/* Dummy text */}
      </div>
    </div>
  );
};

export default Volunteer;
