import React from 'react';
import Heading from '../components/General/Heading';
import CompanyItem from '../components/Experience/CompanyItem';
import Cisco from '../assets/Experience/Cisco.svg';
import LaxmiElectronics from '../assets/Experience/LaxmiElectronics.png';
import TATAElxsi from '../assets/Experience/TataElxsi.png';

const experienceData = {
  1: {
    heading: 'Technical Intern, Data Center Networking',
    company: 'Cisco Systems Inc.',
    time: 'May 21, 2025 - July 17, 2025',
    location: 'Bangalore',
    description:
      'Built a full stack AI Centred Dashboard for log analysis. This would help network engineers diagnose and debug issues in cisco switches faster, by analysing and summarising network logs. Worked through the entire life cycle for this PoC, from ideation, to deployment.\nLearned a lot about the bug fixing lifecycle in live systems, and about the logging infrastructure at cisco. Interacted with, and learned a lot from professionals in the networking field.\nUsed languages and frameworks like go, python, fast api, redoc, react on typescript, tailwind css, and internal LLM models. Also explored Apache Cassandra and PostgreSQL databases.',
    image: Cisco,
  },
  2: {
    heading: 'Web Development Intern',
    company: 'Laxmi Electronics',
    time: 'July 2024 – August 2024',
    location: 'Remote',
    description:
      'Led the design and development of a secure PDF vault for the company to use on their website. This Required setting up systems so clients and employees can access the required official documents easily form anywhere.\nLearned a lot about protocols and services to ensure security.\nUsed pdf.js to build a custom, secure pdf viewer to ensure secure document reading and make it harder to leak confidential documents. Also added tracking to document access to allow for quick identification of vulnerabilities.',
    image: LaxmiElectronics,
  },
  3: {
    heading: 'Experience Design Intern',
    company: 'TATA Elxsi Ltd.',
    time: 'May 2024-July 2024',
    location: 'Bangalore',
    description:
      'Contributed to the design of multiple web-based applications. I learnt about design as a field and how to understand experience design. Quickly learned and applied new skills to ensure timely project completion.\nWorked on the iF Design award winning project - GameSense.\nGained a lot of knowledge in Figma and the field of design in general.',
    image: TATAElxsi,
  },
};

const Experience: React.FC = () => {
  return (
    <div className="grid grid-cols-12 min-h-screen ">
      <div className="col-span-4 h-full flex flex-col justify-center bg-blurple text-white pl-8 pr-4 text-center">
        <Heading level={1}>I have professional experience</Heading>
      </div>
      <div className="col-span-8 h-full flex flex-col gap-16 justify-center bg-pinkish text-blackish pl-4 pr-8 text-center">
        {Object.values(experienceData).map((data, idx) => (
          <CompanyItem key={idx} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
