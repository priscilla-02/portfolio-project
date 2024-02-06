import { useState } from 'react';
import { useTheme } from '../../Hooks/themeHook';
import { projectsArray } from '../../Constants';
import { useMediaQuery } from 'react-responsive';

export function Projects() {
  const [isHovered, setIsHovered] = useState<null | string>(null);
  const { isDarkMode } = useTheme();
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const handleProjectEnter = (projectName: string) => {
    setIsHovered(projectName);
  };

  const handleProjectLeave = () => {
    setIsHovered(null);
  };

  return (
    <div
      id="projects"
      className={`pt-10
       ${isDarkMode ? 'bg-slate-500' : 'bg-gray-300'}`}
    >
      <section
        className="flex justify-center text-4xl"
        style={{
          fontFamily: 'rato',
        }}
      >
        Projects
      </section>
      <div className="relative cursor-zoom-in flex-col justify-center items-center align-center flex desktop:m-0 p-4">
        <div></div>
        {projectsArray.map(project => (
          <div
            className="container m-16"
            onMouseOver={() => handleProjectEnter(project.project_name)}
            onMouseLeave={() => handleProjectLeave()}
          >
            <img
              key={project.project_image}
              src={project.project_image}
              className={`z-[-1] w-full h-full transition-all duration-1000 ease-in-out
              ${
                project.project_name === 'SquareUp' &&
                ' w-[50vw] max-h-[600px] object-contain'
              } 
              ${isHovered === project.project_name ? 'blur-sm' : ''}`}
              alt={`${project.project_name} project`}
            />

            {/* top-text-box */}
            <div
              className={`absolute flex flex-col items-center justify-center align-center z-2 top-0 left-0 bg-gray transition-all duration-1000 ease-in-out ${
                isHovered === project.project_name
                  ? project.project_name === 'SquareUp'
                    ? 'opacity-80 desktop:w-[60%] desktop:h-[60%] w-[55%] h-[45%] backdrop-blur-xl'
                    : 'opacity-80 desktop:w-[60%] desktop:h-[60%] w-[60%] h-[90%] backdrop-blur-xl'
                  : 'opacity-0 w-[10%] h-[10%]'
              }`}
            >
              <section
                className={`flex justify-center align-center items-center flex-col px-2
                 ${
                   project.project_name === 'Coming Up'
                     ? 'text-sky-500'
                     : 'text-white'
                 }`}
                style={{
                  fontFamily: 'rato',
                }}
              >
                <div
                  className="underline"
                  style={{
                    fontSize: isDesktop ? '1.5rem' : '0.7rem',
                  }}
                >
                  {project.project_name}
                </div>
                <div style={{ fontSize: isDesktop ? '1.5rem' : '0.7rem' }}>
                  {project.description}
                </div>
                <div className="flex desktop:mt-5 mt-2">
                  {project.project_name === 'Coming Up' ? (
                    <p
                      className="bg-gray-500 text-sky-500 font-bold desktop:py-2 py-1 desktop:px-4 px-2 border-b-4 border-gray-600 rounded-full"
                      style={{
                        fontSize: isDesktop ? '1.5rem' : '0.5rem',
                      }}
                    >
                      Stay Tuned :)
                    </p>
                  ) : (
                    <div className="flex">
                      <div>
                        <a
                          href={project.codeURL}
                          target="_blank"
                          className="flex"
                        >
                          <div className="flex bg-gradient-to-r from-sky-400 to-blue-800 hover:from-blue-400 hover:to-blue-900 text-white font-bold desktop:py-2 py-1 desktop:px-4 px-1 border-b-4 border-blue-700 hover:border-blue-500 rounded-full mx-2">
                            <svg
                              className="desktop:w-7 desktop:h-7 w-3 h-3"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z"
                                clipRule="evenodd"
                              />
                              <path
                                fillRule="evenodd"
                                d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <div
                              className="deesktop:mx-2 mx-1"
                              style={{
                                fontSize: isDesktop ? '1.2rem' : '0.5rem',
                              }}
                            >
                              Code
                            </div>
                          </div>
                        </a>
                      </div>
                      {project.project_name !== 'NC News API' && (
                        <div>
                          <a
                            href={project.projectURL}
                            target="_blank"
                            className="flex"
                          >
                            <div className="flex bg-gradient-to-r from-sky-400 to-blue-800 hover:from-blue-400 hover:to-blue-900 text-white font-bold desktop:py-2 py-1 desktop:px-4 px-1 border-b-4 border-blue-700 hover:border-blue-500 rounded-full mx-2">
                              <svg
                                className="desktop:w-7 desktop:h-7 w-3 h-3"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z"
                                  clipRule="evenodd"
                                />
                                <path
                                  fillRule="evenodd"
                                  d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <div
                                className="deesktop:mx-2 mx-1"
                                style={{
                                  fontSize: isDesktop ? '1.2rem' : '0.5rem',
                                }}
                              >
                                Project
                              </div>
                            </div>
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </section>
            </div>
            {/* bottom-text-box */}
            <div
              className={`absolute flex flex-col items-center justify-center align-center z-2 bottom-0 right-0 bg-gray transition-all duration-1000 ease-in-out
              } ${
                isHovered === project.project_name
                  ? project.project_name === 'SquareUp'
                    ? 'opacity-80 desktop:w-[30%] desktop:h-[50%] w-[40%] h-[30%] backdrop-blur-xl'
                    : 'opacity-80 w-[35%] h-[55%] backdrop-blur-xl'
                  : 'opacity-0 w-[10%] h-[10%]'
              }`}
            >
              <section
                className={`w-full flex flex-col align-center items-center desktop:p-20 desktop:mr-20 ${
                  project.project_name === 'Coming Up'
                    ? 'text-black'
                    : 'text-white'
                }`}
              >
                {project.tech_stack_image.map((image, index) => (
                  <div
                    key={index}
                    className="w-full flex items-center my-2 pl-4"
                  >
                    <img
                      src={image}
                      alt={image}
                      className={`flex desktop:w-[60px] desktop:h-[60px] h-[20px] w-[7vw] desktop:m-2 desktop:ml-10 
                      ${
                        project.project_name === 'NC News API' && 'bg-gray-300'
                      }`}
                    />
                    <span
                      className="ml-3"
                      style={{
                        fontFamily: 'rato',
                        fontSize: isDesktop ? '1.5rem' : '0.5rem',
                      }}
                    >
                      {project.tech_stack[index]}
                    </span>
                  </div>
                ))}
              </section>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
