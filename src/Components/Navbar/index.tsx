import { useState } from 'react';
import { DarkModeToggle } from './darkmode';

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [isProjectsHovered, setIsProjectsHovered] = useState(false);
  const [isConnectHovered, setIsConnectHovered] = useState(false);

  return (
    <div
      className={`h-auto pb-20  ${expandNavbar ? '' : ''} ${
        isDarkMode ? 'bg-slate-600' : 'bg-white'
      }`}
    >
      <div className="w-full h-24 flex items-center justify-between">
        <div className="ml-8 py-3 h-18 align-middle select-none transition duration-200 ease-in">
          <button
            onClick={() => {
              setIsDarkMode(prev => !prev);
            }}
          >
            <DarkModeToggle
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
            />
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
              <img src="src/assets/icons/menu.svg" alt="Menu Icon" />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`w-full h-full my-20 flex items-center justify-center  ${
          expandNavbar ? 'flex-col justify-start mt-24' : 'hidden'
        }`}
      >
        <div>
          <div className="flex-col">
            <div
              className="flex justify-center items-center align-center"
              onMouseEnter={() => setIsHomeHovered(true)}
              onMouseLeave={() => setIsHomeHovered(false)}
            >
              <img
                src={`src/assets/icons/home-${
                  isHomeHovered ? 'solid' : 'outline'
                }.svg`}
                alt="Home Icon"
                className="w-12 h-12"
              />

              <a
                href="#aboutme"
                className={`w-full text-center  ${
                  expandNavbar ? 'w-full text-center m-8' : 'hidden'
                }`}
                onClick={() => {
                  setExpandNavbar(false);
                }}
                style={{
                  fontFamily: 'rato',
                  fontWeight: '800',
                  fontSize: '30px',
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
                src={`src/assets/icons/projects-${
                  isProjectsHovered ? 'solid' : 'outline'
                }.svg`}
                alt="Project Icon"
                className="w-12 h-12"
              />

              <a
                href="#projects"
                className={`w-full text-center  ${
                  expandNavbar ? 'w-full text-center m-8' : 'hidden'
                }`}
                onClick={() => {
                  setExpandNavbar(false);
                }}
                style={{
                  fontFamily: 'rato',
                  fontWeight: '800',
                  fontSize: '30px',
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
                src={`src/assets/icons/connect-${
                  isConnectHovered ? 'solid' : 'outline'
                }.svg`}
                className="w-12 h-12"
                alt="Connect Icon"
              />

              <a
                href="#connect"
                className={`w-full text-center  ${
                  expandNavbar ? 'w-full text-center m-8' : 'hidden'
                }`}
                onClick={() => {
                  setExpandNavbar(false);
                }}
                style={{
                  fontFamily: 'rato',
                  fontWeight: '800',
                  fontSize: '30px',
                }}
              >
                Connect with Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
