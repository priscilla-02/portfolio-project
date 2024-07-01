import { useTheme } from '../../Hooks/themeHook';
import { frameworksArrayIcon, languagesIconArray } from '../../Constants';
import SphereTagCloud from './sphereTagCloud';

export function Skills() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`pt-32 desktop:pb-56 pb-32 ${isDarkMode ? 'bg-slate-500' : 'bg-gray-300'
        }`}
    >
      <div className="flex justify-center items-center desktop:pb-10">
        <div
          id="techStack"
          className="font-['rato'] pt-10 text-center text-4xl"
        >
          Tech Stack
        </div>
      </div>

      <div className="flex flex-col desktop:flex-row desktop:pr-32">
        <SphereTagCloud />

        <div className="flex flex-col items-center justify-center ">
          <section className="flex flex-col items-center justify-center p-10 text-3xl underline">
            <div
              className="font-['rato'] desktop:pt-15 pb-3"
            >
              Languages
            </div>
            <div className="flex pr-2">
              <div>
                <div className="flex-col">
                  <div className="flex">
                    {languagesIconArray.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Tech Stack Image ${index}`}
                        className="w-[50px] h-[50px] desktop:w-[80px] desktop:h-[80px] m-2"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col items-center justify-center py-5 text-3xl underline">
            <div
              className="font-['rato'] desktop:pt-15 pb-5"
            >
              Frameworks & Libraries
            </div>
            <div className="desktop:w-auto w-full flex flex-wrap pr-2 desktop:max-w-[50vw] items-center justify-center">
              {frameworksArrayIcon.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Tech Stack Image ${index}`}
                  className="w-[50px] h-[50px] desktop:w-[80px] desktop:h-[80px] m-3"
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
