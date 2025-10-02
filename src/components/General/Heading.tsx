import React, { type JSX } from 'react';

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
};

// This config is now cleaner, mapping a level to a single utility class.
const headingConfig: Record<HeadingProps['level'], string> = {
  1: 'text-heading-4 md:text-heading-3 lg:text-heading-1 ',
  2: 'text-heading-5 md:text-heading-4 lg:text-heading-2',
  3: 'text-heading-5 md:text-heading-4 lg:text-heading-3',
  4: 'text-heading-6 md:text-heading-5 lg:text-heading-4',
  5: 'text-heading-7 md:text-heading-5',
  6: 'text-heading-7 md:text-heading-6',
};

const Heading = ({ level, children, className = '' }: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const styleClass = headingConfig[level];

  return (
    <Tag className={`font-heading font-bold ${styleClass} ${className}`}>
      {children}
    </Tag>
  );
};

export default Heading;
