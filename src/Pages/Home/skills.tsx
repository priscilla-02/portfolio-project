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
    <div id="skills" className="desktop:m-10">
      {/* <div onMouseEnter={() => setSkillDisplay(true)}>skills set</div>
      <div className={skillDisplay ? 'block' : 'hidden'}>JS</div> */}
      <div
        className="text-center"
        style={{
          fontFamily: 'rato',
          fontWeight: '100',
          fontSize: '40px',
        }}
      >
        Skills Set
      </div>

      <div className="flex flex-col items-center justify-center m-10">
        <div
          style={{
            fontFamily: 'rato',
            fontWeight: '100',
            fontSize: '26px',
            textDecoration: 'underline',
          }}
        >
          Languages
        </div>
        <div className="flex pr-2">
          {languagesArray.map(image => (
            <img
              className="w-[50px] h-[50px] desktop:w-[120px] desktop:h-[120px] m-2"
              key={image}
              src={`/src/assets/images/skills/languages/${image}.svg`}
              alt={image}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center my-4">
        <div
          style={{
            fontFamily: 'rato',
            fontWeight: '100',
            fontSize: '26px',
            textDecoration: 'underline',
          }}
        >
          Frameworks & Libraries
        </div>
        <div className="desktop:w-auto w-full flex flex-wrap pr-2 desktop:max-w-[50vw] items-center justify-center">
          {frameworksArray.map(image => (
            <img
              key={image}
              src={`/src/assets/images/skills/frameworks/${image}.svg`}
              alt={image}
              className="w-[50px] h-[50px] desktop:w-[120px] desktop:h-[120px] m-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
