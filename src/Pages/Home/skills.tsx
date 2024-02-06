import { useTheme } from '../../Hooks/themeHook';
import { frameworksArrayIcon, languagesIconArray } from '../../Constants';

export function Skills() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`pt-32 desktop:pb-56 pb-32 ${
        isDarkMode ? 'bg-slate-500' : 'bg-gray-300'
      }`}
    >
      <section
        id="techStack"
        className="pt-10 text-center text-4xl"
        style={{
          fontFamily: 'rato',
        }}
      >
        Tech Stack
      </section>

      <section className="flex flex-col items-center justify-center p-10 text-3xl underline">
        <div
          className="desktop:pt-15 pb-3"
          style={{
            fontFamily: 'rato',
          }}
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
                    className="w-[50px] h-[50px] desktop:w-[100px] desktop:h-[100px] m-2"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center py-5 text-3xl underline">
        <div
          className="desktop:pt-15 pb-5"
          style={{
            fontFamily: 'rato',
          }}
        >
          Frameworks & Libraries
        </div>
        <div className="desktop:w-auto w-full flex flex-wrap pr-2 desktop:max-w-[50vw] items-center justify-center">
          {frameworksArrayIcon.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Tech Stack Image ${index}`}
              className="w-[50px] h-[50px] desktop:w-[100px] desktop:h-[100px] m-3"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
