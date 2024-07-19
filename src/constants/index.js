import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
  {
    title: 'Mobile App Developer',
    icon: ux,
  },
  {
    title: 'E-Commerce Solutions',
    icon: ux,
  },
  {
    title: 'Branding & Illustration Design',
    icon: ux,
  },
  {
    title: 'Technical SEO ',
    icon: ux,
  },
  {
    title: 'Java Development',
    icon: ux,
  },
  {
    title: 'Database Design & Management',
    icon: ux,
  },
  {
    title: 'Computer Security Consulting ',
    icon: ux,
  },
  
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'LANKAN TRAVALESTER',
    icon: coverhunt,
    iconBg: '#0c8a58',
    date: 'Aug 2021 - Feb 2022',
  },
  {
    title: 'Learn Student Ambassador',
    company_name: 'Microsoft Sri Lanka',
    icon: microverse,
    iconBg: '#0c8a58',
    date: 'Mar 2022 - May 2022',
  },
  {
    title: 'Web Designer',
    company_name: 'WPS International',
    icon: kelhel,
    iconBg: '#0c8a58',
    date: 'May 2022 - Oct 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Code Alpha',
    icon: dcc,
    iconBg: '#0c8a58',
    date: 'Sep 2022 - Present',
  },
  {
    title: 'React Developer',
    company_name: 'LANKAN TRAVALESTER',
    icon: dcc,
    iconBg: '#0c8a58',
    date: 'Sep 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'HANDCRAFTED HARBOR',
    description: 'This e-commerce site highlights and sells unique handcrafted products, connecting artisans with a global audience. It features a curated collection of high-quality, handmade items, combining aesthetic appeal with user-friendly design for an enjoyable shopping experience.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/chamikamunithunga/HandcraftedHarbor',
    demo: 'https://chamikamunithunga.github.io/HandcraftedHarbor/',
  },
  
  {
    id: 'project-2',
    name: 'BOOKMARK',
    description:
      'BOOKMARK is an online platform dedicated to providing a seamless and enjoyable reading experience for book enthusiasts. It offers a vast collection of books across various genres, enabling users to read online, explore new titles, and manage their reading lists efficiently. The site is designed with a clean, modern interface that prioritizes user experience and accessibility.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/chamikamunithunga/WEB_BOOKMARK',
    demo: 'https://chamikamunithunga.github.io/WEB_BOOKMARK/',
  },
  {
    id: 'project-3',
    name: 'FITNESS ZONE ',
    description: 'This website is designed for a gym, featuring an integrated BMI calculator to help visitors assess their fitness levels and make informed decisions about their health and fitness goals. The site combines a modern, user-friendly design with essential gym information and interactive tools to enhance the user experience. ',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/chamikamunithunga/gym',
    demo: 'https://chamikamunithunga.github.io/gym/index.html',
  },
  {
    id: 'project-4',
    name: 'NESHA.R',
    description: `This single-page web design serves as a modern and 
    visually appealing portfolio for a Sri Lankan girl, showcasing her
     work, skills, and personality. The design emphasizes clean aesthetics,
      cultural elements, and user-friendly navigation,
     making it ideal for a variety of professional and creative fields.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: '#',
    demo: 'https://modelnesha.my.canva.site/nesha-r#about',
  },
  
  {
    id: 'project-5',
    name: 'GAMING ZET',
    description:
      'This demo concert website is designed to showcase and promote a gaming headset brand through an immersive and engaging online experience. It combines elements of a live concert event with a modern e-commerce interface, highlighting the features of the headset while offering a dynamic, interactive environment for visitors.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: '#',
    demo: 'https://fuse2023.my.canva.site/gamingzet',
  },
];

export { services, technologies, experiences, projects };
