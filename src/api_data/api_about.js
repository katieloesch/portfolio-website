import { aboutIcons as icons } from './../assets/icons/icons_about';
import { aboutImages as images } from '../assets/images/about_images';

const intros = [
  "Hi! I'm Katie. I'm a full-stack developer with a background in biomedical science, currently based in London.",
  "I'm passionate about designing user-centric applications and building purpose-driven solutions. I'm currently open to job opportunities where I can contribute, learn and grow.",
];

const abouts = [
  {
    title: 'background.',
    description:
      'As a biomedical science graduate, I had the opportunity to work with databases that store genetic data and algorithms for comparing sequence information. This experience sparked my interest in how software and technology can be used to improve and innovate healthcare and medical research.',
    icon: icons.background.svg,
  },
  {
    title: 'coding journey.',
    description:
      'My interest in coding led me to join the General Assembly software engineering immersive course to secure a solid foundation in programming fundamentals to build upon. I’m currently looking for opportunities to further develop my skills and learn new languages, frameworks and technologies.',
    icon: icons.codingJourney.svg,
  },
  {
    title: 'interests.',
    description:
      "I'm fascinated by sci-fi books, movies, and TV shows like Star Trek and Black Mirror that have often predicted technological advancements before they became mainstream, such as video calls, mobile phones, wireless headphones, credit cards, solar power and AI.",
    icon: icons.interests.svg,
  },
];

const media = [
  {
    name: 'Techlore',
    className: 'techlore',
    id: 0,
    description: [
      'Techlore is educating people about digital rights, privacy, security, digital control, and other important topics to push the world towards a safer internet. We envision a world where technology works for us, not against us—and we want to prove to people they can make a real impact for themselves and others.',
      "We're a small team educating people about digital rights, privacy, security, digital control, and other important topics to push the world towards a safer internet. We envision a world where technology works for us, not against us—and we want to prove to people they can make a real impact for themselves and others.",
      "Henry Fisher the owner of Techlore, marketing manager for Cake Wallet, & co-host of Surveillance Report. I've developed resources for nearly a decade, using my expertise to improve people's relationship with technology and digital safety.",
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
      'Nathan Bartram Founder/Editor',
      'A project dedicated to teaching beginners and non-tech-savvy people about digital privacy and cybersecurity.',
      'To educate readers on why privacy and security matter, and the various tools and techniques available to help them reclaim and protect their own privacy & security',
      'To empower readers to believe that privacy and security are attainable for everyone and to do their best to reclaim & protect their own privacy and security as much as possible',
      'To enhance the lives of readers with tools that will improve their privacy and security without negatively impacting their mental or emotional health or professional or social lives',
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
      'Weekly security and privacy news - Presented by Techlore & The New Oil. The goal of Surveillance Report is keep the world updated on the latest privacy & security news to empower individuals to remain safe with the newest information. Join us for the ride!',
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
      'Naomi Brockwell is a tech journalist, and creator of "NBTV.media". NBTV teaches people how to reclaim control of their lives in the digital age. The channel gives people the tools they need to take back their data, money, and free online expression.',
      'NBTV is a research and media institute that advances human freedom through technology. We produce educational content to teach people how to protect their fundamental rights in the digital age and harness empowering innovation to ensure that privacy, individual autonomy, and human dignity extend to the digital landscape.',
      'NBTV is a non-profit',
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
      'Proton was born in Switzerland in 2014 when a team of scientists who met at CERN (the European Organization for Nuclear Research) decided to build a better internet where privacy is the default.',
      'Proton was born out of a desire to build an internet that puts people before profits, create a world where everyone is in control of their digital lives, and make digital freedom a reality. In this new world, you can communicate with whomever you want, protect your data and identity, avoid having your data sold, and safeguard against cybercrime.',
      "The Proton.me blog is the official blog of Proton, the company behind ProtonMail, ProtonVPN, and other privacy-focused services. The blog covers topics related to online privacy, security, and digital freedom, offering insights, news, and updates about Proton's products, privacy tips, industry trends, and broader discussions on the importance of protecting personal information in the digital age.",
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
      'Academind is an online education platform that offers high-quality video courses and tutorials on web development, programming, and other tech-related topics. It is known for its clear, in-depth explanations and practical approach to teaching, making complex subjects accessible to learners at all levels. The content is primarily delivered by founders and instructors Maximilian Schwarzmüller and Manuel Lorenz who are well-regarded in the developer community.',
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
      'ZTM is an online education platform designed to teach in-demand skills,',
      'Founded by Andrei Neagoie, the platform offers a wide range of courses covering topics such as web development, data science, ethical hacking, machine learning, and more.',
      'ZTM is known for its high-quality video lessons, practical projects, and regularly updated content, ensuring that students are learning the most relevant and up-to-date information.',
      'The platform also includes courses that teach important life skills, like productivity and efficient learning, which complement the technical skills being taught.',
      'In addition to the structured courses, ZTM has an active community where students can collaborate, ask questions, and support each other, which is particularly valuable for learners who thrive in a community-driven environment.',
      "ZTM offers several blogs and newsletters that focus on a wide range of topics relevant to tech professionals and learners. This includes: Tech News and Industry Updates, latest trends in technology, software development, and industry news as well as insights into new tools, frameworks, and best practices, helping learners stay updated with what's happening in the tech world.",
      'ZTM also shares blogs and newsletters about effective learning strategies, how to optimise your study routines, and resources that can help you better absorb and retain the skills you’re learning.',
      'There are also articles focusing on productivity, mental health, and lifestyle adjustments that can help tech professionals maintain a healthy work-life balance while advancing in their careers.',
      "These resources are part of ZTM's broader mission to not only teach technical skills but also to support their students in becoming well-rounded professionals.",
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
      'Web development tutorials for everyone. Learn JavaScript, React.js, Next.js and Node.js, find inspiration for HTML, CSS, and web design.',
      "LamaDev is an online platform and YouTube channel that offers tutorials, courses, and resources focused on web development, particularly around modern JavaScript technologies like React, Node.js, and the MERN stack. It's known for providing practical, hands-on content that helps developers build real-world projects and enhance their coding skills.",
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
