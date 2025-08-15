export const descriptions = {
  browserArcade: [
    'A classic Tic Tac Toe game developed in 7 days using HTML, CSS, and JavaScript.',
    'This interactive game allows two players to compete on the same computer, with customizable player names and colors.',
    'Features include hover previews, turn notifications, and game status updates (win, lose, or draw), with the ability to reset the game and track scores.',
    'The game includes animations and sound effects, which can be muted, and localStorage support allows users to resume their sessions after reloading the page or losing internet connection.',
  ],
  contemplate: ['', '', ''],
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
  huntingBuddy: [
    'A full-stack job application management platform designed to help users track their job search efficiently.',
    'Built with React, Vite, Node.js, Express, and MongoDB, the app features authentication with hashed passwords, input validation, and session management.',
    'Role-based access control distinguishes permissions between standard users and admins.',
    'Users can manage job applications via a responsive dashboard that includes advanced filtering, sorting, and data visualisation with Recharts. The responsive interface was created using styled-components and includes a light/dark theme toggle.',
    'The backend provides a RESTful API built with Express and Mongoose, supporting full CRUD functionality. Validation and error handling are managed using express-validator and custom middleware.',
    'Performance is optimised with React Query for efficient data fetching, along with lazy loading and route-based code splitting.',
  ],
  pawneePets: [
    'A fully responsive full-stack job board application developed in 10 days, utilizing a Rails API for the backend and a React-based frontend.',
    'Designed for freelance pet services, the platform allows users to create accounts and post job listings for dog walkers or pet sitters.',
    'Users can manage their listings, including viewing, editing, and deleting them, as well as update their account information and delete their accounts.',
  ],
  placebook: [
    "A full-stack MERN application enabling users to share and manage geo-tagged posts of places they've visited.",
    'Users can register, log in and generate posts with a title, description, image and address. Locations are geocoded from the address using the Google Maps API, and images are previewed with the FileReader API before being uploaded using Multer.',
    'Access is secured with JWT-based authentication, role-based access control and route protection enforced on both the client and server sides.',
    'Authentication state is managed globally with React Context, enabling dynamic rendering of protected routes and navigation elements.',
    'The React frontend features a responsive interface that is styled with SCSS and uses custom hooks for form handling and HTTP requests.',
    'The Express backend connects to MongoDB Atlas for persistent storage and provides a RESTful API with validation via express-validator and custom error handling.',
  ],
};

// export const overviews = {
//   browserArcade: ['Classic Tic Tac Toe game', '[HTML/CSS/JS]'],
//   flicks4brains: ['Film & TV watchlist SPA', '[React/Firestore/Firebase]'],
//   guestbook: ['Virtual Guestbook', '[MERN-stack]'],
//   huntingBuddy: ['Job Application Tracker', '[MERN-stack]'],
//   pawneePets: ['Pet Care Job Board', '[Rails/React]'],
//   placebook: ['Location-based Blogging Platform', '[MERN-stack]'],
// };

export const overviews = {
  browserArcade: {
    heading: 'Classic Tic Tac Toe Game',
    stack: '[HTML | CSS | JS]',
  },
  contemplate: {
    heading: 'ConTemplate',
    stack: '[Angular | Rails]',
  },
  flicks4brains: {
    heading: 'Film & TV watchlist SPA',
    stack: '[React | Firestore | Firebase]',
  },
  guestbook: { heading: 'Virtual Guestbook', stack: '[MERN-stack]' },
  huntingBuddy: { heading: 'Job Application Tracker', stack: '[MERN-stack]' },
  pawneePets: { heading: 'Pet Care Job Board', stack: '[Rails | React]' },
  placebook: {
    heading: 'Location-based Blogging Platform',
    stack: '[MERN-stack]',
  },
};
