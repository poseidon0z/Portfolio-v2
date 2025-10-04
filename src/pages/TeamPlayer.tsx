import React from 'react';
import Heading from '../components/General/Heading';
import BodyText from '../components/General/BodyText';

const LeaderTeamPlayer: React.FC = () => {
  return (
    <div className="bg-blurple">
      <svg id="visual" viewBox="0 0 1440 129">
        <g transform="scale(1,-1) translate(0,-129)">
          <rect x="0" y="0" width="1440" height="129" fill="#4c32c9" />
          <path
            d="M0 63L40 55.2C80 47.3 160 31.7 240 26.3C320 21 400 26 480 37.7C560 49.3 640 67.7 720 70C800 72.3 880 58.7 960 55.2C1040 51.7 1120 58.3 1200 55.2C1280 52 1360 39 1400 32.5L1440 26L1440 130L1400 130C1360 130 1280 130 1200 130C1120 130 1040 130 960 130C880 130 800 130 720 130C640 130 560 130 480 130C400 130 320 130 240 130C160 130 80 130 40 130L0 130Z"
            fill="#1e1926"
            stroke-linecap="round"
            stroke-linejoin="miter"
          ></path>
        </g>
      </svg>
      <div className="flex flex-col px-4 sm:px-8 bg-blurple text-white gap-4 py-8 sm:py-0">
        <Heading level={4} className="text-center">
          and a team player
        </Heading>
        <div className="w-full flex justify-center gap-2 sm:gap-4">
          <div className="flex flex-col gap-2 items-center">
            <Heading level={4} className="text-center">
              8+
            </Heading>
            <BodyText size="small" weight="bold" className="text-center">
              Hackathons
            </BodyText>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Heading level={4} className="text-center">
              4+
            </Heading>
            <BodyText size="small" weight="bold" className="text-center">
              Research Projects
            </BodyText>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Heading level={4} className="text-center">
              10+
            </Heading>
            <BodyText size="small" weight="bold" className="text-center">
              Academic Projects
            </BodyText>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Heading level={4} className="text-center">
              3
            </Heading>
            <BodyText size="small" weight="bold" className="text-center">
              Clubs
            </BodyText>
          </div>
        </div>
      </div>
      <svg id="visual" viewBox="0 0 1440 129">
        <g transform="scale(1,-1) translate(0,-129)">
          <rect x="0" y="0" width="1440" height="129" fill="#f9ebff" />
          <path
            d="M0 63L40 55.2C80 47.3 160 31.7 240 26.3C320 21 400 26 480 37.7C560 49.3 640 67.7 720 70C800 72.3 880 58.7 960 55.2C1040 51.7 1120 58.3 1200 55.2C1280 52 1360 39 1400 32.5L1440 26L1440 130L1400 130C1360 130 1280 130 1200 130C1120 130 1040 130 960 130C880 130 800 130 720 130C640 130 560 130 480 130C400 130 320 130 240 130C160 130 80 130 40 130L0 130Z"
            fill="#4c32c9"
            stroke-linecap="round"
            stroke-linejoin="miter"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default LeaderTeamPlayer;
