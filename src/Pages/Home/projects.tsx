import { useState } from 'react';
import { useTheme } from '../../Hooks/themeHook';
import { projectsArray } from '../../Constants';
import { formatTechName } from '../../Utils/formatTechName';

export function Projects() {
  const [isHovered, setIsHovered] = useState<null | string>(null);
  const { isDarkMode } = useTheme();

  const handleProjectEnter = (projectName: string) => {
    setIsHovered(projectName);
  };

  const handleProjectLeave = () => {
    setIsHovered(null);
  };

  return (
    <div
      id="projects"
      className={`desktop:pt-32 pt-36 ${
        isDarkMode ? 'bg-slate-500' : 'bg-white'
      }`}
    >
      <section
        className="flex justify-center text-4xl"
        style={{
          fontFamily: 'rato',
        }}
      >
        Projects
      </section>
      <div className="relative cursor-zoom-in overflow-hidden flex-col justify-center items-center align-center flex">
        {projectsArray.map(project => (
          <div
            className="container m-16"
            onMouseOver={() => handleProjectEnter(project.project_name)}
            onMouseLeave={() => handleProjectLeave()}
          >
            <img
              key={project.project_name}
              src={`../../../public/assets/images/projects/${project.project_name}.png`}
              className={`z-[-1] w-full h-full transition-all duration-1000 ease-in-out
              ${
                project.project_name === 'SquareUp' &&
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
              <section
                className={`flex justify-center align-center items-center flex-col p-10 
                 ${
                   project.project_name === 'Coming Up'
                     ? 'text-black'
                     : 'text-white'
                 }`}
                style={{
                  fontFamily: 'rato',
                }}
              >
                <div className="underline py-5 desktop:text-xl text-sm">
                  {project.project_name}
                </div>
                <div>{project.description}</div>

                <div className="mt-5 flex">
                  {project.project_name === 'Coming Up' ? (
                    <p className="bg-gray-500 text-white font-bold py-2 px-4 border-b-4 border-gray-600 rounded-full desktop:text-xl text-sm">
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
                          <div className="flex bg-gradient-to-r from-sky-400 to-blue-800 hover:from-blue-400 hover:to-blue-900 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-full mx-2">
                            <svg
                              className="w-7 h-7"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z"
                                clip-rule="evenodd"
                              />
                              <path
                                fill-rule="evenodd"
                                d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            <div className="mx-2">Code</div>
                          </div>
                        </a>
                      </div>
                      <div>
                        <a
                          href={project.projectURL}
                          target="_blank"
                          className="flex"
                        >
                          <div className="flex bg-gradient-to-r from-sky-400 to-blue-800 hover:from-blue-400 hover:to-blue-900 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-full mx-2">
                            <svg
                              className="w-7 h-7"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z"
                                clip-rule="evenodd"
                              />
                              <path
                                fill-rule="evenodd"
                                d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            <div className="mx-2">Project</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            </div>

            {/* bottom-text-box */}
            <div
              className={`absolute flex flex-col items-center justify-center align-center z-2 bottom-0 right-0 bg-gray transition-all duration-1000 ease-in-out desktop:text-xl text-sm ${
                isHovered === project.project_name
                  ? project.project_name === 'SquareUp'
                    ? 'opacity-80 w-[30%] h-[50%] backdrop-blur-xl'
                    : 'opacity-80 w-[30%] h-[50%] backdrop-blur-xl'
                  : 'opacity-0 w-[10%] h-[10%]'
              }`}
              style={{
                fontFamily: 'rato',
              }}
            >
              <section
                className={`flex justify-center align-center items-center flex-col p-20 mr-20 ${
                  project.project_name === 'Coming Up'
                    ? 'text-black'
                    : 'text-white'
                }`}
              >
                {project.tech_stack.map(tech => (
                  <div key={tech} className="flex">
                    {formatTechName(tech) === 'javascript' ||
                    formatTechName(tech) === 'typescript' ? (
                      <img
                        src={`../../../public/assets/images/skills/languages/${formatTechName(
                          tech
                        )}.svg`}
                        alt={tech}
                        className="w-[60px] h-[60px] m-2"
                      />
                    ) : (
                      <img
                        src={`../../../public/assets/images/skills/frameworks/${formatTechName(
                          tech
                        )}.svg`}
                        alt={tech}
                        className={`w-[60px] h-[60px] m-2 ${
                          project.project_name === 'NC News API'
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
              </section>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
