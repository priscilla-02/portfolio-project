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
      project_name: 'squareup',
      description: 'mobile',
      tech_stack: ['1', '2', '3'],
    },
    {
      project_name: 'ncnews',
      description: 'lalal',
      tech_stack: ['1', '2', '3'],
    },
    {
      project_name: 'ncnewsapi',
      description: 'lalalalalalalal',
      tech_stack: ['1', '2', '3'],
    },
  ];

  return (
    <div>
      <div className="flex justify-center font-extrabold mt-40">Project</div>
      <div
        id="projects"
        className="m-10 relative cursor-pointer overflow-hidden flex-col justify-center items-center align-center flex"
      >
        {projectsArray.map(project => (
          <div
            className="container"
            onMouseOver={() => handleHover(project.project_name)}
            onMouseLeave={() => handleMouseLeave()}
          >
            <img
              key={project.project_name}
              src={`/src/assets/images/project-images/${project.project_name}.png`}
              className={`z-[-1] m-10 w-full h-full transition-all duration-1000 ease-in-out
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
              <div className="flex justify-center align-center items-center flex-col p-10 text-white">
                <div>{project.project_name}</div>
                <div>{project.description}</div>
              </div>
            </div>

            {/* bottom-text-box */}
            <div
              className={`absolute flex flex-col items-center justify-center align-center z-2 bottom-0 right-0 bg-gray transition-all duration-1000 ease-in-out ${
                isHovered === project.project_name
                  ? project.project_name === 'squareup'
                    ? 'opacity-80 w-[50%] h-[50%] backdrop-blur-xl'
                    : 'opacity-80 w-[30%] h-[30%] backdrop-blur-xl'
                  : 'opacity-0 w-[10%] h-[10%]'
              } `}
            >
              <div className="flex justify-center align-center items-center flex-col p-20 text-white">
                <div>Tech Stack:</div>
                {project.tech_stack.map(tech => (
                  <p>{tech}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
