import React from 'react';
import Heading from '../General/Heading';
import BodyText from '../General/BodyText';
import LinkIcon from '../../assets/Link.svg';

export type Project = {
  gifSrc: string; // URL or imported asset for the project's gif/demo
  title: string;
  description: string;
  tools?: string[]; // list of tools/technologies used
  link?: string; // optional deployment or demo link
  alt?: string; // alt text for the gif
  imageLeft?: boolean; // whether the image should appear on the left (default true)
};

type ProjectContainerProps = Project;

const ProjectContainer: React.FC<ProjectContainerProps> = ({
  gifSrc,
  title,
  description,
  tools = [],
  link,
  alt = `${title} demo`,
  imageLeft = true,
}) => {
  const imageBlock = (
    <div className="col-span-6 p-4 border border-white rounded-2xl">
      <img
        src={gifSrc}
        alt={alt}
        className="w-full h-auto object-cover rounded-xl"
      />
    </div>
  );

  const contentBlock = (
    <div className="col-span-6 flex flex-col gap-8 items-center">
      <Heading level={5} className="text-center">
        {title}
      </Heading>
      <div>
        {description.split('\n').map((line, idx) => (
          <BodyText size="medium" className="mb-4" key={idx}>
            {line}
          </BodyText>
        ))}
      </div>
      <div className="flex flex-wrap items-center">
        <BodyText size="medium" className="mr-2">
          Tools used:
        </BodyText>
        {tools.map((tool, idx) => (
          <React.Fragment key={tool}>
            <BodyText size="medium" weight="bold" className="underline inline">
              {tool}
            </BodyText>
            {idx < tools.length - 1 && (
              <BodyText size="medium" className="inline">
                {' , '}
              </BodyText>
            )}
          </React.Fragment>
        ))}
      </div>
      {link && (
        <a href={link}>
          <button className="flex gap-2 p-2 border border-seaweed rounded-lg hover:bg-seaweed/10 transition w-fit">
            <BodyText size="medium" className="text-seaweed">
              Check it out
            </BodyText>
            <img src={LinkIcon} alt={`${title} link`} className="w-6 h-6" />
          </button>
        </a>
      )}
    </div>
  );

  return (
    <article className="grid grid-cols-12 gap-6 w-full items-center">
      {imageLeft ? (
        <>
          {imageBlock}
          {contentBlock}
        </>
      ) : (
        <>
          {contentBlock}
          {imageBlock}
        </>
      )}
    </article>
  );
};

export default ProjectContainer;
