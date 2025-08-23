// import { aIcons as icons } from './../assets/icons/icons_about';
import { aboutIcons as icons } from './../assets/icons/icons_about';
import {
  aboutImages,
  aboutImages as images,
} from '../assets/images/about_images';
import { author } from './api_author';

const location = `I'm currently based in ${
  author?.locationCity ?? 'London'
} but love any excuse to travel and explore new places.`;

const intro = {
  txt: [
    // `I'm a ${author?.jobTitle ?? 'full-stack developer'} with a background in ${
    //   author?.background ?? 'biomedical science and research.'
    // }.`,
    // "I'm always open to opportunities where I can contribute, learn, and grow.",
    "I'm a full-stack developer with a background in biomedical science and research. I'm passionate about API design and building scalable systems. I enjoy tackling real-world problems with clean, maintainable code and solutions that make technology more accessible and intuitive.",
    " I'm always keen to explore new technologies, frameworks and languages. Guided by a philosophy of collaboration, knowledge-sharing and continuous learning, I aim to contribute to projects where I can both grow and deliver impactful solutions.",
  ],
  locationTxt: location,
  icon: icons.location,
  iconAlt: 'map location pin',
  avatar: aboutImages.avatar,
};

const columnData = [
  {
    id: 0,
    class: 'about-column-background',
    title: 'background.',
    description:
      'With a degree in Biomedical Science, I gained practical experience with genetic databases and sequence comparison algorithms, which sparked my fascination with the software and computational tools driving innovation in healthcare and medical research and how they can improve diagnostics and transform patient care.',
    icon: icons.dnaG,
    iconClass: 'dna-icon',
    iconAlt: 'icon of a dna molecule',
    iconName: 'file-icons:dna',
    iconAuthor: 'iconify.design',
    iconUrl: 'https://icon-sets.iconify.design/file-icons/dna/',
    iconLicense: 'https://github.com/file-icons/icons/blob/master/LICENSE.md',
    // mobileIcon: icons.background.mobileSvg,
  },
  {
    id: 1,
    title: 'coding journey.',
    class: 'about-column-coding-journey',
    description:
      'My interest in iterative processes and how software can simplify and improve everyday life inspired me to complete the General Assembly’s Software Engineering Immersive. This allowed me to I built a strong foundation in both frontend and backend development, working across the full stack.',
    icon: icons.code2G,
    iconAlt: 'laptop code icon',
    iconClass: 'code-icon',
    iconName: 'fa-solid fa-laptop-code',
    iconAuthor: 'FontAwesome',
    iconUrl: 'https://fontawesome.com/icons/laptop-code?f=classic&s=solid',
    iconLicence: [
      'https://fontawesome.com/license/free',
      'https://creativecommons.org/licenses/by/4.0/',
    ],

    icon2: icons.codeG,
    icon2Alt: 'terminal shell icon',
    icon2Name: 'solar:programming-linear',
    icon2Author: 'iconify.design',
    icon2Url: 'https://icon-sets.iconify.design/solar/programming-linear/',
    iconLicense: 'https://creativecommons.org/licenses/by/4.0/',

    icon3: icons.code3G,
    icon3Alt: 'html code icon',
    icon3Name: 'fa-solid fa-code',
    icon3Author: 'FontAwesome',
    icon3Url: 'https://fontawesome.com/icons/code?f=classic&s=solid',
    icon3License: [
      'https://fontawesome.com/license/free',
      'https://creativecommons.org/licenses/by/4.0/',
    ],

    // mobileIcon: icons.codingJourney.mobileSvg,
  },
  {
    id: 2,
    title: 'interests.',

    class: 'about-column-interests',

    description:
      "I'm obsessed with touch typing and continually work on improving my speed and accuracy. Beyond coding, I'm a fan of science fiction. I enjoy how shows like Black Mirror and Star Trek managed to envision technologies such as video calls, credit cards, solar power, mobile phones and AI long before they became mainstream.",
    icon: icons.ufoG,
    iconClass: 'ufo-icon',
    iconAlt: 'ufo icon',
    iconName: 'solar:ufo-2-bold',
    iconAuthor: 'iconify.design',
    iconUrl: 'https://icon-sets.iconify.design/solar/ufo-2-bold/',
    iconLicense: 'https://creativecommons.org/licenses/by/4.0/',
    // mobileIcon: icons.interests.mobileSvg,
  },
];

