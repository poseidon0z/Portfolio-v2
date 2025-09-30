import React from 'react';
import Heading from '../components/General/Heading';
import ProjectContainer from '../components/Projects/ProjectContainer';
import type { Project } from '../components/Projects/ProjectContainer';
import Countdown from '../assets/Projects/Countdown Timer.gif';
import TaleFlow from '../assets/Projects/Taleflow.gif';
import SmartPlanner from '../assets/Projects/Smart Time Table.gif';

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
  return (
    <div className="w-screen flex flex-col gap-16 px-8 pb-8 bg-blackish text-white">
      <Heading level={4} className="text-center pt-8">
        These are my projects
      </Heading>

      {projects.map((p, i) => (
        <ProjectContainer key={i} {...p} imageLeft={i % 2 == 0} />
      ))}
    </div>
  );
};

export default Projects;
