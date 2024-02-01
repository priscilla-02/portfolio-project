import { useTheme } from '../../Hooks/themeHook';
import { frameworksArray, languagesArrayIcon } from '../../Constants';
import javascriptIcon from '/assets/images/skills/languages/javascript.svg';
import typescriptIcon from '/assets/images/skills/languages/typescript.svg';

export function Skills() {
  const { isDarkMode } = useTheme();

  return (
    <div
      id="skills"
      className={`desktop:pt-32 ${isDarkMode ? 'bg-slate-500' : 'bg-white'}`}
    >
      <section
        className="text-center text-4xl"
        style={{
          fontFamily: 'rato',
        }}
      >
        Skills Set
      </section>

      <section className="flex flex-col items-center justify-center p-10 text-2xl underline">
        <div
          style={{
            fontFamily: 'rato',
          }}
        >
          Languages
        </div>
        <div className="flex pr-2">
          {/* <p>map</p> */}
          {/* {languagesArray.map(image => (
            <img
              key={image}
              src={`../../../public/assets/images/skills/languages/${image}.svg`}
              alt={image}
              className="w-[50px] h-[50px] desktop:w-[120px] desktop:h-[120px] m-2"
            />
          ))} */}
          {/* {Test production env} */}
          <div>
            <div className="flex-col">
              <div className="flex">
                <p>map</p>
                {languagesArrayIcon.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Tech Stack Image ${index}`}
                    className="w-[50px] h-[50px] desktop:w-[120px] desktop:h-[120px] m-2"
                  />
                ))}
              </div>
              <div className="flex">
                <p>import icons</p>
                <img
                  className="desktop:w-[120px] desktop:h-[120px] m-2"
                  src={javascriptIcon}
                  alt="javascriptIcon"
                />
                <img
                  className="desktop:w-[120px] desktop:h-[120px] m-2"
                  src={typescriptIcon}
                  alt="typescriptIcon"
                />
              </div>
            </div>
            <div>
              <div className="flex">
                <p>test</p>
                <img
                  className="desktop:w-[120px] desktop:h-[120px] m-2"
                  src="https://skillicons.dev/icons?i=js,ts"
                  alt="languages icon url"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center py-5 text-2xl underline">
        <div
          style={{
            fontFamily: 'rato',
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
        <p>test</p>
        <img
          className="desktop:w-[45%] w-[60%] h-auto"
          src="https://skillicons.dev/icons?i=react,vue,html,css,firebase,tailwind,bootstrap,nodejs,express,postgres,jest,postman&perline=5&theme=light"
          alt="framworks icon url"
        />
      </section>
    </div>
  );
}
