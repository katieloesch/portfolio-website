export const descriptions = {
  huntingBuddy: [
    'A full-stack job tracking application built with React, Vite, Node.js, Express, and MongoDB.',
    'User Authentication: Secure registration and login with hashed passwords, input validation, and session handling.',
    'Role-Based Access Control: Distinct admin and user roles with protected routes and access permissions.',
    'Interactive Dashboard: Manage job applications with functionality to add, edit, delete, and view jobs. Includes filtering, sorting, and data visualisation using Recharts.',
    'Modern UI/UX: Responsive, modular design implemented with Styled-Components, featuring a light/dark theme toggle.',
    'Robust API: RESTful backend with full CRUD operations, built using Express and Mongoose for seamless MongoDB integration.',
    'Validation & Error Handling: Utilises Express-Validator for form validation and custom middleware for structured error responses.',
    'Performance Optimisation: Incorporates React Query for data fetching and caching, alongside lazy loading and optimised routing for improved UX.',
  ],
  jobBoard: [
    'A fully responsive full-stack job board application developed in 10 days, utilizing a Rails API for the backend and a React-based frontend.',
    'Designed for freelance pet services, the platform allows users to create accounts and post job listings for dog walkers or pet sitters.',
    'Users can manage their listings, including viewing, editing, and deleting them, as well as update their account information and delete their accounts.',
  ],
  flicks4brains: [
    'A single-page movie and TV watchlist application with full CRUD functionality, built in 8 days using ReactJS and SCSS.',
    "Users can add titles to 'watched' and 'to-watch' lists, mark them as watched, and edit or remove them from their lists.",
    "Clicking on a title's cover art reveals more detailed information, and users can add content from the public TMDB API.",
    'The updated version features a fully responsive design and integrates with Firestore/Firebase, enabling users to create accounts and save their data.',
  ],
  guestbook: [
    'A full-stack Guestbook application developed in 9 days by a team of four, using the MERN stack.',
    'The platform allows users to sign up, log in, edit their account details, and manage their guestbook entries.',
    'Authentication is handled via Node ExpressJS and Passport.js, ensuring secure user sessions.',
    "Users can post, edit, and delete comments, with the application's theme tailored around a unique event concept: a divorce party.",
  ],
  pomodoro: [
    'A to-do list application built with ReactJS, featuring full CRUD functionality.',
    'Users can add, edit, complete, and remove tasks, with the application displaying the total number of remaining tasks.',
    "Tasks are saved in the browser's localStorage, ensuring persistence after page reloads, and users can filter tasks by their completion status.",
    'State management is handled with Redux, and the application is styled using CSS modules for a fully responsive design.',
  ],
  browserArcade: [
    'A classic Tic Tac Toe game developed in 7 days using HTML, CSS, and JavaScript.',
    'This interactive game allows two players to compete on the same computer, with customizable player names and colors.',
    'Features include hover previews, turn notifications, and game status updates (win, lose, or draw), with the ability to reset the game and track scores.',
    'The game includes animations and sound effects, which can be muted, and localStorage support allows users to resume their sessions after reloading the page or losing internet connection.',
  ],
};

export const overviews = {
  huntingBuddy: ['Full-stack Job Application Tracker', '[MERN-stack]'],
  jobBoard: ['Full-stack job board', '[Rails/React]'],
  flicks4brains: ['Film & TV watchlist SPA', '[React/Firestore/Firebase]'],
  guestbook: ['Full-stack Guestbook app', '[MERN-stack]'],
  pomodoro: ['A to-do list application', '[React/Redux]'],
  browserArcade: ['Classic Tic Tac Toe game', '[HTML/CSS/JS]'],
};
