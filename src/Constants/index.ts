import comingUpImage from '/assets/images/projects/Coming Up.png';
// import sqaureupImage from '/assets/images/projects/SquareUp.png';
// import ncNewsImage from '/assets/images/projects/NC News.png';
// import ncNewsApiImage from '/assets/images/projects/NC News API.png';
import vueSVG from '/assets/images/skills/frameworks/vue.svg';
import jsSVG from '/assets/images/skills/languages/javascript.svg';
import bootstrapSVG from '/assets/images/skills/frameworks/bootstrap.svg';

export const funFactsAboutMe: string[] = [
  '⭐ I am trilingual excluding programming langauages',
  '🍣 Daily cravings of sushi guaranteed',
  '📺 Friends fanatic for endless laughs & timeless camaraderie',
  '🎮 Conquering the culinary chaos of "Overcooked"',
];

export const languagesArray: string[] = ['javascript', 'typescript'];

export const frameworksArray: string[] = [
  'react',
  'reactnative',
  'vue',
  'html',
  'css',
  'tailwind',
  'bootstrap',
  'node',
  'express',
  'firebase',
  'postgresql',
  'postman',
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
    tech_stack_image: [
      vueSVG,
      jsSVG,
      bootstrapSVG,
      'https://skillicons.dev/icons?i=bootstrap&theme=dark',
    ],
    codeURL: 'https://nc-news-by-priscilla-c.netlify.app/',
    projectURL: 'https://github.com/priscilla-02/nc-news',
    project_image: comingUpImage,
  },
  // {
  //   project_name: 'SquareUp',
  //   description:
  //     'A mobile appplication that enables board game enthusiasts to connect with each other, join and host events. Users can instantly message others, discover new games, and locate nearby events on a map.',
  //   tech_stack: ['React Native', 'Firebase', 'Javascript'],
  //   codeURL: 'https://github.com/magnificent-angels/square-up',
  //   projectURL:
  //     'https://drive.google.com/file/d/1w4yHm1nqc0nBno0F_KjIfLEXcfv9tmRU/view',
  //   project_image: sqaureupImage,
  // },
  // {
  //   project_name: 'NC News',
  //   description:
  //     'A news application featuring current weather dashboard, sorting and ordering of articles by topic, author, popularity, etc., and user ability to select, sort, and order news articles for readin. The application also includes optimistic rendering, and conditional CSS rules.',
  //   tech_stack: ['React', 'Javascript', 'Tailwind'],
  //   codeURL: 'https://nc-news-by-priscilla-c.netlify.app/',
  //   projectURL: 'https://github.com/priscilla-02/nc-news',
  //   project_image: ncNewsImage,
  // },
  // {
  //   project_name: 'NC News API',
  //   description:
  //     'A REST API using TDD and following the MVC pattern. It serves up data such as articles, topics, comments on multiple endpoints, ultimately acting as the back end of a news web application.',
  //   tech_stack: ['Node.js', 'Express.js', 'PostgreSQL'],
  //   codeURL: 'https://github.com/priscilla-02/news-server',
  //   projectURL: '',
  //   project_image: ncNewsApiImage,
  // },
];
