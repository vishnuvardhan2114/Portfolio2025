import Getavisa from "@/public/works/getavisa.png";
import GreyWall from "@/public/works/greywall.png";
import BookWise from "@/public/works/project3.png";
import SubcriptionApi from "@/public/works/subcription-api.png";
import YCDirectory from "@/public/works/YCDirectory.png";
import HooBank from "@/public/works/HooBank.png";


import GetavisaLogo from "@/public/company-icons/getavisaLogo.svg";
import GreyWallLogo from "@/public/company-icons/grey-wall.svg";
// import BookWiseLogo from "@/public/company-icons/bookwise.svg";
import PersonalLogo from "@/public/company-icons/vishnu-logo.png";

import { StaticImageData } from "next/image";

interface Project {
  projectName: string;
  projectImage: StaticImageData;
  githubLink: string;
  techStack: string[];
  companyLogo: StaticImageData;
  rolePosition: string;
}

// Create an array of projects
const projects: Project[] = [
  {
    projectName: "Getavisa",
    projectImage: Getavisa,
    githubLink: "",
    techStack: [
      "Next.js",
      "RAG",
      "ML",
      "GCP",
      "Convex",
      "AI Agents",
      "TailwindCSS",
      "Razorpay",
    ],
    companyLogo: GetavisaLogo,
    rolePosition: "Lead Full Stack Developer",
  },
  {
    projectName: "GreyWall",
    projectImage: GreyWall,
    githubLink: "",
    techStack: ["Next.js", "Node.js", "Outstatic", "TailwindCSS"],
    companyLogo: GreyWallLogo,
    rolePosition: "Lead Full Stack Developer",
  },
  {
    projectName: "BookWise",
    projectImage: BookWise,
    githubLink: "https://github.com/vishnuvardhan2114/bookwise",
    techStack: ["Next.js", "Node.js", "AI", "Firebase", "NextAuth"],
    companyLogo: PersonalLogo,
    rolePosition: "Full Stack Developer",
  },
  {
    projectName: "Subcription API",
    projectImage: SubcriptionApi,
    githubLink: "https://github.com/vishnuvardhan2114/Subscription-api",
    techStack: ["Node.js", "Express", "Upstash", "Arcjet"],
    companyLogo: PersonalLogo,
    rolePosition: "Backend Developer",
  },
  {
    projectName: "YCDirectory",
    projectImage: YCDirectory,
    githubLink: "https://github.com/vishnuvardhan2114/startup_directory",
    techStack: ["Next.js", "Auth.js", "AppWrite"],
    companyLogo: PersonalLogo,
    rolePosition: "Full Stack Developer",
  },
  {
    projectName: "HooBank",
    projectImage: HooBank,
    githubLink: "https://github.com/vishnuvardhan2114/Responsive_landingpage-hoobank",
    techStack: ["Next.js", "TailwindCSS"],
    companyLogo: PersonalLogo,
    rolePosition: "FrontDeveloper",
  },
];

export default projects;
