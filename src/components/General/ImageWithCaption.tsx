import React from 'react';
import BodyText from './BodyText';

interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption?: string;
}

const ImageWithCaption: React.FC<ImageWithCaptionProps> = ({
  src,
  alt,
  caption,
}) => (
  <div className="w-16 md:w-[100px] flex flex-col items-center gap-2">
    <div className="w-full h-[70px]">
      <img src={src} alt={alt} className="w-full h-full object-contain" />
    </div>
    {caption && (
      <BodyText size="medium" className="text-center">
        {caption}
      </BodyText>
    )}
  </div>
);

export default ImageWithCaption;
