import React from 'react';
import Heading from '../components/General/Heading';
import ImageWithCaption from '../components/General/ImageWithCaption';
import { mail, gitHub_white, linkedIn } from '../assets/Logos';

const Connect: React.FC = () => {
  return (
    <div
      id="connect"
      className="w-screen flex flex-col gap-4 px-4 md:px-8 pb-8 bg-blurple text-white"
    >
      <Heading
        level={4}
        className="col-span-4 md:col-span-8 lg:col-span-12 text-center pt-8"
      >
        Let's connect!
      </Heading>

      {/* Row: email (3 cols), GitHub (1 col), LinkedIn (2 cols) */}
      <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center">
        <div className="sm:col-span-2 flex justify-center">
          <a
            href="mailto:prabhuaditya1290@gmail.com"
            className="hover:text-gray-300"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="w-full h-[70px]">
                <img
                  src={mail}
                  alt="Envelope"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-center w-full text-small md:text-medium">
                prabhuaditya1290@gmail.com
              </p>
            </div>
          </a>
        </div>

        <div className="col-span-1 flex justify-center">
          <a
            href="https://github.com/poseidon0z"
            className="hover:text-gray-300"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="w-full h-[70px]">
                <img
                  src={gitHub_white}
                  alt="GitHub"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-center w-full text-small sm:text-medium">
                poseidon0z
              </p>
            </div>
          </a>
        </div>

        <div className="col-span-1 flex justify-center">
          <a
            href="https://www.linkedin.com/in/aditya-prabhu-90ba6724a/"
            className="hover:text-gray-300"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="w-full h-[70px]">
                <img
                  src={linkedIn}
                  alt="LinkedIn"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-center w-full text-small sm:text-medium">
                Aditya Prabhu
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Connect;
