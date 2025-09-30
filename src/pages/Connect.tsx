import React from 'react';
import Heading from '../components/General/Heading';
import ImageWithCaption from '../components/General/ImageWithCaption';
import { mail, gitHub_white, linkedIn } from '../assets/Logos';

const Connect: React.FC = () => {
  return (
    <div className="w-screen grid grid-cols-12 gap-6 px-8 pb-8 bg-blurple text-white">
      <Heading level={4} className="col-span-12 text-center pt-8">
        Let's connect!
      </Heading>

      {/* Row: email (3 cols), GitHub (1 col), LinkedIn (2 cols) */}
      <div className="col-span-4"></div>
      <div className="col-span-2 flex justify-center">
        <a
          href="mailto:prabhuaditya1290@gmail.com"
          className="hover:text-gray-300"
        >
          <ImageWithCaption
            src={mail}
            alt="Envelope"
            caption="prabhuaditya1290@gmail.com"
          />
        </a>
      </div>

      <div className="col-span-1 flex justify-center">
        <a href="https://github.com/poseidon0z" className="hover:text-gray-300">
          <ImageWithCaption
            src={gitHub_white}
            alt="GitHub"
            caption="Poseidon0z"
          />
        </a>
      </div>

      <div className="col-span-1 flex justify-center">
        <a
          href="https://www.linkedin.com/in/aditya-prabhu-90ba6724a/"
          className="hover:text-gray-300"
        >
          <ImageWithCaption
            src={linkedIn}
            alt="LinkedIn"
            caption="Aditya Prabhu"
          />
        </a>
      </div>
    </div>
  );
};

export default Connect;
