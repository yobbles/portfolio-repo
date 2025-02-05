// lib/data.ts
import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  name: 'Christoph Jurgen Shantz',
  title: 'Software Developer',
  profilePicture: '/profile_pic_3.jpg',
  whatIDo: 'Software developer dedicated to quality code solutions. I began my programming journey after feeling unsatisfied with pursuing physics in my undergrad, and I ended up loving it and wanting to pursue it full-time after College. I work on Backend Development and Data Analysis, with my current projects and Capstone Project demonstrating my love and expertise for both fields. I am currently working on <a href="https://animebible.net" target="_blank" class="text-blue-600 hover:text-blue-800 transition-colors">Animebible</a>, an open-ai powered chatbot, and DraftWright, a web application for sports stats highlighting overperforming athletes.',
  whatILike: 'I love skiing and mountain biking, anything I can spend time doing outside! After work, I like to relax by cooking and reading sci-fi novels.',
  goodreadsLink: 'https://www.goodreads.com/user/show/179379620-cj-shantz',
  backgroundImage: '/alberta_creek.jpg',
  backgroundLocation: 'Mistaya Canyon, Banff AB 2022',
  resumePath: '/resume_5_jan.pdf',
  timeline: [
    {
      title: "Queen's Space Engineering Team",
      date: 'Jan 2022 – May 2023',
      description: 'Electrical team member, developed proposals for the automation of a prototype robot through piezoelectric material.',
      media: '/weather_balloon_2.jpg',
      links: [{url: 'https://qset.ca/', text:"Visit QSET"}],
      side: 'L',
    },
    {
      title: 'Bitcoin Core Architecture Analysis',
      date: 'Jan 2022 – Sep 2022',
      description: 'Created detailed analysis of Bitcoin Core\'s concrete architecture. Utilized Understand tool for static analysis of Bitcoin Core\'s source code. Created sequence diagrams for common use cases such as sending Bitcoins and mining crypto.',
      media: '/blockchain.jpg',
      links: [{url: 'https://drive.google.com/drive/folders/1_ERx7C4Z9paM0eghtxagTVIkNTjTQVdy?usp=sharing', text:"BitcoinCore reports"}],
      side: 'R',
    },
    {
      title: 'Capstone Project - Queen\'s MuLab Vertical Farm',
      date: 'Sep 2023 – Apr 2024',
      description: 'Built custom dashboards displaying metrics for precipitation, light exposure, and temperature. Developed procedures for data management and security. Used: Kibana, Elasticsearch, Logstash, Docker, Github.',
      media: '/growzone.png',
      links: [
        { url: 'https://qvft.ca/', text: 'Visit QVFT' },
        { url: 'https://queensuca-my.sharepoint.com/:p:/g/personal/19qj8_queensu_ca/EY00eBVfe71DpmWMpG5xBEIBOLtMHdMQYbEpKke6Oy7Uvg?e=UWeBUE', text: 'View Research Poster' }
      ],
      side: 'L',
    },
    {
      title: 'AnimeBible - Current Project',
      date: 'May 2023 – Present',
      description: 'AI-driven platform for anime discussions using React.js, Node.js, Express.js, OpenAI API, and AniList GraphQL API. Implemented PostgreSQL, Redis caching, Firebase hosting, and OAuth2 authentication.',
      media: '/animebible.png',
      links: [{url: 'https://animebible.net/', text: 'Visit Animebible'}],
      side: 'R',
    }
  ],
  education: [
    {
      degree: 'Bachelors of Science',
      school: 'Queen\'s University',
      description: 'Major in Computer Science, Minor in History',
      deans_list: 'Dean\'s List 2023'
    }
  ],
  projects: [
    {
      title: "Queen's MuLab Vertical Farm Data Dashboard",
      content: `Queen's MuLab Vertical Farm Data Dashboard Project
Project Overview
The Queen's MuLab Vertical Farm project is a collaboration between Christian Muise's MuLab and the Queen's Vertical Farming Team. For our Capstone Project our MuLab team was tasked with developing the software to store the data and streaming footage from the Queen's Vertical Farm from their Google Smarthome monitors and camera system. This project bridges the gap between agricultural data and researcher accessibility, enabling the QVFT to make data driven decisions in their operations. 

My key achievements on this project:

I designed and implemented custom dashboards using Elasticsearch displaying critical agricultural metrics such as real-time precipitation monitoring, light, exposure tracking across growth zones, and temperature distribution visualization. These metrics set up the QVFT to easily correlate environmental factors with plant development and perform crop yield analysis. 
The result was a software that could make informed decisions for optimal growing conditions, intervene in plant growzones that were showing indicators of suboptimal yields, and forecast growth patterns and trends for crop yields. 

Data Management & Security

I implemented the following security measures:

Structured data storage protocols for the google home systems streaming data to logstash. I implemented secure deletion procedures with Role Based Access for the MuLake application as well as platform migration guidelines in the event that a later Capstone group would need to restructure the website from the ground up. These migration guidelines included Data backup and recovery protocols. 

Future-Proofing & Improvements

Future proofed the MuLab project by proposing and documenting future enhancements such as data drift detection, enhanced security using Kerberos Authentication Tokens, automated anomaly detection using Neural Networks and TensorFlow, and adding RTOS using the native Kibana security features

Technologies Used

Frontend: Javascript and Kibana for visualization and user interface
Backend: Elasticsearch, Logstash, Google home assistant
Data Processing: Logstash for data pipeline management
Dev Tools: Docker, GitHub`,
      media: {
        type: 'image',
        src: '/qvft_cad.jpg'
      },
      link: 'https://qvft.ca',
      linkText: 'View Dashboard'
    },
    {
      title: 'AnimeBible',
      content: `AnimeBible is an AI chatbot for anime discussions and recommendations, developed in collaboration with Queen's University alumni. The project combines Open-AI's GPT-4o model with finetuning methods to detect users intent and offer a wide range of services including: Anime recommendation based on users previous watches, plot summaries of recently released anime episodes, and solving powerscaling debates between different characters (Goku vs Naruto anyone?). Future additions to the platform include watchalong livestream series with Ishtar, the AI personality, and animation of anime fights using LumenAI. 

Some key technical achievements I've contributed to the project:

Backend Development

Implemented full backend deployment including Docker containerization
Set up and managed PostgreSQL database for user information
Integrated Redis caching for third-party cookies
Deployed and managed website hosting on Google Firebase
Developed custom Docker configurations with specialized flags for frontend/backend testing

AI Integration & Optimization

Currently working on fine-tuning and RAG (Retrieval-Augmented Generation) solutions
Improved bot response latency and lookup speeds
Enhanced accuracy for:

TV show release date queries
Plot synopsis retrieval
Personalized show recommendations based on watch history

Security & User Management

Implemented security measures including Protection against SQL injection, Prompt injection, Cross-site scripting prevention and custom error handling
Designed and implemented our secure login system using OAuth 2
Created user database architecture in Postgres, and configured Redis database for third party cookies from Anilist. 

Technical Stack
Frontend: React.js
Backend: Node.js, Express.js
APIs: OpenAI API, AniList GraphQL API
Databases: PostgreSQL, MongoDB
Caching: Redis
Hosting: Firebase
Authentication: OAuth2
Development Tools: Docker, GitHub`,
      media: {
        type: 'video',
        src: '/animebible_demo.mp4'
      },
      link: 'https://animebible.net',
      linkText: 'Try Animebible'
    }
  ],
  skills: {
    languages: ['Javascript', 'Python', 'Rust', 'GO/Flutter', 'C/C++', 'Tensorflow', 'Pandas'],
    webTechnologies: ['React', 'Vue', 'Nextjs', 'Nodejs', 'ExpressJs', 'CSS', 'Tailwind', 'HTML'],
    data: ['Postgres', 'MongoDB', 'MySQL', 'SQLite', 'Excel', 'Conda', 'Jupyter', 'Google Analytics', 'Power BI'],
    devOps: ['AWS Lightsail', 'Firebase', 'Azure', 'Git', 'REST API', 'Redis', 'Docker', 'Axios', 'Cookie-parser']
  },
  socials: {
    instagram: 'https://www.instagram.com/jshantz91/',
    linkedin: 'https://www.linkedin.com/in/christoph-shantz-20b816220/',
    github: 'https://github.com/yobbles',
    email: 'christoph_shantz@outlook.com',
  }
};