import { useContext, useEffect } from 'react';
import { AboutMe } from './about';
import { Connect } from './connect';
import { Footer } from './footer';
import { Projects } from './projects';
import { Skills } from './skills';
import { Loading } from './loading';
import { LoadingContext } from '../../Hooks/useContext';


function Home() {
  const { isLoading, setIsLoading } = useContext(LoadingContext)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 9000);
  });



  return (
    <>
      {isLoading ? (
        <div className="bg-gray-600">
          <Loading />
        </div >
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
    </>
  );
}

export default Home;
