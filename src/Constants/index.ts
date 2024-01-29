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
  codeURL: string;
  projectURL: string;
}

export const projectsArray: Project[] = [
  {
    project_name: 'comingup',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut pharetra sit amet aliquam id diam maecenas ultricies. Odio morbi quis commodo odio aenean sed adipiscing. Pharetra diam sit amet nisl suscipit. In fermentum posuere urna nec tincidunt.',
    tech_stack: ['Vue', 'Javascript', 'Bootstrap'],
    codeURL: 'https://nc-news-by-priscilla-c.netlify.app/',
    projectURL: 'https://github.com/priscilla-02/nc-news',
  },
  {
    project_name: 'squareup',
    description:
      'Lorem ipsum dol or sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut pharetra sit amet aliquam id diam maecenas ultricies. Odio morbi quis commodo odio aenean sed adipiscing. Pharetra diam sit amet nisl suscipit. In fermentum posuere urna nec tincidunt.',
    tech_stack: ['React Native', 'Firebase', 'Javascript'],
    codeURL: 'https://github.com/magnificent-angels/square-up',
    projectURL:
      'https://drive.google.com/file/d/1w4yHm1nqc0nBno0F_KjIfLEXcfv9tmRU/view',
  },
  {
    project_name: 'ncnews',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut pharetra sit amet aliquam id diam maecenas ultricies. Odio morbi quis commodo odio aenean sed adipiscing. Pharetra diam sit amet nisl suscipit. In fermentum posuere urna nec tincidunt.',
    tech_stack: ['React', 'Javascript', 'Tailwind'],
    codeURL: 'https://nc-news-by-priscilla-c.netlify.app/',
    projectURL: 'https://github.com/priscilla-02/nc-news',
  },
  {
    project_name: 'ncnewsapi',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut pharetra sit amet aliquam id diam maecenas ultricies. Odio morbi quis commodo odio aenean sed adipiscing. Pharetra diam sit amet nisl suscipit. In fermentum posuere urna nec tincidunt.',
    tech_stack: ['Node.js', 'Express.js', 'PostgreSQL'],
    codeURL: 'https://github.com/priscilla-02/news-server',
    projectURL: '',
  },
];
