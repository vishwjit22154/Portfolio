import { Skill } from '@/types/skill';

const trimLen: number = -1; // 0 is accordion only, -1 is does not restrict the length

const skills: Skill[] = [
  {
    name: 'Cybersecurity',
    // todo: use proper thumbnail pics
    thumbnail: '/images/skills/cybersecurity.jpg',
    description: 'Cybersecurity involves protecting computer systems, networks, and data from security threats. It includes risk management, incident response, and the use of network monitoring tools to ensure data confidentiality, integrity, and availability.'
  },
  {
    name: 'Web Development',
    thumbnail: '/images/skills/web.jpg',
    description: `Web Development involves designing and building websites and web applications that are both visually engaging and highly functional. It covers front-end and back-end technologies, frameworks like React and Node.js, and best practices to ensure optimal performance, security, and scalability.`
  },
  {
    name: 'Network Management',
    thumbnail: '/images/skills/networkj.jpg',
    description: 'Network Management focuses on maintaining reliable and secure IT networks. It includes configuring routers, monitoring performance, and ensuring consistent connectivity.'
  },
  {
    name: 'Mobile App ( iOS & Android ) Development',
    thumbnail: '/images/skills/mobile.jpg',
    description: `Mobile Development entails crafting apps for smartphones and tablets that are both visually appealing and highly functional. It includes a variety of technologies, frameworks, and best practices to provide a seamless user experience on mobile devices.`
  }
];

export { trimLen, skills };
