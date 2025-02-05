// lib/types.ts
export interface TimelineItem {
    title: string;
    date: string;
    description: string;
    media: string;
    links?: Array<{
      url: string;
      text: string;
    }>;
    side: 'L' | 'R';
  }
  
  export interface Education {
    degree: string;
    school: string;
    description: string;
    deans_list?: string;
  }
  
  export interface Project {
    title: string;
    content: string;
    media: {
      type: 'video' | 'image';
      src: string;
    };
    link: string;
    linkText?: string;
  }
  
  export interface Skills {
    languages: string[];
    webTechnologies: string[];
    data: string[];
    devOps: string[];
  }
  
  export interface Socials {
    instagram: string;
    linkedin: string;
    github: string;
    email: string;
  }
  
  export interface PortfolioData {
    name: string;
    title: string;
    profilePicture: string;
    whatIDo: string;
    whatILike: string;
    goodreadsLink: string;
    backgroundImage: string;
    backgroundLocation: string;
    resumePath: string;
    timeline: TimelineItem[];
    education: Education[];
    projects: Project[];
    skills: Skills;
    socials: Socials;
  }