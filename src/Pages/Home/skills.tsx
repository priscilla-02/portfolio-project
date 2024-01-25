// import { useState } from 'react';

export function Skills() {
  //   const [skillDisplay, setSkillDisplay] = useState<boolean>(false);
  const languagesArray = ['javascript', 'typescript'];
  const frameworksArray = [
    'react',
    'reactnative',
    'vue',
    'html',
    'css',
    'tailwind',
    'bootstrap',
    'node',
    'express',
    'firebase',
    'postgresql',
    'postman',
  ];
  return (
    <div id="skills" className="m-10">
      {/* <div onMouseEnter={() => setSkillDisplay(true)}>skills set</div>
      <div className={skillDisplay ? 'block' : 'hidden'}>JS</div> */}
      <div className="font-extrabold text-center">Skills Set</div>

      <div className="flex flex-col items-center justify-center">
        <div className="font-semibold">Languages:</div>
        <div className="flex pr-2">
          {languagesArray.map(image => (
            <img
              key={image}
              src={`/src/assets/images/skill-images/languages/${image}.svg`}
              alt={image}
              width="120"
              height="120"
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center my-4">
        <div className="font-semibold">Frameworks & Libraries: </div>
        <div className="flex flex-wrap pr-2 max-w-[50vw] items-center justify-center">
          {frameworksArray.map(image => (
            <img
              key={image}
              src={`/src/assets/images/skill-images/frameworks/${image}.svg`}
              alt={image}
              width="120"
              height="120"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
