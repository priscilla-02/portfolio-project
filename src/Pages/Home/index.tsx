import { AboutMe } from './about';
import { Connect } from './connect';
import { Footer } from './footer';
import { Projects } from './projects';
import { Skills } from './skills';

function Home() {
  return (
    <div>
      <AboutMe />
      <Skills />
      <Projects />
      <Connect />
      <Footer />
    </div>
  );
}

export default Home;
