import React from 'react';
import Heading from '../components/General/Heading';
import ProjectContainer from '../components/Projects/ProjectContainer';
import type { Project } from '../components/Projects/ProjectContainer';
import Countdown from '../assets/Projects/Countdown Timer.gif';
import TaleFlow from '../assets/Projects/Taleflow.gif';
import SmartPlanner from '../assets/Projects/Smart Time Table.gif';
import BodyText from '../components/General/BodyText';
import { useNavigate } from 'react-router';

const projects: Project[] = [
  {
    gifSrc: Countdown,
    title: 'Countdown Timer',
    description:
      'This countdown timer website features a sleek, modern UI and encodes all timer details directly in the URL for easy sharing and effortless use.\nMade entirely within 24 hours, in a team of 2, this was a project that truly tested my knowledge on the basics of design and development. This project also makes use of a custom encoding scheme for the website data, which was something really interesting and fun to learn.',
    tools: ['React', 'Vercel', 'git', 'GitHub'],
    link: 'https://countdown.poseidon0z.com/',
  },
  {
    gifSrc: TaleFlow,
    title: 'TaleFlow - Story Generator',
    description:
      'Uses AI and RAG models to help users co-create stories in real time, enhancing creativity through dynamic, collaborative storytelling.\nLearnt cutting edge technology like RAG for LLMs and gained experience on python fast-api. It was also a great learning experience for me in the field of natural language processing, as I learnt about the various processes used in this field.',
    tools: ['React', 'Fast-API', 'Gemini AI', 'Pinecone', 'git', 'GitHub'],
    link: 'https://taleflow.poseidon0z.com/',
  },
  {
    gifSrc: SmartPlanner,
    title: 'Smart time table',
    description:
      'AI-powered tool that helps users efficiently manage their daily tasks, schedules, and reminders through a seamless, intuitive interface.\nCurrent work in progress, where I have practiced and grown a lot in my design abilities, and practiced using LLMs, and responsive UI development.',
    tools: ['React', 'ExpressJS', 'Gemini AI', 'Tailwind CSS', 'git', 'GitHub'],
    link: 'https://smart-planner.poseidon0z.com/',
  },
];

const Projects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-blackish">
      <svg id="visual" viewBox="0 0 1440 129">
        <g transform="scale(1,-1) translate(0,-129)">
          <rect x="0" y="0" width="1440" height="129" fill="#1e1926" />
          <path
            d="M0 63L40 55.2C80 47.3 160 31.7 240 26.3C320 21 400 26 480 37.7C560 49.3 640 67.7 720 70C800 72.3 880 58.7 960 55.2C1040 51.7 1120 58.3 1200 55.2C1280 52 1360 39 1400 32.5L1440 26L1440 130L1400 130C1360 130 1280 130 1200 130C1120 130 1040 130 960 130C880 130 800 130 720 130C640 130 560 130 480 130C400 130 320 130 240 130C160 130 80 130 40 130L0 130Z"
            fill="#f9ebff"
            stroke-linecap="round"
            stroke-linejoin="miter"
          ></path>
        </g>
      </svg>
      <div
        id="projects"
        className="w-full min-h-screen flex flex-col items-center gap-16 px-4 sm:px-8 pb-8 bg-blackish text-white"
      >
        <Heading level={4} className="text-center pt-8">
          These are my projects
        </Heading>

        {projects.map((p, i) => (
          <ProjectContainer key={i} {...p} imageLeft={i % 2 == 0} />
        ))}

        <button
          className="flex gap-2 p-3 px-8 border border-seaweed rounded-lg hover:bg-seaweed/10 transition w-fit"
          onClick={() => {
            navigate('/project-archive');
          }}
        >
          <BodyText size="medium" className="text-seaweed">
            See More
          </BodyText>
        </button>
      </div>
    </div>
  );
};

export default Projects;
