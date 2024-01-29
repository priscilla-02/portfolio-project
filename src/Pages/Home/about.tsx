import { useState } from 'react';
// import { DarkModeToggle } from './darkmode';
import { useTheme } from '../../Hooks/themeHook';
import codingGIF from '../../assets/images/aboutme/coding-gif';

export function AboutMe() {
  const [isHovered, setIsHovered] = useState(false);
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`flex-row justify-center text-center p-10 desktop:w-auto w-screen ${
        isDarkMode ? 'bg-slate-500' : 'bg-white'
      } `}
    >
      <div className="flex flex-col desktop:flex-row justify-center align-center items-center">
        <div className="desktop:max-w-[60vw]">
          {/* <header
            className="mask text-7xl font-bold pb-5 px-10"
            style={{
              fontFamily: 'quicksand',
            }}
          >
            PRISCILLA CHAN
          </header>

          <header
            className="mask text-6xl font-bold pb-5 px-10"
            style={{
              fontFamily: 'rato',
            }}
          >
            PRISCILLA CHAN
          </header> */}

          <header
            className="mask text-gradient text-8xl font-bold pb-5 px-10"
            style={{
              fontFamily: 'OliverKitchen',
            }}
          >
            PRISCILLA CHAN
          </header>

          <div
            className="text-2xl"
            style={{
              fontFamily: 'quickSand',
              fontWeight: '800',
            }}
          >
            [quickSand] Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div
            className="text-2xl"
            style={{
              fontFamily: 'rato',
              fontWeight: '100',
            }}
          >
            [rato] Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>

        <div
          className="image-container relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            fontFamily: 'rato',
          }}
        >
          <img
            src={
              isHovered
                ? 'src/assets/images/aboutme/coding-image.png'
                : codingGIF
            }
            alt={
              isHovered
                ? 'Image of a kitten coding on a laptop'
                : 'GIF of a kitten coding on a laptop'
            }
            className={`m-5 border-2 border-gray-400 p-2.5 rounded-full cursor-pointer w-[400px] h-[400px] ${
              isHovered
                ? 'rotate-out filter-effect blur-md ring-inset ring-[4px] ring-blue-400'
                : 'rotate-in'
            }`}
          />

          <div
            className={`absolute top-0 left-0 right-0 bottom-0 m-auto flex flex-col items-center justify-center text-blue-600 text-3xl font-extrabold max-w-[85%] ${
              isHovered
                ? 'visible transition-all duration-5000 ease-in-out text-opacity-100'
                : 'hidden text-opacity-10'
            }`}
          >
            <p>Fun Facts:</p>
            <p>I am tringul</p>
            <p>I could eat suishi everyday</p>
            <p>"Friends" is my all-time favourite sitcom</p>
          </div>
          <div
            className={`flex justify-center items-center text-sm ${
              isHovered ? 'invisible' : 'visible'
            }`}
          >
            <p>Flip to know a little more about me</p>
            <img
              src="src/assets/icons/right-arrow.svg"
              className="w-6 h-6 ml-1"
            />
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="m-20 desktop:visible">
        <a
          href="#projects"
          className=" bg-gradient-to-r from-sky-400 to-blue-800 hover:from-blue-400 hover:to-blue-900 text-white py-4 px-6 border-b-8 border-blue-700 hover:border-blue-500 rounded-full m-5 desktop:visible invisible"
          style={{
            fontFamily: 'rato',
            fontWeight: '100',
            fontSize: '20px',
          }}
        >
          Projects
        </a>
        <a
          href="#skills"
          className="bg-gradient-to-r from-sky-400 to-blue-800 hover:from-blue-400 hover:to-blue-900 text-white font-bold py-4 px-8 border-b-8 border-blue-700 hover:border-blue-500 rounded-full m-5 desktop:visible invisible"
          style={{
            fontFamily: 'rato',
            fontWeight: '100',
            fontSize: '20px',
          }}
        >
          Skills
        </a>
      </div>
    </div>
  );
}
