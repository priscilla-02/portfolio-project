import { useState } from 'react';

export function Projects() {
  const [isHovered, setIsHovered] = useState<null | string>(null);

  const handleHover = (projectName: string) => {
    setIsHovered(projectName);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  const projectsArray = [
    {
      project_name: 'comingup',
      description: 'WIP',
      tech_stack: ['Vue', 'Javascript', 'Bootstrap'],
      codeURL: 'https://nc-news-by-priscilla-c.netlify.app/',
      projectURL: 'https://github.com/priscilla-02/nc-news',
    },
    {
      project_name: 'squareup',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut pharetra sit amet aliquam id diam maecenas ultricies. Odio morbi quis commodo odio aenean sed adipiscing. Pharetra diam sit amet nisl suscipit. In fermentum posuere urna nec tincidunt.',
      tech_stack: ['React Native', 'Firebase', 'Javascript'],
      codeURL: 'https://github.com/magnificent-angels/square-up',
      projectURL:
        'https://drive.google.com/file/d/1w4yHm1nqc0nBno0F_KjIfLEXcfv9tmRU/view',
    },
    {
      project_name: 'ncnews',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut pharetra sit amet aliquam id diam maecenas ultricies. Odio morbi quis commodo odio aenean sed adipiscing. Pharetra diam sit amet nisl suscipit. In fermentum posuere urna nec tincidunt.',
      tech_stack: ['React', 'Javascript', 'Tailwind'],
      codeURL: 'https://nc-news-by-priscilla-c.netlify.app/',
      projectURL: 'https://github.com/priscilla-02/nc-news',
    },
    {
      project_name: 'ncnewsapi',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut pharetra sit amet aliquam id diam maecenas ultricies. Odio morbi quis commodo odio aenean sed adipiscing. Pharetra diam sit amet nisl suscipit. In fermentum posuere urna nec tincidunt.',
      tech_stack: ['Node.js', 'Express.js', 'PostgreSQL'],
      codeURL: 'https://github.com/priscilla-02/news-server',
      projectURL: '',
    },
  ];

  const formatTechName = (tech: string) => {
    return tech.toLowerCase().replace(/[ .]|js$/g, '');
  };

  return (
    <div>
      <div className="flex justify-center font-extrabold mt-40">Project</div>
      <div
        id="projects"
        className="m-10 relative cursor-pointer overflow-hidden flex-col justify-center items-center align-center flex"
      >
        {projectsArray.map(project => (
          <div
            className="container m-10"
            onMouseOver={() => handleHover(project.project_name)}
            onMouseLeave={() => handleMouseLeave()}
          >
            <img
              key={project.project_name}
              src={`/src/assets/images/projects/${project.project_name}.png`}
              className={`z-[-1] w-full h-full transition-all duration-1000 ease-in-out
              ${
                project.project_name === 'squareup' &&
                ' w-[50vw] max-h-[600px] object-contain'
              } 
              ${isHovered === project.project_name ? 'blur-sm' : ''}`}
              alt={`${project.project_name} project`}
            />

            <div
              className={`absolute flex flex-col items-center justify-center align-center z-2 top-0 left-0 bg-gray transition-all duration-1000 ease-in-out ${
                isHovered === project.project_name
                  ? 'opacity-80 w-[50%] h-[50%] backdrop-blur-xl'
                  : 'opacity-0 w-[10%] h-[10%]'
              }`}
            >
              {/* top-text-box */}
              <div
                className={`flex justify-center align-center items-center flex-col p-10 ${
                  project.project_name === 'comingup'
                    ? 'text-black'
                    : 'text-white'
                }`}
              >
                <div>{project.project_name}</div>
                <div>{project.description}</div>

                <div className="mt-5">
                  {project.project_name === 'comingup' ? (
                    <p className="bg-gray-500 text-white font-bold py-2 px-4 border-b-4 border-gray-600 rounded m-5">
                      Stay Tuned :)
                    </p>
                  ) : (
                    <div>
                      <a
                        href={project.codeURL}
                        target="_blank"
                        className="bg-gradient-to-r from-sky-400 to-blue-800 hover:from-blue-400 hover:to-blue-900 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-5"
                      >
                        Code
                      </a>
                      <a
                        href={project.projectURL}
                        target="_blank"
                        className="bg-gradient-to-r from-sky-400 to-blue-800 hover:from-blue-400 hover:to-blue-900 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-5"
                      >
                        Project
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* bottom-text-box */}
            <div
              className={`absolute flex flex-col items-center justify-center align-center z-2 bottom-0 right-0 bg-gray transition-all duration-1000 ease-in-out ${
                isHovered === project.project_name
                  ? project.project_name === 'squareup'
                    ? 'opacity-80 w-[30%] h-[50%] backdrop-blur-xl'
                    : 'opacity-80 w-[30%] h-[50%] backdrop-blur-xl'
                  : 'opacity-0 w-[10%] h-[10%]'
              } `}
            >
              <div
                className={`flex justify-center align-center items-center flex-col p-20 mr-20 ${
                  project.project_name === 'comingup'
                    ? 'text-black'
                    : 'text-white'
                }`}
              >
                <div>Tech Stack:</div>
                {project.tech_stack.map(tech => (
                  <div key={tech} className="flex">
                    {formatTechName(tech) === 'javascript' ||
                    formatTechName(tech) === 'typescript' ? (
                      <img
                        src={`src/assets/images/skills/languages/${formatTechName(
                          tech
                        )}.svg`}
                        alt={tech}
                        className="w-[60px] h-[60px] m-2"
                      />
                    ) : (
                      <img
                        src={`src/assets/images/skills/frameworks/${formatTechName(
                          tech
                        )}.svg`}
                        alt={tech}
                        className={`w-[60px] h-[60px] m-2 ${
                          project.project_name === 'ncnewsapi'
                            ? 'bg-gray-300'
                            : ''
                        }`}
                      />
                    )}
                    <p className="flex justify-center items-center mx-5">
                      {tech}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
