interface Project {
  id: number;
  name: string;
  description: string;
  tools: string[];
  code: string;
  demo: string;
  image: string;
  role: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'THACO',
    description:
      'Designed and developed a recruitment module to streamline the hiring process at Thaco, optimizing workflows for talent acquisition and candidate management.',
    tools: [
      'Angular',
      'Ant Design',
      'Material UI',
      'Rxjs',
      'NgRx',
      'Testing',
      'Core library',
      'Kendo UI',
    ],
    code: 'Internal project',
    demo: 'Internal project',
    image: 'assets/images/projects/thaco.jpeg',
    role: 'Frontend Developer',
  },
  {
    id: 2,
    name: 'MOMO',
    description:
      'Developed and implemented a comprehensive HRM (Human Resource Management)system for Momo Company to automate and manage HR processes, including employee records,payroll, attendance, and performance tracking.',
    tools: [
      'Angular',
      'Ant Design',
      'Material UI',
      'Rxjs',
      'NgRx',
      'Testing',
      'Core library',
      'Kendo UI',
    ],
    code: 'Internal project',
    demo: 'Internal project',
    image: 'assets/images/projects/akyurt-online.webp',
    role: 'Frontend Developer',
  },
  {
    id: 3,
    name: 'DU AN VIET NAM (DAVN)',
    description:
      'Developed and maintained features for the Du An Vietnam e-commerce website,specifically the subject builder, allowing users to customize products and improve their shopping experience.',
    tools: [
      'Angular',
      'Ant Design',
      'Material UI',
      'Rxjs',
      'NgRx',
      'Testing',
      'Core library',
      'Kendo UI',
    ],
    code: 'Internal project',
    demo: 'Internal project',
    image: 'assets/images/projects/baredex.webp',
    role: 'Frontend Developer',
  },
  {
    id: 4,
    name: 'Booking Medical',
    description:
      'A web-based medical booking system that allows patients to schedule appointments with doctors.',
    tools: [
      'Stripe',
      'Nodemailer',
      'JWT',
      'Cloudinary',
      'Bcrypt',
      'Tailwind CSS',
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'CORS',
    ],
    code: 'https://github.com/VanHoa-2002/React-booking',
    demo: 'https://booking-sigma-ten.vercel.app/',
    image: 'assets/images/projects/mocowi.webp',
    role: 'Full Stack Developer',
  },
];
