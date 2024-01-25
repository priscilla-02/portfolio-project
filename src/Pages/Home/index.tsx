import { AboutMe } from './about';
import { Contact } from './contact';
import { Footer } from './footer';
import { Projects } from './projects';

import { Skills } from './skills';

function Home() {
  return (
    <div className="bg-slate-500">
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
