import { AboutMe } from './about';
import { Contact } from './contact';
import { Footer } from './footer';
import { Projects } from './projects';
import { Skills } from './skills';

function Home() {
  return (
    <>
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
