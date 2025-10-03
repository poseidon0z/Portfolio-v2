import React from 'react';
import Descriptors from '../components/Landing/Descriptors';
import Heading from '../components/General/Heading';
import me from '../assets/Me.png';
import './Landing.css';

const Landing: React.FC = () => {
  return (
    <div
      id="landing"
      className="h-[calc(100vh-64px)] flex flex-col bg-blurple relative overflow-hidden"
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
  );
};

export default Landing;
