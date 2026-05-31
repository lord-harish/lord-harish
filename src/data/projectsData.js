export const projectsData = [
  {
    slug: 'psg-imsr-daily-report',
    title: 'PSG IMSR Daily Report Management System',
    category: 'Web Application / Database Management',
    status: 'Completed',
    summary:
      'A smart institutional daily report management system developed for PSG IMSR to digitally streamline report submission, storage, and management using Firebase real-time database integration.',
    overview: [
      'The PSG IMSR Daily Report Management System was developed to simplify and modernize the process of managing institutional daily reports. Instead of relying on manual methods, this system enables efficient digital report submission and centralized management.',
      'The project was designed with a focus on usability, speed, and real-time synchronization using Firebase as the backend infrastructure. The system helps improve workflow efficiency, reduce paperwork, and provide faster access to report records.',
    ],
    objective: 'To build a centralized digital platform for efficient daily report management and tracking.',
    features: [
      'Daily report submission',
      'Firebase database integration',
      'Real-time synchronization',
      'Secure cloud storage',
      'Report management',
      'User-friendly interface',
      'Institutional workflow optimization',
    ],
    techStack: ['Firebase', 'JavaScript', 'Web Technologies', 'Database Management'],
    workflow: [
      'User enters report details',
      'Data validation process',
      'Report uploaded to Firebase',
      'Data stored securely',
      'Admin access and management',
    ],
    outputs: [
      { title: 'Report Submission UI', type: 'UI Preview', path: '/assets/projects/psg-imsr-daily-report/output1.png' },
      { title: 'Firebase Data Flow', type: 'Architecture', path: '/assets/projects/psg-imsr-daily-report/output2.png' },
      { title: 'Admin Report View', type: 'Screenshot', path: '/assets/projects/psg-imsr-daily-report/output3.png' },
    ],
    challenges:
      'Managing real-time database synchronization and designing an efficient workflow for report management.',
    learnings:
      'Improved skills in Firebase database integration, frontend system design, and institutional workflow automation.',
  },
  {
    slug: 'water-leakage-detection',
    title: 'Water Predictive Maintenance & Leakage Detection using LoRaWAN',
    category: 'IoT + AI + Smart Monitoring',
    status: 'Research Project',
    summary:
      'An intelligent predictive maintenance system designed to monitor water pipeline pressure variations and identify leakage risks using AI analysis and LoRaWAN communication.',
    overview: [
      'This project focuses on detecting early signs of water leakage by monitoring pipeline pressure variations through connected sensors.',
      'The system combines LoRaWAN communication with AI-based analysis to identify anomalies, support predictive maintenance, and reduce infrastructure failure risks.',
    ],
    objective: 'To identify leakage risks early and support smarter water infrastructure monitoring.',
    features: ['Pressure monitoring', 'AI anomaly detection', 'Leakage prediction', 'Smart alerts', 'LoRaWAN communication'],
    techStack: ['LoRaWAN', 'Sensors', 'AI', 'Data Analytics', 'Smart Monitoring'],
    workflow: [
      'Sensors monitor water pressure',
      'Readings are transmitted through LoRaWAN',
      'AI model analyzes pressure variations',
      'Anomaly risk is identified',
      'Alerts are generated for preventive action',
    ],
    outputs: [
      { title: 'Architecture', type: 'Diagram', path: '/assets/projects/water-leakage-detection/output1.png' },
      { title: 'Sensor Setup', type: 'Hardware Preview', path: '/assets/projects/water-leakage-detection/output2.png' },
      {
        title: 'Dashboard',
        type: 'Analytics',
        path: '/assets/projects/water-leakage-detection/output3.png',
        featured: true,
        aspect: 'video',
      },
    ],
    challenges:
      'Designing a reliable sensing workflow and mapping pressure variations into meaningful leakage indicators.',
    learnings:
      'Gained deeper understanding of LoRaWAN communication, sensor-based monitoring, anomaly detection, and research-oriented system design.',
  },
  {
    slug: 'student-login-system',
    title: 'Student Login System',
    category: 'Windows Application',
    status: 'Completed',
    summary:
      'A Windows-based smart attendance logging application developed to automatically record student login activities with timestamps and Excel report generation.',
    overview: [
      'The Student Login System was built to simplify attendance tracking by recording student login activity automatically.',
      'Students log in using their register number, and the system stores timestamped records in dynamically generated Excel sheets for daily tracking.',
    ],
    objective: 'To automate attendance capture and reduce manual tracking effort in a Windows environment.',
    features: ['Attendance logging', 'Timestamp generation', 'Excel reports', 'Auto startup', 'Multi-student support'],
    techStack: ['Flutter', 'Excel Integration', 'Windows System Development'],
    workflow: [
      'Student enters register number',
      'System validates login information',
      'Timestamp is generated',
      'Attendance is stored in Excel',
      'Daily report is prepared for review',
    ],
    outputs: [
      { title: 'System Login UI', type: 'Screenshot', path: '/assets/projects/student-login-system/output1.png' },
      { title: 'Excel Output', type: 'Report Preview', path: '/assets/projects/student-login-system/output2.png' },
      { title: 'Admin Dashboard', type: 'UI Preview', path: '/assets/projects/student-login-system/output3.png' },
    ],
    challenges:
      'Handling local file generation and making the attendance flow simple enough for repeated daily usage.',
    learnings:
      'Strengthened skills in Windows application workflows, Flutter UI, timestamp handling, and Excel-based reporting.',
  },
  {
    slug: 'face-recognition-system',
    title: 'AI Face Recognition System',
    category: 'Artificial Intelligence',
    status: 'Completed',
    summary:
      'An AI-powered face recognition system trained using image datasets and SVM models for identity verification and matching.',
    overview: [
      'The AI Face Recognition System uses image datasets and computer vision techniques to detect, train, and recognize faces.',
      'The project focuses on identity verification through a recognition engine supported by a machine learning pipeline.',
    ],
    objective: 'To build a practical identity matching system using image processing and machine learning.',
    features: ['Face detection', 'Training pipeline', 'Recognition engine', 'Verification'],
    techStack: ['Python', 'OpenCV', 'Machine Learning', 'SVM'],
    workflow: [
      'Image dataset is collected',
      'Faces are detected and preprocessed',
      'SVM model is trained',
      'New input is matched against trained data',
      'Identity verification result is produced',
    ],
    outputs: [
      { title: 'Training Pipeline', type: 'Screenshot', path: '/assets/projects/face-recognition-system/output1.png' },
      { title: 'Recognition Results', type: 'Result Preview', path: '/assets/projects/face-recognition-system/output2.png' },
      { title: 'Model Outputs', type: 'Output View', path: '/assets/projects/face-recognition-system/output3.png' },
    ],
    challenges:
      'Maintaining reliable recognition accuracy while handling image quality, dataset variation, and preprocessing consistency.',
    learnings:
      'Improved practical knowledge of OpenCV, image preprocessing, supervised learning, and model evaluation.',
  },
  {
    slug: 'data-bot',
    title: 'DATA BOT',
    category: 'WhatsApp Automation',
    status: 'In Progress',
    summary:
      'A smart WhatsApp assistant capable of storing and retrieving text, media, and links using command-based automation.',
    overview: [
      'DATA BOT is designed as a simple but powerful WhatsApp-based assistant for storing and retrieving useful information.',
      'The system uses command-based automation to manage text, files, links, and media in a fast, searchable workflow.',
    ],
    objective: 'To create a personal data assistant that makes saved information easy to store, search, and retrieve.',
    features: ['Data storage', 'Media retrieval', 'Search system', 'Command automation'],
    techStack: ['Python', 'Automation', 'API Integration', 'WhatsApp Workflows'],
    workflow: [
      'User sends a command',
      'Bot parses request type',
      'Data is stored or searched',
      'Matching output is retrieved',
      'Bot responds with the requested content',
    ],
    outputs: [
      { title: 'Bot Conversation', type: 'Screenshot', path: '/assets/projects/data-bot/output1.png' },
      { title: 'Storage Example', type: 'Preview', path: '/assets/projects/data-bot/output2.png' },
      { title: 'Retrieval Output', type: 'Result View', path: '/assets/projects/data-bot/output3.png' },
    ],
    challenges:
      'Designing reliable command parsing and organizing different content types for fast retrieval.',
    learnings:
      'Built stronger understanding of automation workflows, API interactions, and command-driven assistant design.',
  },
  {
    slug: 'smart-restroom-indicator',
    title: 'Smart Restroom Vacancy Indicator',
    category: 'IoT Automation',
    status: 'Completed',
    summary:
      'A real-time smart occupancy monitoring system developed to indicate restroom availability using intelligent sensor systems.',
    overview: [
      'The Smart Restroom Vacancy Indicator provides real-time availability information using sensor-based occupancy detection.',
      'The system is designed to improve convenience and resource usage through a simple, visible indication workflow.',
    ],
    objective: 'To indicate restroom availability in real time using smart sensors and embedded automation.',
    features: ['Occupancy detection', 'Smart indication', 'Real-time monitoring'],
    techStack: ['IoT', 'Sensors', 'Embedded Systems', 'Automation'],
    workflow: [
      'Sensor detects occupancy state',
      'Controller processes signal',
      'Availability status is updated',
      'Indicator displays vacant or occupied state',
      'Users receive real-time visibility',
    ],
    outputs: [
      { title: 'Hardware Setup', type: 'Hardware Preview', path: '/assets/projects/smart-restroom-indicator/output1.png' },
      { title: 'Sensor Images', type: 'Sensor View', path: '/assets/projects/smart-restroom-indicator/output2.png' },
      { title: 'Output Screen', type: 'Status Preview', path: '/assets/projects/smart-restroom-indicator/output3.png' },
    ],
    challenges:
      'Ensuring occupancy state changes are detected accurately and reflected quickly through the indicator system.',
    learnings:
      'Improved knowledge of sensor integration, embedded workflows, and practical IoT automation design.',
  },
  {
    slug: 'trading-bot',
    title: 'TRADING BOT',
    category: 'AI-based Trading System',
    status: 'Successfully Running',
    summary:
      'An AI-powered trading bot designed to analyze market data, predict price movements, and verify the Economic calendar to make informed trading decisions in financial markets.',
    overview: [
      'The Trading Bot is an intelligent system powered by Gemini API that continuously analyzes market data and economic indicators.',
      'It combines AI-based trading strategies with economic calendar verification to identify profitable trading opportunities and execute decisions with precision.',
    ],
    objective: 'To automate trading decisions using AI analysis and market predictions to optimize trading returns.',
    features: [
      'AI-based trading strategies',
      'Market prediction models',
      'Economic calendar integration',
      'Real-time market analysis',
      'Gemini API integration',
      'Automated decision making',
    ],
    techStack: ['Python', 'Automation', 'API Integration', 'Gemini API', 'AI/ML'],
    workflow: [
      'Bot fetches real-time market data',
      'AI model analyzes price patterns',
      'Economic calendar is checked',
      'Trading signals are generated',
      'Trading plan and predictions are given',
    ],
    outputs: [
      { title: 'Interface', type: 'UI Preview', path: '/assets/projects/trading-bot/output1.png', aspect: 'video' },
      { title: 'Output', type: 'Prediction Output', path: '/assets/projects/trading-bot/output2.png', aspect: 'video' },
      { title: 'Outcome', type: 'Results', path: '/assets/projects/trading-bot/output3.png' },
    ],
    challenges:
      'Developing accurate prediction models, handling market volatility, and ensuring economic calendar data is current and relevant.',
    learnings:
      'Strengthened expertise in AI trading strategies, API integration with Gemini, real-time data processing, and automated decision systems.',
  },
];

export function getProjectBySlug(slug) {
  return projectsData.find((project) => project.slug === slug);
}
