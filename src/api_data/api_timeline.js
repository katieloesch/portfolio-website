import { timelineImages } from '../assets/images/timeline_images';
const currentYear = new Date().getFullYear();

const timelineData = [
  // {
  //   id: 0,
  //   date: `2025 - `,
  //   title: 'Graduate Software Developer | Aveva',
  //   // company: '',
  //   img: timelineImages.aveva,
  //   style: { background: '#ffffff' },
  //   description: ['Graduate Software Engineer'],
  // },
  {
    id: 1,
    date: `2025 - ${currentYear === 2025 ? '' : currentYear}`,
    title: 'Graduate Software Developer | Aveva',
    // company: '',
    img: timelineImages.aveva,
    style: { background: '#ffffff' },
    description: [''],
  },
  {
    id: 2,
    date: `2023 - ${currentYear}`,
    title: 'Udemy',
    // company: '',
    img: timelineImages.udemy,
    style: { background: '#ffffff' },
    description: [
      'The Git & Github Bootcamp by Colt Steele',
      'MERN 2025: MongoDB, Express, React & NodeJS by John Smilga',
    ],
  },
  {
    id: 3,
    date: 'Mar 2023 - Jun 2023',
    title: 'Software Engineering Immersive | General Assembly',
    // company: '',
    img: timelineImages.ga,
    style: { background: '#ffffff' },
    description: [
      'Full-time bootcamp, frontend + backend fundamentals',
      'Full-stack applications with responsive design + deployment',
      'SQL + NoSQL databases, 3rd-party API integration',
      'solo + group projects, pair-programming, git/GitHub collabortation',
    ],
  },
  {
    id: 4,
    date: '2018 - 2020',
    title: 'Computing & IT | Open University',
    // company: '',
    img: timelineImages.ou,
    style: { background: '#ffffff' },
    description: ['Introduction to Computing and IT + Essential Mathematics'],
  },

  {
    id: 5,
    date: 'Jul 2016 - Sep 2016',
    title: 'Laboratory Internship | Luxembourg Institute of Health',
    // company: '',
    img: timelineImages.lih,
    style: { background: '#ffffff' },
    description: [
      'Dept. of Infection, Immunity & Human Biomonitoring Research',
      'Study of paramyxovirus/coronavirus shedding in bats and potential for inter-species transmission',
      'RNA extraction, purification, real-time PCR, gel electrophoresis',
    ],
  },
  {
    id: 6,
    date: 'Oct 2012 - Jun 2015',
    title: 'BSc in Biomedical Science | The University of Warwick',
    // company: '',
    img: timelineImages.warwick,
    style: { background: '#ffffff' },
    description: [
      'Key modules: Biostatistics, Genetics, Genomics, Molecular Biology, Microbiology, Virology',
    ],
  },
];

export { timelineData };
