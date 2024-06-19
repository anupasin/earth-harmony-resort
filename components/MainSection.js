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
      <section className="volunteer">
        <h2>Join Our Community</h2>
        <div className="image-container">
          <Image
            src="/volunteer.jpg"
            alt="Volunteer"
            layout="responsive"
            width={800}
            height={400}
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          vel ligula et turpis tempus facilisis.
        </p>
      </section>
      <section className="sustainability">
        <h2>Our Commitment to Sustainability</h2>
        <div className="image-container">
          <Image
            src="/sustainability.jpg"
            alt="Sustainability"
            layout="responsive"
            width={800}
            height={400}
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          vel ligula et turpis tempus facilisis.
        </p>
      </section>
      <section className="dining">
        <h2>Farm-to-Table Dining</h2>
        <div className="image-container">
          <Image
            src="/dining.jpg"
            alt="Dining"
            layout="responsive"
            width={800}
            height={400}
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          vel ligula et turpis tempus facilisis.
        </p>
      </section>
      <section className="activities">
        <h2>Explore and Enjoy</h2>
        <div className="activity">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque vel ligula et turpis tempus facilisis.
          </p>
          <div className="image-container">
            <Image
              src="/activities.jpg"
              alt="Activities"
              layout="responsive"
              width={800}
              height={400}
            />
          </div>
        </div>
      </section>
      <section className="reviews">
        <h2>What Our Guests Say</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          vel ligula et turpis tempus facilisis.
        </p>
      </section>
      <section className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          <Image
            src="/gallery1.jpg"
            alt="Gallery Image 1"
            layout="responsive"
            width={400}
            height={300}
          />
          <Image
            src="/gallery2.jpg"
            alt="Gallery Image 2"
            layout="responsive"
            width={400}
            height={300}
          />
        </div>
      </section>
      <section className="contact">
        <h2>Get in Touch</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          vel ligula et turpis tempus facilisis.
        </p>
        <div className="image-container">
          <Image
            src="/map.jpg"
            alt="Map"
            layout="responsive"
            width={800}
            height={400}
          />
        </div>
      </section>
    </div>
  );
};

export default MainSection;