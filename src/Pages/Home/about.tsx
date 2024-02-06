import { useState } from 'react';
import { useTheme } from '../../Hooks/themeHook';
import codingGIF from '../../../public/assets/images/aboutme/coding-gif';
import codingImg from '/assets/images/aboutme/coding-image.png';
import { funFactsAboutMe } from '../../Constants';
import rightArrowIcon from '/assets/icons/right-arrow.svg';

export function AboutMe() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { isDarkMode } = useTheme();

  const handleTouchEnd = () => {
    setTimeout(() => {
      setIsHovered(false);
    }, 10000);
  };

  return (
    <div
      className={`flex-row justify-center text-center desktop:p-36 desktop:w-auto w-screen ${
        isDarkMode ? 'bg-slate-500' : 'bg-white'
      }`}
    >
      <div className="flex flex-col desktop:flex-row justify-center align-center items-center desktop:pt-0 pt-16">
        <div className="desktop:max-w-[40vw] max-w-[80vw]">
          <header
            className="mask text-gradient desktop:text-8xl text-7xl font-bold pb-10 "
            style={{
              fontFamily: 'OliverKitchen',
            }}
          >
            PRISCILLA CHAN
          </header>
          <div
            className="text-xl desktop:py-15 desktop:pb-6 desktop:m-5"
            style={{
              fontFamily: 'rato',
            }}
          >
            Hey there! I have transitioned from a non-tech background to become
            a software developer. The journey has been challenging but exciting.
            While I have built various full-stack projects, my true passion lies
            in creating immersive front-end experiences.
          </div>
          <div className="desktop:mt-5 desktop:visible invisible">
            <div className="flex">
              <a
                href="#techStack"
                className="flex items-center text-lg bg-gradient-to-r from-sky-400 to-blue-800 hover:from-blue-400 hover:to-blue-900 text-white py-2 px-6 border-b-8 border-blue-700 hover:border-blue-500 rounded-full m-8 desktop:visible invisible"
                style={{
                  fontFamily: 'rato',
                  whiteSpace: 'nowrap',
                }}
              >
                Tech Stack
              </a>
              <a
                href="#projects"
                className="flex items-center text-lg bg-gradient-to-r from-sky-400 to-blue-800 hover:from-blue-400 hover:to-blue-900 text-white py-2 px-6 border-b-8 border-blue-700 hover:border-blue-500 rounded-full m-8 desktop:visible invisible"
                style={{
                  fontFamily: 'rato',
                }}
              >
                Projects
              </a>
              <a
                href="#connect"
                className="flex items-center text-lg bg-gradient-to-r from-sky-400 to-blue-800 hover:from-blue-400 hover:to-blue-900 text-white py-2 px-6 border-b-8 border-blue-700 hover:border-blue-500 rounded-full m-8 desktop:visible invisible"
                style={{
                  fontFamily: 'rato',
                }}
              >
                Connect
              </a>
            </div>
          </div>
        </div>

        <section
          className="image-container relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={handleTouchEnd}
          style={{
            fontFamily: 'rato',
          }}
        >
          <img
            src={isHovered ? codingImg : codingGIF}
            alt={
              isHovered
                ? 'Image of a kitten coding on a laptop'
                : 'GIF of a kitten coding on a laptop'
            }
            className={`desktop:m-5 desktop:mt-0 mt-5 border-2 border-gray-400 p-2.5 rounded-full cursor-pointer desktop:w-[400px] desktop:h-[400px] w-[300px] h-[300px] ${
              isHovered
                ? 'rotate-out filter-effect blur-md ring-inset ring-[4px] ring-blue-400'
                : 'rotate-in'
            }`}
          />

          <div
            className={`absolute top-0 left-0 right-0 bottom-0 m-auto flex flex-col items-center justify-center text-blue-500 desktop:text-2xl text-base font-thin desktop:max-w-[80%] max-w-[60%] ${
              isHovered
                ? 'visible transition-all duration-5000 ease-in-out text-opacity-100'
                : 'hidden text-opacity-0'
            }`}
          >
            {funFactsAboutMe.map(fact => (
              <p key={fact}>{fact}</p>
            ))}
          </div>
          <div
            className={`flex justify-center items-center text-sm ${
              isHovered ? 'invisible' : 'visible'
            }`}
          >
            <p>Flip to know a little more about me</p>
            <img src={rightArrowIcon} className="w-6 h-6" />
          </div>
        </section>
      </div>
    </div>
  );
}
