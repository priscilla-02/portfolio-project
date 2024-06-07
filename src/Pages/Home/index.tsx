import { useTheme } from '../../Hooks/themeHook';
import { useEffect, useState } from 'react';
import { AboutMe } from './about';
import { Connect } from './connect';
import { Footer } from './footer';
import { Projects } from './projects';
import { Skills } from './skills';
import { Loading } from './loading';


function Home() {
  const { isDarkMode } = useTheme();
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 10000);
  });



  return (
    <div className={`${isDarkMode ? 'bg-slate-500' : 'bg-gray-300'}`}>
      {isLoading ? (
        <Loading setIsLoading={setIsLoading} />
      ) : (
        <div>
          <AboutMe />
          <Skills />
          <Projects />
          <Connect />
          <Footer />
        </div>
      )
      }
    </div >
  );
}

export default Home;
