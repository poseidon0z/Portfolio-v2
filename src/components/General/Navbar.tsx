import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import favicon from '/Favicon.svg';
import hamburgerMenu from '../../assets/Hamburger Menu.svg';
import BodyText from './BodyText';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Close mobile menu when resizing to desktop
      if (window.innerWidth >= 640) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  // Function to handle menu item clicks (close mobile menu after navigation)
  const handleMenuItemClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  // Classes for the container: defines the hover area and groups it.
  const hover_container =
    'group col-span-1 flex justify-center items-center cursor-pointer';

  // Classes for the text: creates the underline and makes it appear on group-hover.
  const underline_on_group_hover =
    "relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:-bottom-1 after:left-0 after:origin-center after:scale-x-0 after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100";

  return (
    <div className="bg-blackish relative">
      {/* Main Navbar */}
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 h-16 w-screen px-8 text-white border-b-3 border-white border-dashed">
        {/* Left side name and img */}
        <div
          className="col-span-3 md:col-span-2 lg:col-span-2 flex items-center cursor-pointer"
          onClick={goToHome}
        >
          <img
            src={favicon}
            className="h-12 w-12 mr-4"
            alt="Site favicon"
          ></img>
          <BodyText size="large" weight="bold">
            Aditya Prabhu
          </BodyText>
        </div>

        {/* Space in between - only visible on desktop */}
        <div className="hidden md:block md:col-span-4 lg:col-span-8"></div>

        {/* Desktop Navigation - only visible on desktop */}
        <div className="hidden md:grid md:col-span-2 lg:col-span-2 md:grid-cols-2 gap-4">
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

        {/* Mobile Hamburger Menu Button - only visible on mobile */}
        <div className="col-span-1 md:hidden flex items-center justify-end">
          <button
            onClick={toggleMobileMenu}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <img src={hamburgerMenu} className="h-6 w-6" alt="Menu" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-blackish border-b-3 border-white border-dashed z-50">
          <div className="flex flex-col py-4 px-8 gap-4">
            <div
              className="cursor-pointer py-2 hover:text-seaweed transition-colors"
              onClick={() => handleMenuItemClick('projects')}
            >
              <BodyText size="large" weight="bold">
                Projects
              </BodyText>
            </div>
            <div
              className="cursor-pointer py-2 hover:text-seaweed transition-colors"
              onClick={() => handleMenuItemClick('connect')}
            >
              <BodyText size="large" weight="bold">
                Contact
              </BodyText>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
