// /components/Hero.js
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="hero">
      <Image
        src="/placeholder-hero.jpeg"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        opacity={0.20}
      />
      <div className="overlay"></div>
      <div className="hero-text">
        <h1>Earth Harmony Resort</h1>
        <p>Your eco-friendly paradise awaits.</p>
      </div>
    </div>
  );
};

export default Hero;
