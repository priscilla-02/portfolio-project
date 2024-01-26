import codingImageURL from '../../assets/images/aboutme/coding-image-url';

export function AboutMe() {
  return (
    <div className="flex-row justify-center text-center font-extrabold p-10 desktop:w-auto w-screen">
      <div className="flex flex-col desktop:flex-row justify-center align-center items-center">
        <div className="desktop:max-w-[60vw]">
          <div> About Me :)</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <img
          alt="Coding"
          src={codingImageURL}
          className="m-5 border-2 border-white p-2 rounded-full"
        />
      </div>
      <div className="m-10 hidden desktop:visible">
        <a
          href="#projects"
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-5 desktop:visible invisible"
        >
          Projects
        </a>
        <a
          href="#skills"
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-5 desktop:visible invisible"
        >
          Skills
        </a>
      </div>
    </div>
  );
}
