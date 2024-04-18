import airBnbClone from "@/public/airbnbclone.png";
import iqra from "@/public/iqra.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// export const experiencesData = [
//   {
//     title: "Graduated bootcamp",
//     location: "Miami, FL",
//     description:
//       "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
//     icon: React.createElement(LuGraduationCap),
//     date: "2019",
//   },
//   {
//     title: "Front-End Developer",
//     location: "Orlando, FL",
//     description:
//       "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   },
// ] as const;

export const projectsData = [
  {
    title: "Airbnb Clone",
    description:
      "I created an Airbnb clone for renting accommodations. It demonstrates my web development skills and ability to build scalable platforms with strong features.",
    tags: [
      "Next.js",
      "MongoDB",
      "Prisma",
      "zustand",
      "react-leaflet",
      "next-auth",
      "next-cloudinary",
    ],
    link: "https://rent-torent.vercel.app/",
    imageUrl: airBnbClone,
  },
  {
    title: "Iqra",
    description:
      "I developed an Iqra website featuring Quran, Tafsir, and Hadith. With recitations by 150 esteemed sheikhs, it's a premier platform for Islamic learning.",
    tags: [
      "Next.js",
      "React",
      "Tailwind",
      "Quran API",
      "Hadith API",
      "Tafsir API",
      "Responsive Design",
    ],
    link: "https://iqra-v1.vercel.app/",
    imageUrl: iqra,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
