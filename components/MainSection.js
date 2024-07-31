// components/MainSection.js
import Image from "next/image";
import FadeInSection from "./FadeInSection";

const MainSection = () => {
  return (
    <div className="main-section">
      <FadeInSection immediatelyVisible={true}>
        <section className="intro">
          <h2 className="intro-title">Welcome to Earth Harmony Resort</h2>
          <p className="intro-text">Step into a world of tranquility at Earth Harmony Resort, where the rhythms of nature guide your journey towards balance and harmony. Our resort is nestled among the trees, offering a peaceful retreat from the stresses of everyday life. Take a deep breath, and let the fresh air and soothing sounds of the forest calm your mind and rejuvenate your spirit. Whether you&apos;re seeking a digital detox, a romantic escape, or a family adventure, our serene surroundings and thoughtful amenities are designed to nourish your body, mind, and soul.</p>
          <div className="image-container">
            <Image src="/intro.jpg" alt="Intro Image" layout="responsive" width={800} height={400} />
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="accommodations">
          <h2>Choose Your Stay</h2>
          <div className="accommodation-types">
            <FadeInSection>
              <div className="accommodation">
                <h3>Standard Room</h3>
                <p className="accommodation-text">Cozy and intimate, our Standard Room features a comfortable king-sized bed and stunning views of the surrounding landscape.</p>
                <div className="image-container">
                  <Image src="/standard-room.jpg" alt="Standard Room" layout="responsive" width={400} height={300} />
                </div>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="accommodation">
                <h3>Premium Room</h3>
                <p className="accommodation-text">Our Premium Room offers a spacious bed and a private balcony, making it the perfect choice for those who appreciate luxury and privacy.</p>
                <div className="image-container">
                  <Image src="/premium-room.jpg" alt="Premium Room" layout="responsive" width={400} height={300} />
                </div>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="accommodation">
                <h3>Suite</h3>
                <p className="accommodation-text">Indulge in luxury with our Suite, featuring a spacious master bedroom, a separate living room, and a private balcony with breathtaking views of the resort&apos;s gardens and surrounding mountains.</p>
                <div className="image-container">
                  <Image src="/suite.jpg" alt="Suite" layout="responsive" width={400} height={300} />
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
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
          <p className="volunteer-text">
          Join Our Community At Earth Harmony Resort, we believe that community is at the heart of a harmonious and fulfilling life. Join our community of like-minded individuals who share a passion for wellness, sustainability, and personal growth. Whether you&apos;re looking for a sense of belonging, a supportive network, or simply a place to connect with others who share your values, we invite you to join us on this journey of discovery and growth.
          </p>
        </section>
      </FadeInSection>

      <FadeInSection>
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
          <p className="sustainability-text">
          Our Commitment to Sustainability At Earth Harmony Resort, we&apos;re dedicated to reducing our environmental footprint and promoting sustainable practices throughout our operations. We&apos;re committed to using eco-friendly products, reducing waste, and conserving energy and water. Our goal is to create a harmonious relationship between our resort and the natural world, and we&apos;re constantly seeking new ways to improve our sustainability efforts.
          </p>
        </section>
      </FadeInSection>

      <FadeInSection>
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
          <p className="dining-text">
          Farm-to-Table Dining Savor the flavors of the season at our farm-to-table restaurant, where locally sourced ingredients meet creative culinary expertise. Our chefs work closely with local farmers to craft menus that showcase the freshest, highest-quality produce and meats. From farm-fresh salads to artisanal cheeses, every bite is a celebration of the natural world and the art of delicious food.
          </p>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="activities">
          <h2>Explore and Enjoy</h2>
          <div className="activity">
            <p className="activities-text">
            Explore and Enjoy From hiking and biking trails to yoga and meditation classes, there&apos;s always something to do at Earth Harmony Resort. Take a dip in our crystal-clear pool, indulge in a rejuvenating spa treatment, or simply relax in a hammock with a good book. Our resort is designed to help you unwind, recharge, and connect with nature and yourself.
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
      </FadeInSection>

      <FadeInSection>
        <section className="reviews">
          <h2>What Our Guests Say</h2>
          <p className="reviews-text">
            Our guests rave about their experiences at Earth Harmony Resort, praising our serene atmosphere, delicious farm-to-table cuisine, and exceptional service. Here&apos;s what a few of them have to say:
          </p>
          <br />
          <p className="reviews-text">
          &quot;I never felt more relaxed and rejuvenated than during my stay at Earth Harmony Resort. The staff was warm and welcoming, and the food was incredible!&quot; - Rachel P.
          </p>
          <br />
          <p className="reviews-text">
          &quot;The resort&apos;s commitment to sustainability and eco-friendliness was impressive. I loved the peaceful surroundings and the opportunity to disconnect from the hustle and bustle of daily life.&quot; - David K.
          </p>
          <br />
          <p className="reviews-text">
          &quot;I was blown away by the quality of the spa treatments and the expertise of the therapists. The resort&apos;s focus on wellness and self-care was exactly what I needed to recharge and refocus.&quot; - Emily G.
          </p>
        </section>
      </FadeInSection>

      <FadeInSection>
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
      </FadeInSection>

      <FadeInSection>
        <section className="contact">
          <h2>Get in Touch</h2>
          <p className="contact-text">
          Get in Touch Ready to experience the serenity and beauty of Earth Harmony Resort for yourself? We&apos;d love to hear from you! Whether you have questions about our accommodations, activities, or services, or simply want to learn more about our resort, please don&apos;t hesitate to reach out. You can contact us by phone, email, or through our online form. We look forward to connecting with you!
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
      </FadeInSection>
    </div>
  );
};

export default MainSection;