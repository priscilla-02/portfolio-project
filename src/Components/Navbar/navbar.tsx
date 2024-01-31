import { useState } from 'react';
import { DarkModeToggle } from './darkmode';
import { useTheme } from '../../Hooks/themeHook';
import menuIcon from '../../../public/assets/icons/menu.svg';
import homeOutlineIcon from '../../../public/assets/icons/home-outline.svg';
import homeSolidIcon from '../../../public/assets/icons/home-solid.svg';
import projectOutlineIcon from '../../../public/assets/icons/projects-outline.svg';
import projectSolidIcon from '../../../public/assets/icons/projects-solid.svg';
import connectOutlineIcon from '../../../public/assets/icons/connect-outline.svg';
import connectSolidIcon from '../../../public/assets/icons/connect-solid.svg';

export default function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState<boolean>(false);
  const [isHomeHovered, setIsHomeHovered] = useState<boolean>(false);
  const [isProjectsHovered, setIsProjectsHovered] = useState<boolean>(false);
  const [isConnectHovered, setIsConnectHovered] = useState<boolean>(false);
  const [touchDelayTimeout, setTouchDelayTimeout] = useState<number | null>(
    null
  );
  const { toggleDarkMode, isDarkMode } = useTheme();

  const handleTouchStart = () => {
    setIsHomeHovered(true);

    const timeoutId = setTimeout(() => {
      setTouchDelayTimeout(null);
    }, 250);
    setTouchDelayTimeout(timeoutId);
  };

  const handleTouchEnd = () => {
    setIsHomeHovered(false);
    if (touchDelayTimeout !== null) {
      clearTimeout(touchDelayTimeout);
      setTouchDelayTimeout(null);
    }
  };

  return (
    <div
      className={`h-auto pb-20 ${expandNavbar ? '' : ''} ${
        isDarkMode ? 'bg-slate-500' : 'bg-white'
      }`}
    >
      <div className="w-full h-24 flex items-center justify-between">
        <div className="ml-12 py-3 h-18 align-middle select-none transition duration-200 ease-in">
          <button
            onClick={() => {
              toggleDarkMode();
            }}
          >
            <DarkModeToggle />
          </button>
        </div>
        <div className="mr-8">
          <button
            onClick={() => {
              setExpandNavbar(prev => !prev);
            }}
            className="mr-5 cursor-pointer block desktop:hidden"
          >
            <div className="w-10 h-10">
              <img src={menuIcon} alt="Menu Icon" />
            </div>
          </button>
        </div>
      </div>

      <nav
        className={`w-full h-full my-20 flex items-center justify-center  ${
          expandNavbar ? 'flex-col justify-start mt-24' : 'hidden'
        }`}
      >
        <div className="flex-col">
          <div
            className="flex justify-center items-center align-center"
            onMouseEnter={() => setIsHomeHovered(true)}
            onMouseLeave={() => setIsHomeHovered(false)}
          >
            <img
              src={isHomeHovered ? homeSolidIcon : homeOutlineIcon}
              alt="Home Icon"
              className="w-12 h-12"
            />
            <a
              href="#aboutme"
              className={`w-full text-center text-3xl ${
                expandNavbar ? 'w-full text-center m-8' : 'hidden'
              }`}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onClick={() => {
                setExpandNavbar(false);
              }}
              style={{
                fontFamily: 'rato',
              }}
            >
              Home
            </a>
          </div>
          <div
            className="flex justify-center items-center align-center"
            onMouseEnter={() => setIsProjectsHovered(true)}
            onMouseLeave={() => setIsProjectsHovered(false)}
          >
            <img
              src={isProjectsHovered ? projectSolidIcon : projectOutlineIcon}
              alt="Project Icon"
              className="w-12 h-12"
            />
            <a
              href="#projects"
              className={`w-full text-center text-3xl ${
                expandNavbar ? 'w-full text-center m-8' : 'hidden'
              }`}
              onTouchStart={() => setIsProjectsHovered(true)}
              onTouchEnd={() => setIsProjectsHovered(false)}
              onClick={() => {
                setExpandNavbar(false);
              }}
              style={{
                fontFamily: 'rato',
              }}
            >
              Projects
            </a>
          </div>
          <div
            className="flex justify-center items-center align-center"
            onMouseEnter={() => setIsConnectHovered(true)}
            onMouseLeave={() => setIsConnectHovered(false)}
          >
            <img
              src={isConnectHovered ? connectSolidIcon : connectOutlineIcon}
              className="w-12 h-12"
              alt="Connect Icon"
            />
            <a
              href="#connect"
              className={`w-full text-center text-3xl ${
                expandNavbar ? 'w-full text-center m-8' : 'hidden'
              }`}
              onTouchStart={() => setIsConnectHovered(true)}
              onTouchEnd={() => setIsConnectHovered(false)}
              onClick={() => {
                setExpandNavbar(false);
              }}
              style={{
                fontFamily: 'rato',
              }}
            >
              Connect
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
