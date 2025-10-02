import React, { useState, useEffect } from 'react';
import Heading from '../components/General/Heading';
import link from '../assets/Link.svg';
import BodyText from '../components/General/BodyText';
import { useNavigate } from 'react-router';

interface Project {
  year: string;
  name: string;
  tech: string;
  github?: string;
  livesite?: string;
}

const ProjectArchive: React.FC = () => {
  const navigate = useNavigate();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const projects: Project[] = [
    {
      year: '2025',
      name: 'TaleFlow - An AI Based Story Game',
      tech: 'React, TypeScript, Python, Gemini AI, RAG, Figma',
      github: 'https://github.com/Spoorthinbhat/TaleFlow',
      livesite: 'https://taleflow.poseidon0z.com/',
    },
    {
      year: '2025',
      name: 'Countdown Timer',
      tech: 'React, TypeScript, Figma',
      github: 'https://github.com/boredgamesorg/LinkCountdownTimer',
      livesite: 'https://countdown.poseidon0z.com/',
    },
    {
      year: '2025',
      name: 'Live Event Ranking Websites - CodeChef VITC',
      tech: 'React, TypeScript, Figma',
    },
    {
      year: '2025',
      name: 'Secure PDF Vault - LAXMI Electronics',
      tech: 'HTML, CSS, JavaScript, Php',
    },
    {
      year: '2025',
      name: 'DDoS Simulation and Detection with SNN',
      tech: 'Python, Docker, C++',
      github: 'https://github.com/poseidon0z/DDoS-Detection',
    },
    {
      year: '2024',
      name: 'Smart Time Table',
      tech: 'React, TypeScript, ExpressJS, Figma, Gemini, RAG',
      github: 'https://github.com/poseidon0z/Smart-Day-Planner',
      livesite: 'https://smart-planner.poseidon0z.com/',
    },
    {
      year: '2024',
      name: 'Quiz Practice',
      tech: 'React, TypeScript',
      github: 'https://github.com/poseidon0z/Quiz-Practice',
      livesite: 'https://quiz-practice.poseidon0z.com/',
    },
    {
      year: '2024',
      name: 'Speasy Voice to Voice Translation - TechEthos 2024',
      tech: 'React, TypeScript, ExpressJS, Figma, OpenAI, Google Translate API, Character AI',
      github: 'https://github.com/poseidon0z/Speasy',
    },
    {
      year: '2024',
      name: 'Club Management and Integration Platform - CodeChef VITC',
      tech: 'React, TypeScript, ExpressJS, Figma, MongoDB',
    },
    {
      year: '2024',
      name: 'Event Landing Pages - CodeChef VITC',
      tech: 'React, TypeScript, Figma',
    },
    {
      year: '2024',
      name: 'FlappyChef Minigame - CodeChef VITC',
      tech: 'React, TypeScript, ExpressJS, Figma, Firebase',
      livesite: 'https://flappychef.poseidon0z.com/',
    },
    {
      year: '2024',
      name: 'Connect 4 Game - CodeChef VITC - Web Dev Workshop',
      tech: 'HTML, CSS, JS, Figma',
      github: 'https://github.com/Codechef-VITC-Student-Chapter/Connect-Four',
      livesite: 'https://codechef-vitc-student-chapter.github.io/Connect-Four/',
    },
    {
      year: '2024',
      name: 'CodeChef VITC Official Website',
      tech: 'React, JavaScript, Figma, ExpressJS, Sanity',
      livesite: 'https://codechefvitcc.vercel.app/',
    },
    {
      year: '2024',
      name: 'Laws.io Gamified legal learning - SIH 2024',
      tech: 'React, TypeScript, Figma',
      github:
        'https://github.com/poseidon0z?tab=repositories&q=laws&type=&language=&sort=',
    },
    {
      year: '2023',
      name: 'Slide - A Sliding Tile Game',
      tech: 'React, TypeScript',
      github: 'https://github.com/poseidon0z/slide',
      livesite: 'https://slide.poseidon0z.com/',
    },
    {
      year: '2023',
      name: 'Typeracer Stats Script',
      tech: 'Python, MatPlotLib',
      github: 'https://github.com/poseidon0z/typeracer-stats',
    },
    {
      year: '2023',
      name: 'Integrated Payment System',
      tech: 'Python, Oracle XE, PyQt',
      github: 'https://github.com/poseidon0z/Integrated-Payment-System',
    },
    {
      year: '2023',
      name: 'Fake News Detector - Bionary Club VITC',
      tech: 'Python, Scikit-Learn',
    },
    {
      year: '2023',
      name: 'Password Manager Browser Extension',
      tech: 'JavaScript',
      github: 'https://github.com/poseidon0z/password-manager',
    },
    {
      year: '2023',
      name: 'Web Automation Scripts - MS Edge',
      tech: 'C++',
      github: 'https://github.com/poseidon0z/Bing-rewards',
    },
    {
      year: '2022+',
      name: 'All Language Calculators',
      tech: 'Java, Python, Go, C++, React, TypeScript',
      github: 'https://github.com/poseidon0z/All-Language-Calculators',
    },
    {
      year: '2022',
      name: 'Folder Sorter',
      tech: 'Python',
      github: 'https://github.com/poseidon0z/Folder-Sorter',
    },
    {
      year: '2021',
      name: 'Cerberus Discord Bot',
      tech: 'Python, DiscordPy',
    },
    {
      year: '2021',
      name: 'InkBot Discord Bot',
      tech: 'Python, DiscordPy',
      github: 'https://github.com/poseidon0z/InkBot',
    },
  ];

  const renderLinks = (project: Project) => {
    const hasGithub = project.github;
    const hasLivesite = project.livesite;

    if (!hasGithub && !hasLivesite) {
      return <span>-</span>;
    }

    return (
      <div className="flex flex-wrap gap-2">
        {hasGithub && (
          <a href={project.github} className="flex gap-1 hover:underline ">
            Github
            <img src={link} className="w-4"></img>
          </a>
        )}
        {hasLivesite && (
          <a href={project.livesite} className="flex gap-1 hover:underline">
            Live Site
            <img src={link} className="w-4"></img>
          </a>
        )}
      </div>
    );
  };

  const getBestLink = (project: Project): string | null => {
    if (project.livesite) return project.livesite;
    if (project.github) return project.github;
    return null;
  };

  const handleProjectClick = (project: Project) => {
    const link = getBestLink(project);
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div className="w-screen min-h-screen flex flex-col items-center gap-8 md:gap-16 px-8 pb-8 bg-blackish text-white">
      <Heading level={4} className="text-center pt-8">
        Project Archive
      </Heading>
      <div className="w-full grid grid-cols-6 md:grid-cols-10 lg:grid-cols-12 gap-2 md:gap-4">
        {/* Header Row */}
        <div className="col-span-1 text-center">
          <Heading level={5}>Year</Heading>
        </div>
        <div className="col-span-5 md:col-span-5 lg:col-span-5">
          <Heading level={5}>Name of Project</Heading>
        </div>
        <div className="hidden md:block md:col-span-4 lg:col-span-4">
          <Heading level={5}>Tech Used</Heading>
        </div>
        <div className="hidden lg:block lg:col-span-2">
          <Heading level={5}>Link</Heading>
        </div>

        {/* Project Rows */}
        {projects.map((project, index) => {
          const hasLink = getBestLink(project);
          const isClickable = hasLink && windowWidth < 1024;

          return (
            <React.Fragment key={index}>
              <div className="col-span-1 py-2 text-center">{project.year}</div>
              <div
                className={`col-span-5 md:col-span-5 lg:col-span-5 py-2 ${
                  isClickable
                    ? 'cursor-pointer hover:underline text-seaweed'
                    : ''
                }`}
                onClick={() => {
                  if (isClickable) {
                    handleProjectClick(project);
                  }
                }}
              >
                {project.name}
              </div>
              <div className="hidden md:block md:col-span-4 lg:col-span-4 py-2">
                {project.tech}
              </div>
              <div className="hidden lg:block lg:col-span-2 py-2">
                {renderLinks(project)}
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <button
        className="flex gap-2 p-2 lg:p-3 px-4 lg:px-8 border border-seaweed rounded-lg hover:bg-seaweed/10 transition w-fit"
        onClick={() => {
          navigate('/');
        }}
      >
        <BodyText size="medium" className="text-seaweed">
          See More
        </BodyText>
      </button>
    </div>
  );
};

export default ProjectArchive;
