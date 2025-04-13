const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Projects",
    link: "#Projects",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 7, suffix: "+", label: "Full stack projects" },
  { value: 11, suffix: "+", label: "Frontend Projects" },
  { value: 9, suffix: "%", label: "AI/ML projects" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Personal Qualities",
    desc: "Detail-oriented, creative thinker, consistent performer and collaborative.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Time Management",
    desc: "Efficiently balance academics and projects using structured planning, prioritization, and productivity tools.",
  },
  {
    imgPath: "/images/time.png",
    title: "Eagerness to Learn",
    desc: "Driven by curiosity, I constantly explore new technologies and improve through hands-on learning.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "FlameEd is a Reddit-inspired platform enabling users to post, comment, vote, and engage in topic-based discussions seamlessly. It features user authentication",
    
    logoPath: "/images/logo1.png",
    title: "Full Stack Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Designed intuitive UI and post/comment system using React and CSS Modules.",
      "Implemented real-time updates and authentication using Node.js, Express, and MongoDB",
      "Managed state with Redux and integrated backend APIs for user actions and post interactions.",
    ],
  },
  {
    review: "At CSIR-CMERI, I contributed to the development of a real-time hand tracking system aimed at aiding medical rehabilitation.",
    
    logoPath: "/images/logo2.png",
    title: "Python Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Integrated OpenCV for realtime video capture and hand contour detection.",
      "Trained gesture recognition using a Keras-based neural network model.",
      "Optimized tracking accuracy for various hand sizes and lighting conditions to ensure system reliability",
    ],
  },
  {
    review: "Mingle is a real-time chatting platform designed to connect users instantly through clean, responsive UI and seamless communication.",
    
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built frontend using React with styled components for a sleek and responsive interface.",
      "Implemented WebSocket connections using Socket.io for real-time two-way messaging",
      "Added user authentication and session handling with Node.js and Express.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Web3 Labs – Stock AI Platform",
    review:
      "Built a Web3-based stock market platform offering AI-driven insights and interactive assistants to analyze financial data. Combined React, Node.js, and Web3.js for decentralized access and used AI bots for predicting trends, giving personalized investment suggestions, and helping users understand stock performance in real time.",
  },
  {
    name: "AR Game – Hand Tracking",
    
    review:
      "Designed an augmented reality game where players control gameplay using finger gestures. Integrated OpenCV and MediaPipe to track hand skeletons and shoot glowing projectiles from fingertips. Added explosion effects, score system, reload mechanics, and real-time enemy movement to create an engaging, immersive gaming experience.",
    
  },
  {
    name: "Skin Cancer Detection System",
    review:
      "Developed a computer vision system using TensorFlow and OpenCV to detect skin cancer from image inputs. Trained on medical datasets, it classifies skin lesions with high accuracy. The model supports early diagnosis and healthcare awareness through a lightweight interface, aiding doctors and patients in fast evaluation.",
  },
  {
    name: " macOS-style Portfolio Website",
    
    review:
      "Developed a macOS Big Sur-inspired personal portfolio website featuring animated window controls, sidebar navigation, glowing text, and glassmorphism UI. Integrated project showcases, about sections, and interactive elements in a single-page layout. Designed for both aesthetics and performance with smooth transitions and responsive layout across devices.",
    
  },
  {
    name: "Realistic 3D Hand Mesh",
    
    review:
      "Implemented real-time 3D hand mesh visualization using MediaPipe and Minimal-Hand-PyTorch. Replaced standard skeleton with a realistic hand model for enhanced gesture representation. Aimed at immersive AR/VR experiences and gesture control, focusing on detailed pose estimation and accurate hand modeling from camera feed input.",
    
  },
  {
    name: "NFT Glassmorphism UI",
    
    review:
      "Built a visually stunning NFT card interface with Ethereum token data, animated hover effects, and glassmorphism styling. The interface mimics macOS aesthetics with blur effects and vibrant backgrounds. Ideal for NFT portfolios or marketplaces, it combines stylish design with crypto asset presentation in a modern layout.",
    
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
