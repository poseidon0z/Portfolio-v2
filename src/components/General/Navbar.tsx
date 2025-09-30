import React from 'react';
import { useNavigate, useLocation } from 'react-router';
import favicon from '/Favicon.svg';
import BodyText from './BodyText';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle navigation to home sections
  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Function to navigate to home page top
  const goToHome = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  // Classes for the container: defines the hover area and groups it.
  const hover_container =
    'group col-span-1 flex justify-center items-center cursor-pointer';

  // Classes for the text: creates the underline and makes it appear on group-hover.
  const underline_on_group_hover =
    "relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:-bottom-1 after:left-0 after:origin-center after:scale-x-0 after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100";

  return (
    <div className="bg-blackish grid grid-cols-12 gap-4 h-16 w-screen px-8 text-white border-b-3 border-white border-dashed ">
      {/* Left side name and img */}
      <div
        className="col-span-2 flex items-center cursor-pointer"
        onClick={goToHome}
      >
        <img src={favicon} className="h-12 w-12 mr-4" alt="Site favicon"></img>
        <BodyText size="large" weight="bold">
          Aditya Prabhu
        </BodyText>
      </div>

      {/* Space in between */}
      <div className="col-span-8"></div>

      {/* Shortcuts in right */}
      <div className="col-span-2 grid grid-cols-2 gap-4">
        <div
          className={hover_container}
          onClick={() => scrollToSection('projects')}
        >
          <BodyText
            size="large"
            weight="bold"
            className={underline_on_group_hover}
          >
            Projects
          </BodyText>
        </div>
        <div
          className={hover_container}
          onClick={() => scrollToSection('connect')}
        >
          <BodyText
            size="large"
            weight="bold"
            className={underline_on_group_hover}
          >
            Contact
          </BodyText>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
