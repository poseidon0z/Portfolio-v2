import React from 'react';
import Descriptors from '../components/Landing/Descriptors';
import Heading from '../components/General/Heading';
import me from '../assets/Me.png';

const Landing: React.FC = () => {
  return (
    <div className="h-screen flex flex-col bg-blurple">
      {/* Offsetting the navbar */}
      <div className="min-h-16"></div>

      <Descriptors />

      <div className="grid grid-cols-12 w-screen min-h-[500px] grow px-8 pb-8 pt-16 gap-4 items-center">
        <div className="col-span-5 row-span-1 h-full flex flex-col pb-[20%]">
          <div className="text-[128px] font-heading font-bold text-white leading-none">
            Hi!
            <br />
            I'm Adi
          </div>
          <Heading level={2} className="text-white mt-2">
            I build software
          </Heading>
        </div>
        <div className="col-start-9 col-span-4 flex flex-col items-center justify-end h-4/5 min-h-0 pt-[20%]">
          <img src={me} className="h-full aspect-square object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
