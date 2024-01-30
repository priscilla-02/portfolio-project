import { useTheme } from '../../Hooks/themeHook';
import { frameworksArray, languagesArray } from '../../Constants';

export function Skills() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`${isDarkMode ? 'bg-slate-500' : 'bg-white'}`}>
      <div id="skills" className="desktop:p-40">
        <section
          className="text-center"
          style={{
            fontFamily: 'rato',
            fontWeight: '100',
            fontSize: '40px',
          }}
        >
          Skills Set
        </section>

        <section className="flex flex-col items-center justify-center p-10">
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
                key={image}
                src={`../../../public/assets/images/skills/languages/${image}.svg`}
                alt={image}
                className="w-[50px] h-[50px] desktop:w-[120px] desktop:h-[120px] m-2"
              />
            ))}
          </div>
        </section>

        <section className="flex flex-col items-center justify-center py-5">
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
                src={`../../../public/assets/images/skills/frameworks/${image}.svg`}
                alt={image}
                className="w-[50px] h-[50px] desktop:w-[120px] desktop:h-[120px] m-2"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
