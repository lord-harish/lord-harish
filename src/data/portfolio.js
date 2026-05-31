import {
  Award,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  ChartCandlestick,
  CircuitBoard,
  Code2,
  DatabaseZap,
  GraduationCap,
  RadioTower,
  Rocket,
  ServerCog,
  Sparkles,
  Trophy,
} from 'lucide-react';

export const skillCategories = [

  {
    title: 'AI / Machine Learning',
    icon: BrainCircuit,
    description: 'Building intelligent systems using computer vision, machine learning, and AI-based automation.',
    skills: [
      'Python',
      'TensorFlow',
      'OpenCV',
      'Scikit-Learn',
      'Machine Learning',
      'Face Recognition',
      'Object Detection',
      'Data Preprocessing',
    ],
  },
  {
    title: 'Development',
    icon: Code2,
    description: 'Creating modern, responsive, and scalable applications with clean UI and optimized performance.',
    skills: ['React', 'Vite', 'HTML5', 'CSS3', 'JavaScript', 'Flutter'],
  },
  {
    title: 'Data Analytics',
    icon: DatabaseZap,
    description: 'Analyzing, transforming, and visualizing data to generate meaningful insights.',
    skills: ['NumPy', 'Pandas', 'KNIME', 'Data Analysis', 'Data Visualization'],
  },
  {
    title: 'IoT & Automation',
    icon: RadioTower,
    description: 'Building smart connected systems for automation, monitoring, and real-world problem solving.',
    skills: [
      'LoRaWAN',
      'Home Assistant',
      'Sensor Integration',
      'Smart Automation',
      'Predictive Monitoring',
      'Edge Systems',
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: ServerCog,
    description: 'Using powerful tools and environments for efficient development workflows.',
    skills: ['GitHub', 'VS Code', 'Ubuntu/Linux', 'Windows Development', 'Firebase', 'API Integration'],
  },
  {
    title: 'Trading',
    icon: ChartCandlestick,
    description: 'Making money with trading using technical analysis, machine learning, and AI-based strategies to predict market movements and optimize trading decisions.',
    skills: [
      'swing trading',
      'XAUUSD',
      'technical analysis',
      'fundamental analysis',
      'machine learning for trading',
      'AI-based trading strategies',
      'backtesting',
    ],
  },
];

export const projects = [
  {
    slug: 'psg-imsr-daily-report',
    title: 'PSG IMSR Daily Report Management System',
    category: 'Web Application / Database Management System',
    priority: 'Featured / Important Project',
    description:
      'A smart web-based daily report management system developed for PSG IMSR to digitally manage and streamline daily report submissions and tracking. The system uses Firebase as the backend database for secure real-time data storage, retrieval, and management.',
    features: [
      'Daily report submission system',
      'Real-time Firebase database integration',
      'Secure data storage',
      'Report tracking & management',
      'User-friendly interface',
      'Fast cloud-based synchronization',
      'Institutional workflow optimization',
    ],
    tech: ['Firebase', 'Web Development', 'Database Management', 'JavaScript', 'Frontend Technologies'],
    status: 'Completed',
    highlight: 'Important Project',
    note: 'Built to improve institutional workflow through smart digital report management.',
    featured: true,
  },
  {
    slug: 'student-login-system',
    title: 'Student Login System',
    category: 'Windows System Application',
    description:
      'A smart Windows-based attendance system developed to record student login activity automatically. Students log in using their register number, and attendance records are stored with timestamps in dynamically generated Excel sheets for daily tracking.',
    features: [
      'Auto attendance logging',
      'Timestamp recording',
      'Excel sheet generation',
      'Windows startup automation',
      'Multi-student support',
    ],
    tech: ['Flutter', 'Excel Integration', 'Windows System Development'],
    status: 'Completed',
  },
  {
    slug: 'face-recognition-system',
    title: 'AI Face Recognition System',
    category: 'Artificial Intelligence / Computer Vision',
    description:
      'An intelligent face recognition system trained using image datasets and Support Vector Machine techniques to accurately identify and verify individuals.',
    features: ['Face detection', 'Face matching', 'Model training', 'Identity verification', 'Computer vision pipeline'],
    tech: ['Python', 'OpenCV', 'Machine Learning', 'SVM'],
    status: 'Completed',
  },
  {
    slug: 'trading-bot',
    title: 'TRADING BOT',
    category: 'AI-based Trading System',
    priority: 'Active Project',
    description:
      'An AI-powered trading bot designed to analyze market data, predict price movements, and also verifies the Economic calendar to make informed trading decisions in the financial markets and powered by Gemini API.',
    features: ['AI-based trading strategies', 'Market prediction', 'Economic calendar integration', 'Real-time market analysis', 'Gemini API integration',],
    tech: ['Python', 'Automation', 'API Integration'],
    status: 'Successfully Running',
    featured: true,
  },
  {
    slug: 'water-leakage-detection',
    title: 'Water Predictive Maintenance & Leakage Detection using LoRaWAN',
    category: 'IoT + Artificial Intelligence',
    description:
      'An advanced predictive maintenance system designed to monitor water pressure using sensors and AI-driven analysis to detect pipe leakage before failure occurs.',
    features: ['Water pressure monitoring', 'AI anomaly detection', 'Leakage prediction', 'LoRaWAN communication', 'Smart alerts'],
    tech: ['LoRaWAN', 'Sensors', 'AI', 'Data Analytics'],
    status: 'Research Project',
  },
  {
    slug: 'smart-restroom-indicator',
    title: 'Smart Restroom Vacancy Indicator',
    category: 'IoT Automation',
    description:
      'A smart occupancy monitoring solution developed to indicate restroom availability in real time using intelligent sensor systems.',
    features: ['Live occupancy detection', 'Smart indication system', 'Real-time monitoring', 'Efficient resource usage'],
    tech: ['IoT', 'Sensors', 'Embedded Systems'],
    status: 'Completed',
  },
];

export const experience = [
  {
    company: 'Springboard Digitals',
    role: 'Intern',
    icon: BriefcaseBusiness,
    images: [
      '/assets/achievements/intern.jpeg',
    ],
    description:
      'Completed internship training focused on web technologies, intelligent automation, and AI-powered workflows. Worked on projects including web page development using HTML & CSS, GPT customization, smart digital systems, and software setup processes.',
    contributions: [
      'Developed web pages using HTML & CSS',
      'Worked on GPT customization workflows',
      'Assisted in digital system implementation',
      'Explored intelligent automation concepts',
      'Technical documentation & setup',
    ],
  },
];

export const education = [
  {
    title: 'SSLC',
    status: 'Completed',
    icon: GraduationCap,
    description:
      'Completed SSLC at PSG SarvaJana Higher Secondary School, building the academic foundation for a technology-focused learning journey.',
  },
  {
    title: 'Diploma Education',
    status: 'Completed',
    icon: GraduationCap,
    description:
      'Successfully completed diploma studies at PSG Polytechnic College with strong practical exposure in technology, programming, and project-based learning.',
  },
  {
    title: 'Lateral Entry B.E / B.Tech Journey',
    status: 'Starting New Journey',
    icon: Rocket,
    description:
      'Currently stepping into the next phase of higher education to strengthen expertise in Artificial Intelligence, Machine Learning, Software Development, and Smart Technologies.',
  },
];

export const achievements = [
  {
    title: 'Best Project Award 2026 ',
    icon: CircuitBoard,
    badge: 'AI & ML',
    images: [
      '/assets/achievements/achievement-1.png',
      '/assets/achievements/achievement-1-2.png',
      '/assets/achievements/achievement-1-3.png',
      '/assets/achievements/achievement-1-4.png',
    ],
    description:
      'We got the Best Project Award 2026 from the Department of Artificial Intelligence & Machine Learning at PSGPTC, for my Diploma Final year Project "Innovative Water Management System using LoRa Enabled IoT"',
    highlights: [
      'Pipe line integrated IoT System',
      'Data Transmitted Using LoRaWAN',
      'GBRF Model for Leakage Detection',
      'Predictive Maintenance for Water Systems',
    ],
  },
  {
    title: 'PSG IMSR',
    icon: Sparkles,
    badge: 'Research',
    images: [
      '/assets/achievements/achievement-2.png',
      '/assets/achievements/achievement-2-2.png',
    ],
    description:
      'A smart web-based daily report management system developed for PSG IMSR to digitally manage and streamline daily report submissions and tracking.',
    highlights: [
      'IEEE Research Paper',
      'AI-Driven Smart Systems',
      'Water Management Innovation',
      'Predictive Analytics',
    ],
  },
  {
    title: 'Smart Home Automation ',
    icon: Award,
    badge: 'Internship',
    images: [
      '/assets/achievements/achievement-3.png',
      '/assets/achievements/achievement-3-2.png',
      '/assets/achievements/achievement-3-3.png',
    ],
    description:
      'Successfully completed Automating a normal home into a smart home using Home Assistant, integrating various smart devices, sensors, and automation workflows to create an intelligent living environment.',
    highlights: ['ZIGBEE Integration', 'Home Assistant Automation', 'Voice Control Integration', 'Smart Device Management','Frigate integration'],
  },
  {
    title: 'Hackathon Participation',
    icon: RadioTower,
    badge: 'IoT',
    images: [
      '/assets/achievements/achievement-4.png',
      '/assets/achievements/achievement-4-2.png',
      '/assets/achievements/achievement-4-3.png',
    ],
    description:
      'Participated in various hackathons, developing multiple real-world problem solving projects focused on Emerging AI',
    highlights: ['KPRIET', 'SRMTRP', 'CIT', 'PSG-Tech', 'PSG i-Tech'],
  },
  {
    title: 'Continuous winning Journey',
    icon: Trophy,
    badge: 'Growth',
    images: [
      '/assets/achievements/achievement-5.png',
      '/assets/achievements/achievement-5-2.png',
      '/assets/achievements/achievement-5-3.png',
      '/assets/achievements/achievement-5-4.png',
    ],
    description:
      'Continuously learning, Winning, and improving skills in Full Stack Development, UI/UX Design, Artificial Intelligence, Smart Systems, and modern technologies to build impactful real-world solutions.',
    highlights: ['Full Stack Development', 'UI/UX Learning', 'AI Technologies', 'Future Engineering Skills'],
  },
  {
    title: 'Inter College Events',
    icon: Trophy,
    badge: 'Growth',
    images: [
      '/assets/achievements/achievement-6.png',
      '/assets/achievements/achievement-6-2.png',
      '/assets/achievements/achievement-6-3.png',
      '/assets/achievements/achievement-6-4.png',
      '/assets/achievements/achievement-6-5.png',
      '/assets/achievements/achievement-6-6.png',
      '/assets/achievements/achievement-6-7.png',
      '/assets/achievements/achievement-6-8.png',
      '/assets/achievements/achievement-6-9.png',
      '/assets/achievements/achievement-6-10.png',
    ],
    description:
      'Continuously improving skills in team Collaboration, problem solving, and technical expertise by participating in various inter college events and competitions focused on emerging technologies and real-world solutions.',
    highlights: ['paper presentation', 'Quiz', 'technical Quiz', 'Association Head', 'NSS PSGPTC', 'Project expo'],
  },
];

export const techStack = [
  'Python',
  'TensorFlow',
  'OpenCV',
  'React',
  'Vite',
  'Flutter',
  'JavaScript',
  'HTML5',
  'CSS3',
  'NumPy',
  'Pandas',
  'KNIME',
  'LoRaWAN',
  'Home Assistant',
  'GitHub',
  'Linux',
  'VS Code',
  'Firebase',
];

export const projectIcon = Bot;
