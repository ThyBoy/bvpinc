import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
  img: 'BVPInclogo.png',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'guest1.jpg',
    title: 'Guest-O-Vida',
    info:
      'An event to test the mental faculties and the decision-making skills, will make you exercise your grey cells.',
    info2:
      'The event was organised to test the skills of students to come up with the perfect case study. Throughout the event, the participants had to brainstorm to arrive at the best conclusion.',
  },
  {
    id: nanoid(),
    img: 'hack1.jpg',
    title: 'HACK@BVP 3.0',
    info:
      'Not just a hackathon, but a platform for tech minds and leading industry partners to collaborate towards future innovations.',
    info2:
      'Our society collaborated with the Department of Computer Science & Engineering and organised Hack @BVP 3.0.',
  },
  {
    id: nanoid(),
    img: 'vichaar1.jpg',
    title: 'Vichaar',
    info:
      'Brainstorm your way to fresh solutions for challenges in the community through an intensive ideathon.',
    info2:
      'A successful Ideathon organized in association with Startup4all and IIT Roorkee which focused on “Innovation Mindset for Immortal India”. Students conceptualized and showcased their ideas according to real-world problems and presented great business solutions for the same.',
  },
  {
    id: nanoid(),
    img: 'women1.jpg',
    title: 'Women in Entrepreneurship',
    info: 'Let’s find the voice of power and authority within us.',
    info2:
      'The event guided students about the current scenario of women working in the corporate sector, discussed challenges faced by women trying to make it in the sector and guided students into tackling these challenges.',
  },
  {
    id: nanoid(),
    img: 'png1.jpg',
    title: 'PNG Achievers Academy',
    info: 'A program designed to groom your personality for the corporate world.',
    info2:
      "In this event, the students were helped to gain knowledge on 'How to develop a confident personality' and 'How to be presentable during interviews'. The students were also awarded with internships",
  },
  {
    id: nanoid(),
    img: 'vyakt1.jpg',
    title: 'Vyakt',
    info:
      'An event to nurture your mind with great thoughts, for you will never go any higher than you think.',
    info2:
      'Vyakt, a content writing competition was held in order to provide our students with a medium to express their thoughts actively in the times of global pandemic.',
  },
  {
    id: nanoid(),
    img: 'stock1.jpg',
    title: 'Merchant of Stocks',
    info:
      "The virtual mock stock competition in association with Dalal Street Investment Journal, India's #1 equity research and capital investment Magazine.",
    info2:
      'The event allowed the investors to practice their stock-investment skills without the use of real money. This was done with the aim of introducing stock market and sales as a field of career amongst the students.',
  },
];

// TEAM DATA
export const teamData = [
  {
    id1: nanoid(),
    data: [
      {
        id: nanoid(),
        img: 'somya.jpg',
        name: 'Somya Khandelwal',
        position: 'Chairperson',
        fade: [true, false, false, false],
      },
      {
        id: nanoid(),
        img: 'nimish.jpg',
        name: 'Nimish Sardana',
        position: 'Vice Chairperson',
        fade: [false, true, false, false],
      },
    ],
  },
  {
    id1: nanoid(),
    data: [
      {
        id: nanoid(),
        img: 'shubhi.jpg',
        name: 'Shubhi Jain',
        position: 'General Secretary',
        fade: [true, false, false, false],
      },
      {
        id: nanoid(),
        img: 'aman.jpg',
        name: 'Aman Jain',
        position: 'Treasurer',
        fade: [false, false, false, true],
      },
      {
        id: nanoid(),
        img: 'chitvan.jpg',
        name: 'Chitvan Mittal',
        position: 'Jt. Treasurer',
        fade: [false, true, false, false],
      },
    ],
  },
  {
    id1: nanoid(),
    data: [
      {
        id: nanoid(),
        img: 'drishti.jpg',
        name: 'Drishti Aggarwal',
        position: 'Content and Documentation Head',
        fade: [true, false, false, false],
      },
      {
        id: nanoid(),
        img: 'narendra.jpg',
        name: 'Narendra Singh',
        position: 'IT and Designing Head',
        fade: [false, false, false, true],
      },
      {
        id: nanoid(),
        img: 'shreya.jpg',
        name: 'Shreya Gupta',
        position: 'Publicity Head',
        fade: [false, true, false, false],
      },
    ],
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/bvpinc/',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/BVP-INC-113516396708884',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/company/bvpinc/',
    },
  ],
};
