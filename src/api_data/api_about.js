import { aboutIcons as icons } from './../assets/icons/icons_about';
import { aboutImages as images } from '../assets/images/about_images';

const intros = [
  "Hi there! I'm Katie, a full-stack developer with a background in biomedical science, currently based in London.",
  "I'm always open to exciting job opportunities where I can contribute, learn, and grow.",
];

const abouts = [
  {
    title: 'background.',
    description:
      'As a biomedical science graduate, I gained hands-on experience working with genetic databases and sequence comparison algorithms. This sparked my interest in software and technology that drive innovation in healthcare and advance medical research.',
    icon: icons.background.svg,
    mobileIcon: icons.background.mobileSvg,
  },
  {
    title: 'coding journey.',
    description:
      "Driven by a passion for coding, I completed General Assembly's Software Engineering Immersive, where I built a solid foundation in programming fundamentals. I'm now excited to continue expanding my skills, explore new languages and frameworks, and contribute to meaningful, impactful projects.",
    icon: icons.codingJourney.svg,
    mobileIcon: icons.codingJourney.mobileSvg,
  },
  {
    title: 'interests.',
    description:
      "I'm fascinated by sci-fi books, movies, and TV shows—especially Star Trek and Black Mirror—for their uncanny ability to predict technological advancements long before they become mainstream. Innovations like video calls, mobile phones, wireless headphones, credit cards, solar power, and AI were all imagined in these stories long before they became everyday realities.",
    icon: icons.interests.svg,
    mobileIcon: icons.interests.mobileSvg,
  },
];

const media = [
  {
    name: 'Techlore',
    className: 'techlore',
    id: 0,
    description: [
      'Techlore is a small but dedicated team focused on educating the public about digital rights, privacy, security, digital autonomy, and related topics to help build a safer, more informed internet. They are deeply committed to digital rights education and privacy advocacy.',
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
    alt: 'techlore logo',
    bg: '',
  },
  {
    name: 'The New Oil',
    className: 'new-oil',
    id: 1,
    description: [
      'Nathan Bartram is the founder and editor of a project dedicated to making digital privacy and cybersecurity accessible to beginners and non-tech-savvy individuals. His mission is to educate readers on the importance of privacy and security, introduce the tools and techniques available to protect them, and empower people to take control of their digital lives.',
      "The project emphasizes that privacy and security are achievable goals for everyone. It aims to improve readers' digital well-being without compromising their mental health, emotional balance, or professional and social lives.",
    ],
    website: 'https://thenewoil.org/en/',
    youtube: 'https://www.youtube.com/thenewoil',
    github: 'https://github.com/tnonate/thenewoil',
    blog: 'https://blog.thenewoil.org/',
    podcast: 'https://open.spotify.com/show/34JkJr5rzTQ7d1UZvUjfnJ',
    img: images.newOil,
    alt: 'the new oil logo',
    bg: '',
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
    alt: 'surveillance report logo',
    bg: '',
  },
  {
    name: 'Naomi Brockwell',
    className: 'nbtv',
    id: 3,
    description: [
      'Naomi Brockwell is a tech journalist and the creator of NBTV.media, a platform dedicated to helping people reclaim control over their lives in the digital age. Through accessible and empowering content, NBTV equips individuals with the knowledge and tools to protect their data, manage their digital finances, and express themselves freely online.',
      'NBTV is a non-profit research and media institute that promotes human freedom through technology. Its mission is to educate the public on safeguarding fundamental rights in the digital era and to champion innovations that uphold privacy, personal autonomy, and human dignity in the online world.',
    ],
    website: 'https://naomibrockwell.com/',
    youtube: 'https://youtube.com/naomibrockwelltv',
    newsletter: 'https://nbtv.substack.com/',
    img: images.nbtv,
    alt: 'nbtv logo',
    bg: '',
  },

  {
    name: 'Proton.me',
    className: 'proton',
    id: 4,
    description: [
      'Proton was founded in Switzerland in 2014 by a team of scientists who met at CERN (the European Organization for Nuclear Research). United by a shared vision, they set out to build a better internet—one where privacy is the default and people, not profits, come first.',
      "Proton's mission is to empower individuals to take control of their digital lives by creating a world where everyone can communicate freely, protect their data and identity, avoid surveillance and data exploitation, and defend against cybercrime. Their services—such as Proton Mail, Proton VPN, and more—are built to make digital freedom a reality for all.",
      'The Proton.me Blog is the official source for news, insights, and updates from Proton. It covers topics related to online privacy, digital security, and internet freedom, while also sharing product announcements, privacy tips, and broader discussions about the importance of protecting personal information in the digital age.',
    ],
    blog: 'https://proton.me/blog',
    img: images.proton,
    alt: 'proton logo',
    bg: '',
  },
  {
    name: 'Academind',
    className: 'academind',
    id: '5',
    description: [
      'Academind is an online education platform offering high-quality video courses and tutorials on web development, programming, and other tech topics.',
      'Known for its clear, in-depth explanations and practical teaching style, Academind makes complex concepts accessible to learners of all levels.',
      'The content is primarily delivered by founders and instructors Maximilian Schwarzmüller and Manuel Lorenz, both highly respected in the developer community.',
    ],
    website: 'https://academind.com/',
    github: 'https://github.com/academind',
    youtube: 'https://www.youtube.com/c/academind',
    podcast: 'https://academind.com/podcast',
    udemy: 'https://www.udemy.com/user/academind',
    linkedin: 'https://www.linkedin.com/school/academind-pro',
    img: images.academind2,
    alt: 'academind logo',
    bg: '',
  },
  {
    name: 'ZTM',
    className: 'ztm',
    id: '6',
    description: [
      'Zero to Mastery (ZTM) is an online education platform founded by Andrei Neagoie, offering a wide range of courses in web development, data science, ethical hacking, machine learning, and more. Known for its high-quality video lessons and hands-on projects, ZTM ensures its content is regularly updated to reflect the latest industry trends and technologies.',
      'Beyond its courses, ZTM fosters a vibrant, community-driven learning environment where students can collaborate, ask questions, and support one another. The platform also extends its mission through blogs and newsletters that cover tech news, emerging tools, best practices, and insights into productivity and work-life balance.',
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
    alt: 'ztm logo',
    bg: '',
  },
  {
    name: 'Lama dev',
    className: 'lama-dev',
    id: '7',
    description: [
      'LamaDev is an online platform and YouTube channel offering web development tutorials, courses, and resources for learners at all levels. It focuses on modern JavaScript technologies such as React.js, Next.js, Node.js, and the MERN stack, while also providing inspiration and guidance in HTML, CSS, and web design.',
      'Known for its practical, hands-on approach, LamaDev helps developers build real-world projects and strengthen their coding skills through clear, accessible instruction.',
    ],
    website: 'https://lama.dev/',
    blog: 'https://blog.lama.dev/',
    newsletter: 'https://list.lama.dev/',
    github: 'https://github.com/safak',
    youtube: 'https://www.youtube.com/lamadev',
    img: images.lamadev,
    alt: 'lamadev logo',
    bg: '',
  },
];

const mediaLinks = [
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
  intros,
  abouts,
  media,
  mediaLinks,
};

export { aboutData };