const blogs = [
  {
    name: 'Techlore',
    className: 'techlore',
    id: 0,
    description: [
      'Techlore is a small but dedicated team focused on educating the public about digital rights, privacy, security, digital autonomy and related topics to help build a safer, more informed internet. They are deeply committed to digital rights education and privacy advocacy.',
      "Henry Fisher, the founder of Techlore, also serves as the marketing manager for Cake Wallet and co-hosts the Surveillance Report. With nearly a decade of experience, he has developed a range of resources aimed at improving people's understanding of technology and enhancing their digital safety.",
    ],
    website: 'https://www.techlore.tech/',
    github: 'https://github.com/techlore',
    blog: 'https://blog.techlore.tech/',
    forum: 'https://discuss.techlore.tech/',
    youtube: 'https://www.youtube.com/@techlore',
    linkedin: 'https://www.linkedin.com/company/techloreinc/',
    mastodon: 'https://social.lol/@techlore',
    podcast: 'https://open.spotify.com/show/1qjWVCYgRcZFL9c8FsLLo0',
    img: images.techlore,
    imgAlt: 'techlore logo',
  },
  {
    name: 'The New Oil',
    className: 'new-oil',
    id: 1,
    description: [
      'Nathan Bartram is the founder and editor of a project dedicated to making digital privacy and cybersecurity accessible to beginners and non-tech-savvy individuals. His mission is to educate readers on the importance of privacy and security, introduce the tools and techniques available to protect them and empower people to take control of their digital lives.',
      "The project emphasises that privacy and security are achievable goals for everyone. It aims to improve readers' digital well-being without compromising their mental health, emotional balance or professional and social lives.",
    ],
    website: 'https://thenewoil.org/en/',
    youtube: 'https://www.youtube.com/thenewoil',
    github: 'https://github.com/tnonate/thenewoil',
    blog: 'https://blog.thenewoil.org/',
    podcast: 'https://open.spotify.com/show/34JkJr5rzTQ7d1UZvUjfnJ',
    img: images.newOil,
    imgAlt: 'the new oil logo',
  },
  {
    name: 'Surveillance Report',
    className: 'sr',
    id: 2,
    description: [
      'Surveillance Report is a weekly news show presented by Techlore and The New Oil, delivering the latest updates on privacy and security.',
      'Its mission is to keep the world informed about current events in the digital privacy landscape, empowering individuals to stay safe with the most up-to-date information.',
    ],
    podcast: 'https://open.spotify.com/show/5rxm041iDXxe0rINwO5G0c',
    website: 'https://surveillancereport.tech/',
    github: '',
    blog: '',
    mastodon: 'https://social.lol/@sr',
    youtube: 'https://www.youtube.com/@surveillancereport',
    img: images.sr,
    imgAlt: 'surveillance report logo',
  },
  {
    name: 'Naomi Brockwell',
    className: 'nbtv',
    id: 3,
    description: [
      'Naomi Brockwell is a tech journalist and the creator of NBTV.media, a platform dedicated to helping people reclaim control over their lives in the digital age. Through accessible and empowering content, NBTV equips individuals with the knowledge and tools to protect their data, manage their digital finances and express themselves freely online.',
      'NBTV is a non-profit research and media institute that promotes human freedom through technology. Its mission is to educate the public on safeguarding fundamental rights in the digital era and to champion innovations that uphold privacy, personal autonomy and human dignity in the online world.',
    ],
    website: 'https://naomibrockwell.com/',
    youtube: 'https://youtube.com/naomibrockwelltv',
    newsletter: 'https://nbtv.substack.com/',
    img: images.nbtv,
    imgAlt: 'nbtv logo',
  },

  {
    name: 'Proton.me',
    className: 'proton',
    id: 4,
    description: [
      'Proton was founded in Switzerland in 2014 by a team of scientists who met at CERN (the European Organization for Nuclear Research). United by a shared vision, they set out to build a better internet: one where privacy is the default and people, not profits, come first.',
      "Proton's mission is to empower individuals to take control of their digital lives by creating a world where everyone can communicate freely, protect their data and identity, avoid surveillance and data exploitation and defend against cybercrime. Their services (including ProtonMail, ProtonCalendar, ProtonDrive and ProtonVPN) are built to make digital freedom a reality for all.",
      'The Proton.me Blog is the official source for news, insights and updates from Proton. It covers topics related to online privacy, digital security, and internet freedom, while also sharing product announcements, privacy tips and broader discussions about the importance of protecting personal information in the digital age.',
    ],
    blog: 'https://proton.me/blog',
    img: images.proton,
    imgAlt: 'proton logo',
  },
  {
    name: 'Academind',
    className: 'academind',
    id: '5',
    description: [
      'Academind is an online education platform offering video courses and tutorials on web development, programming and other tech topics.',
      'Known for its clear, in-depth explanations and practical teaching style, Academind makes complex concepts accessible to learners of all levels.',
      'The content is primarily delivered by founders and instructors Maximilian Schwarzmüller and Manuel Lorenz, both highly respected in the developer community.',
    ],
    website: 'https://academind.com/',
    github: 'https://github.com/academind',
    youtube: 'https://www.youtube.com/c/academind',
    podcast: 'https://academind.com/podcast',
    udemy: 'https://www.udemy.com/user/academind',
    linkedin: 'https://www.linkedin.com/school/academind-pro',
    img: images.academind,
    imgAlt: 'academind logo',
  },
  {
    name: 'ZTM',
    className: 'ztm',
    id: '6',
    description: [
      'Zero to Mastery (ZTM) is an online education platform founded by Andrei Neagoie, offering a wide range of courses including web development, data science, ethical hacking and machine learning. Known mainly for its video lessons and hands-on projects, ZTM ensures its content is regularly updated to reflect the latest industry trends and technologies.',
      'Beyond its courses, ZTM fosters a community-driven learning environment where students can collaborate, ask questions and support one another. The platform also extends its mission through blogs and newsletters that cover tech news, emerging tools, best practices and insights into productivity and work-life balance.',
    ],

    website: 'https://zerotomastery.io/',
    blog: 'https://zerotomastery.io/blog/',
    newsletter: 'https://zerotomastery.io/newsletters/',
    github: 'https://github.com/zero-to-mastery',
    youtube: 'https://www.youtube.com/c/ZeroToMastery',
    podcast: '',
    udemy: 'https://www.udemy.com/user/andrei-neagoie/',
    linkedin: 'https://www.linkedin.com/groups/12121940/',
    img: images.ztm,
    imgAlt: 'ztm logo',
  },
  {
    name: 'Coding Addict',
    className: 'coding-addict',
    id: '7',
    description: [
      'Jānis Smilga is a web developer, educator and founder of Coding Addict. He teaches project-based courses  on a wide range of topics including CSS, JavaScript, React, TypeScript and Next.js. He also shares practical tutorials, tips and industry insights on YouTube to help aspiring developers level up and build real-world skills.',
    ],

    website: 'https://www.codingaddict.io/',
    blog: 'https://johnsmilga.com/articles',
    github: 'https://github.com/john-smilga',
    youtube: 'https://www.youtube.com/c/CodingAddict',
    udemy: 'https://www.udemy.com/user/janis-smilga-3/',
    linkedin: 'https://www.linkedin.com/in/j%C4%81nis-smilga-659100177/',
    img: images.codingAddict,
    imgAlt: 'coding addict logo',
  },
  {
    name: 'Lama dev',
    className: 'lama-dev',
    id: '8',
    description: [
      'LamaDev is an online platform and YouTube channel offering web development tutorials, courses and resources for learners at all levels. It focuses on modern JavaScript technologies such as React.js, Next.js, Node.js and the MERN stack, while also providing inspiration and guidance in HTML, CSS and web design.',
      'Known for its practical approach, LamaDev helps developers build real-world projects and strengthen their coding skills through clear, accessible instruction.',
    ],
    website: 'https://lama.dev/',
    blog: 'https://blog.lama.dev/',
    newsletter: 'https://list.lama.dev/',
    github: 'https://github.com/safak',
    youtube: 'https://www.youtube.com/lamadev',
    img: images.lamadev,
    imgAlt: 'lamadev logo',
  },
];

const blogLinks = [
  'website',
  'blog',
  'podcast',
  'newsletter',
  'forum',
  'youtube',
  'github',
  'mastodon',
  'linkedin',
];

const aboutData = {
  location,
  intro,
  columnData,
  blogs,
  blogLinks,
};

export { aboutData };
