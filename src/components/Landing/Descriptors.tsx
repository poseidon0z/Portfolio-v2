import React, { useState, useLayoutEffect } from "react";
import Heading from "../General/Heading"; // Assuming these imports are correct
import star from "../../assets/Star.svg";

// This hook calculates the screen's diagonal angle and updates on resize.
const useDiagonalRotation = () => {
  const [angle, setAngle] = useState(0);

  useLayoutEffect(() => {
    const calculateAngle = () => {
      const width = window.innerWidth;
      const height = window.innerHeight - 64;
      const radians = Math.atan2(height, width);
      const degrees = radians * (180 / Math.PI);
      setAngle(degrees);
    };

    calculateAngle();
    window.addEventListener("resize", calculateAngle);
    return () => window.removeEventListener("resize", calculateAngle);
  }, []);

  return angle;
};

const Descriptors: React.FC = () => {
  const angle = useDiagonalRotation();
  const descriptors = [
    "Developer",
    "Designer",
    "Reader",
    "Photographer",
    "Writer",
  ];

  const marqueeContent = descriptors.map((text, index) => (
    <React.Fragment key={index}>
      <Heading level={1} className="text-white shrink-0 whitespace-nowrap">
        {text}
      </Heading>
      <img src={star} className="h-14 w-14 shrink-0" alt="" />
    </React.Fragment>
  ));

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <div
        className="border-t-2 border-b-2 border-white py-2"
        style={{
          // This combination centers and rotates the element perfectly.
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translateX(-50%) translateY(-50%) rotate(-${angle}deg)`,
          // Needs to be extra wide to cover the corners when rotated.
          minWidth: "200vw",
        }}
      >
        <div className="flex w-max animate-marquee items-center gap-4">
          {marqueeContent}
          {marqueeContent}
          {marqueeContent}
          {marqueeContent}
        </div>
      </div>
    </div>
  );
};

export default Descriptors;
