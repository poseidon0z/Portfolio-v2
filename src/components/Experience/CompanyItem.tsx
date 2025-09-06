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

const CompanyItem: React.FC<{ data: ExperienceData }> = ({ data }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-8">
        <div className="col-span-1">
          <img src={data.image} alt={data.company} className="w-full h-auto" />
        </div>
        <div className="col-span-7 text-left pl-4">
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
