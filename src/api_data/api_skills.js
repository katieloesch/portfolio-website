import tech from './api_technologies';

// Ids should be unique, use classes instead as icons get reused in modal??

const skills = [
  {
    title: 'Frontend',
    id: 0,
    className: 'frontend-skills',
    list: [
      tech.react,
      tech.angular,
      tech.vite,
      tech.javascript,
      tech.typescript,

      tech.sass,
      tech.css,
      tech.html,
      tech.bootstrap,
      tech.tailwind,
    ],
  },

  {
    title: 'Backend',
    id: 1,
    className: 'backend-skills',
    list: [tech.nodejs, tech.express, tech.ruby, tech.rails],
  },
  {
    title: 'Databases / Data Management',
    id: 2,
    className: 'db-skills',
    list: [
      tech.mongodb,
      tech.postgresql,
      tech.mongoose,
      tech.firebase,
      tech.firestore,
    ],
  },
  // {
  //   title: 'Development Tools',
  //   id: 3,
  //   className: 'devtools-skills',
  //   list: [tech.git, tech.github, tech.postman, tech.vite],
  // },
  {
    title: 'Currently Learning',
    id: 4,
    className: 'learning-skills',
    list: [tech.python, tech.linux, tech.go],
  },
];

export { skills };
