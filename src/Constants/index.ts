import comingUpImage from '/assets/images/projects/Coming Up.png';
import claimAppImage from '/assets/images/projects/Claim Application.png';
import sqaureupImage from '/assets/images/projects/SquareUp.png';
import ncNewsImage from '/assets/images/projects/NC News.png';
import ncNewsApiImage from '/assets/images/projects/NC News API.png';
import jsSVG from '/assets/images/skills/languages/javascript.svg';
import tsSVG from '/assets/images/skills/languages/typescript.svg';
import reactSVG from '/assets/images/skills/frameworks/react.svg';
import reactNativeSVG from '/assets/images/skills/frameworks/reactnative.svg';
import vueSVG from '/assets/images/skills/frameworks/vue.svg';
import htmlSVG from '/assets/images/skills/frameworks/html.svg';
import cssSVG from '/assets/images/skills/frameworks/css.svg';
import tailwindSVG from '/assets/images/skills/frameworks/tailwind.svg';
import bootstrapSVG from '/assets/images/skills/frameworks/bootstrap.svg';
import firebaseSVG from '/assets/images/skills/frameworks/firebase.svg';
import nodeSVG from '/assets/images/skills/frameworks/node.svg';
import expressSVG from '/assets/images/skills/frameworks/express.svg';
import postgressqlSVG from '/assets/images/skills/frameworks/postgresql.svg';
import jestSVG from '/assets/images/skills/frameworks/jest.svg';
import postmanSVG from '/assets/images/skills/frameworks/postman.svg';
import styledComponentsSVG from '/assets/icons/styled-components.svg';

export const funFactsAboutMe: string[] = [
  '⭐ I am trilingual excluding programming langauages',
  '🍣 Daily cravings of sushi guaranteed',
  '📺 Friends fanatic for endless laughs & timeless camaraderie',
  '🎮 Conquering the culinary chaos of "Overcooked"',
];

export const languagesIconArray: string[] = [jsSVG, tsSVG];

export const frameworksArrayIcon: string[] = [
  reactSVG,
  reactNativeSVG,
  vueSVG,
  htmlSVG,
  cssSVG,
  tailwindSVG,
  bootstrapSVG,
  styledComponentsSVG,
  firebaseSVG,
  nodeSVG,
  expressSVG,
  postgressqlSVG,
  jestSVG,
  postmanSVG,
];

interface Project {
  project_name: string;
  description: string;
  tech_stack: string[];
  tech_stack_image: string[];
  codeURL: string;
  projectURL: string;
  project_image: string;
}

export const projectsArray: Project[] = [
  {
    project_name: 'Coming Up',
    description:
      'A recipe finder application that provides a diverse range of culinary options, also allows user to customise recipe search with multiple filter options. From cuisine to dietary preferences, user can effortlessly find the perfect recipe to suit their taste.',
    tech_stack: ['Vue', 'Javascript', 'Bootstrap'],
    tech_stack_image: [vueSVG, jsSVG, bootstrapSVG],
    codeURL: '',
    projectURL: '',
    project_image: comingUpImage,
  },
  {
    project_name: 'Claim Application',
    description:
      'This mobile screen (set to 600px) web application is a mock-up Claims Application that utilizes React for a seamless and responsive user interface, and Redux for efficient state management.',
    tech_stack: ['React', 'Typescript', 'Styled Components'],
    tech_stack_image: [reactSVG, tsSVG, styledComponentsSVG],
    codeURL: 'https://github.com/priscilla-02/Claim-App',
    projectURL: 'https://claim-application.netlify.app/',
    project_image: claimAppImage,
  },
  {
    project_name: 'SquareUp',
    description:
      'A mobile appplication that enables board game enthusiasts to connect with each other, join and host events. Users can instantly message others, discover new games, and locate nearby events on a map.',
    tech_stack: ['React Native', 'Firebase', 'Javascript'],
    tech_stack_image: [reactNativeSVG, firebaseSVG, jsSVG],
    codeURL: 'https://github.com/magnificent-angels/square-up',
    projectURL:
      'https://drive.google.com/file/d/1w4yHm1nqc0nBno0F_KjIfLEXcfv9tmRU/view',
    project_image: sqaureupImage,
  },
  {
    project_name: 'NC News',
    description:
      'A news application featuring current weather dashboard, sorting and ordering of articles by topic, author, popularity, etc., and user ability to select, sort, and order news articles for reading.',
    tech_stack: ['React', 'Javascript', 'Tailwind'],
    tech_stack_image: [reactSVG, jsSVG, tailwindSVG],
    codeURL: 'https://github.com/priscilla-02/nc-news',
    projectURL: 'https://nc-news-by-priscilla-c.netlify.app/',
    project_image: ncNewsImage,
  },
  {
    project_name: 'NC News API',
    description:
      'A REST API using TDD and following the MVC pattern. It serves up data such as articles, topics, comments on multiple endpoints, ultimately acting as the back end of a news web application.',
    tech_stack: ['Node.js', 'Express.js', 'PostgreSQL'],
    tech_stack_image: [nodeSVG, expressSVG, postgressqlSVG],
    codeURL: 'https://github.com/priscilla-02/news-server',
    projectURL: '',
    project_image: ncNewsApiImage,
  },
];
