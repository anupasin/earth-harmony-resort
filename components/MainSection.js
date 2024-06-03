// /components/MainSection.js
import Image from 'next/image';

const MainSection = () => {
  return (
    <div className="main-section">
      <section className="intro">
        <h2 className="intro-title">Welcome to Earth Harmony Resort</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel ligula et turpis tempus facilisis.</p>
        <div className="image-container">
          <Image src="/intro.jpg" alt="Intro Image" layout="responsive" width={800} height={400} />
        </div>
      </section>
      <section className="accommodations">
        <h2>Choose Your Stay</h2>
        <div className="accommodation-types">
          <div className="accommodation">
            <h3>Standard Room</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="image-container">
              <Image src="/standard-room.jpg" alt="Standard Room" layout="responsive" width={400} height={300} />
            </div>
          </div>
          <div className="accommodation">
            <h3>Premium Room</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="image-container">
              <Image src="/premium-room.jpg" alt="Premium Room" layout="responsive" width={400} height={300} />
            </div>
          </div>
          <div className="accommodation">
            <h3>Suite</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="image-container">
              <Image src="/suite.jpg" alt="Suite" layout="responsive" width={400} height={300} />
            </div>
          </div>
        </div>
      </section>
      {/* Other sections remain the same */}
    </div>
  );
};

export default MainSection;
