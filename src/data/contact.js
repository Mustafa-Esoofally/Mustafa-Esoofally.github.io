import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
// import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faGoogleScholar } from '@fortawesome/free-brands-svg-icons/faGoogleScholar';

// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'mailto:mustafa.z.esoofally@gmail.com',
    value: 'mustafa[.]z[.]esoofally',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'https://github.com/Mustafa-Esoofally',
    value: 'Mustafa-Esoofally',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://scholar.google.com/citations?user=YHEo04oAAAAJ&hl=en',
    value: 'Google Scholar',
    label: 'Google Scholar',
    icon: faGoogleScholar,
  },

  {
    link: 'https://www.linkedin.com/in/michaelldangelo',
    value: 'esoofallymustafa',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  // {
  //   link: 'https://twitter.com/dangelosaurus',
  //   label: 'Twitter',
  //   icon: faTwitter,
  // },
  {
    link: 'https://www.instagram.com/mustafa.esoofally/',
    value: 'mustafa.esoofally',
    label: 'Instagram',
    icon: faInstagram,
  },
];

export default data;
