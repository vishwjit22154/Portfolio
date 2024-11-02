import { Contact } from '@/types/contact';
import {
  SiGithub,
  SiLinkedin,
  SiX,
  SiYoutube
} from '@icons-pack/react-simple-icons';

const contact: Contact = {
  email: 'vishwajitharish2812@gmail.com',
  socials: [
    {
      name: 'Github',
      href: 'https://github.com/vishwjit22154',
      Icon: SiGithub
    },
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/vishwajit25/',
      Icon: SiLinkedin
    }
  ]
};

export { contact };
