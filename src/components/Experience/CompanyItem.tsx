import React from 'react';
import Heading from '../General/Heading';
import BodyText from '../General/BodyText';

type ExperienceData = {
  heading: string;
  company: string;
  time: string;
  location: string;
  description: string;
  image: string;
};

const CompanyItem: React.FC<{
  data: ExperienceData;
  left?: number;
  right?: number;
}> = ({ data, left = 1, right = 7 }) => {
  // normalize spans to positive integers
  const leftSpan = Math.max(1, Math.floor(left));
  const rightSpan = Math.max(1, Math.floor(right));
  const total = leftSpan + rightSpan;
  // prefer an explicit total when it differs from default 8
  const gridColsClass = total === 8 ? 'grid-cols-8' : `grid-cols-${total}`;
  return (
    <div className="w-full">
      <div className={`grid ${gridColsClass}`}>
        <div className={`col-span-${leftSpan}`}>
          <img src={data.image} alt={data.company} className="w-full h-auto" />
        </div>
        <div className={`col-span-${rightSpan}  text-left pl-4`}>
          <Heading level={6}>
            {data.heading}, {data.company}
          </Heading>
          <BodyText size="small" weight="bold" className="pb-4">
            {data.time}, {data.location}
          </BodyText>
          {data.description.split('\n').map((line, idx) => (
            <BodyText size="medium" key={idx}>
              {line}
            </BodyText>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyItem;
