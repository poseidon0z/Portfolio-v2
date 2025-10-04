import React from 'react';
import CodeChef from '../assets/Experience/CodeChef.png';
import CompanyItem from '../components/Experience/CompanyItem';
import Heading from '../components/General/Heading';

const experienceData = {
  1: {
    heading: 'Web Development Lead',
    company: 'CodeChef VIT-Chennai',
    time: 'April 2024 - April 2025',
    location: 'Chennai',
    description:
      'Led the department to make multiple web based systems to improve club functioning, and teach new technologies to members. Led the design and development for a flappy bird game, a club management platform for managing members, and tracking their contributions to the club, and websites for club events.\nHelped create rich text emails for club announcements, and started a project to simplify this task.\nLearnt and gained practical experience in the field of software engineering while in this role. In this role, I got to see first-hand the effects of using various practices in the software life cycle.',
    image: CodeChef,
  },
};

const Leader: React.FC = () => {
  return (
    <>
      {/* Mobile SVG - full pinkish (up to md) */}
      <svg id="visual" viewBox="0 0 1440 129" className="md:hidden">
        <rect x="0" y="0" width="1440" height="129" fill="#f9ebff" />
        <path
          d="M0 63L40 55.2C80 47.3 160 31.7 240 26.3C320 21 400 26 480 37.7C560 49.3 640 67.7 720 70C800 72.3 880 58.7 960 55.2C1040 51.7 1120 58.3 1200 55.2C1280 52 1360 39 1400 32.5L1440 26L1440 130L1400 130C1360 130 1280 130 1200 130C1120 130 1040 130 960 130C880 130 800 130 720 130C640 130 560 130 480 130C400 130 320 130 240 130C160 130 80 130 40 130L0 130Z"
          fill="#1e1926"
          stroke-linecap="round"
          stroke-linejoin="miter"
        ></path>
      </svg>

      {/* Desktop SVG - two colors (md and above) */}
      <svg id="visual" viewBox="0 0 1440 129" className="hidden md:block">
        <rect x="0" y="0" width="480" height="129" fill="#4c32c9" />
        <rect x="480" y="0" width="960" height="129" fill="#f9ebff" />
        <path
          d="M0 63L40 55.2C80 47.3 160 31.7 240 26.3C320 21 400 26 480 37.7C560 49.3 640 67.7 720 70C800 72.3 880 58.7 960 55.2C1040 51.7 1120 58.3 1200 55.2C1280 52 1360 39 1400 32.5L1440 26L1440 130L1400 130C1360 130 1280 130 1200 130C1120 130 1040 130 960 130C880 130 800 130 720 130C640 130 560 130 480 130C400 130 320 130 240 130C160 130 80 130 40 130L0 130Z"
          fill="#1e1926"
          stroke-linecap="round"
          stroke-linejoin="miter"
        ></path>
      </svg>
      <div className="bg-blackish text-seaweed px-8 flex flex-col gap-4 py-12 sm:py-0">
        <Heading level={4} className="text-center">
          I've been a leader
        </Heading>
        <CompanyItem data={experienceData[1]} left={1} right={11} />
      </div>
    </>
  );
};

export default Leader;
