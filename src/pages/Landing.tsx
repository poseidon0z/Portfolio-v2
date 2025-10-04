import React, { useEffect, useState } from 'react';
import Descriptors from '../components/Landing/Descriptors';
import Heading from '../components/General/Heading';
import me from '../assets/Me.png';
import './Landing.css';

const Landing: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Hide the div completely when scroll reaches 100vh
      if (currentScrollY >= window.innerHeight) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate opacity based on scroll position (0 to 100vh)
  const opacity = Math.max(0, 1 - scrollY / window.innerHeight);

  return (
    <div className="h-[200vh] bg-blurple">
      <div
        id="landing"
        className="w-full h-[calc(100vh-64px)] flex flex-col bg-blurple overflow-hidden fixed"
        style={{
          opacity: opacity,
          display: isHidden ? 'none' : 'flex',
        }}
      >
        <Descriptors />

        <div className="flex flex-col justify-between w-full min-h-[500px] grow px-8 pb-8 pt-16 gap-4 items-center">
          <div className="landing-text-box w-full flex flex-col">
            <div className="landing-text font-heading font-bold text-white leading-none">
              Hi!
              <br />
              I'm Adi
            </div>
            <Heading level={2} className="text-white mt-2">
              I build software
            </Heading>
          </div>
          <div className="w-full flex justify-end">
            <img src={me} className="h-[50vmin] aspect-square object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
