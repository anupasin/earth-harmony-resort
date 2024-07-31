import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleAudioPlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
    setIsAudioPlaying(true);
  };

  const handleAudioPause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsAudioPlaying(false);
  };

  return (
    <div className="hero">
      <audio
        id="background-music"
        src="/background-music.mp3"
        loop
        ref={audioRef}
      />
      <Image
        src="/placeholder-hero.jpeg"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className={`hero-image ${isLoaded ? 'fade-in' : ''}`}
        onLoadingComplete={() => setIsLoaded(true)}
      />
      <div className="hero-overlay"></div>
      <div className="hero-text">
        <h1 className={isLoaded ? 'active' : ''}>Earth Harmony Resort</h1>
        <p className={isLoaded ? 'active' : ''}>Your eco-friendly paradise awaits.</p>
        <button className="audio-control" onClick={isAudioPlaying ? handleAudioPause : handleAudioPlay}>
          {isAudioPlaying ? <i className="fa-solid fa-pause"></i> : <i className="fa-solid fa-play"></i>}
        </button>
      </div>
    </div>
  );
};

export default Hero;
