import codingImageURL from '../../assets/images/aboutme/coding-image-url';

export function AboutMe() {
  return (
    <div className="flex-row justify-center text-center font-extrabold p-10 desktop:w-auto w-screen">
      <div className="flex flex-col desktop:flex-row justify-center align-center items-center">
        <div
          className="desktop:max-w-[60vw]"
          style={{
            fontFamily: 'rato',
            fontWeight: '100',
          }}
        >
          <div className="text-4xl pb-5">About Me :)</div>
          <div
            className="text-2xl"
            style={{
              fontFamily: 'quickSand',
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
        <img
          alt="Coding"
          src={codingImageURL}
          className="m-5 border-2 border-white p-2 rounded-full shadow-2xl"
        />
      </div>
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
