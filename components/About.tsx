"use client";

import React from "react";
import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";

export default function About() {
  //   const { ref } = useSectionInView("About");

  return (
    <motion.section
      //   ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After completing my studies in{" "}
        <span className="font-medium">Engineering</span>, I made a pivotal
        decision to delve into the world of programming, driven by my passion. I
        enrolled in a coding bootcamps where I immersed myself in the realm of{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My ultimate thrill in programming</span> lies
        in problem-solving; the euphoria that accompanies unraveling complex
        challenges is unmatched. My foundational toolkit comprises{" "}
        <span className="font-medium">
          React, Next.js, Node.js, Mongodb, and PostgreSQL
        </span>
        , complemented by my proficiency in TypeScript and Prisma. However, my
        thirst for knowledge propels me to continuously explore new
        technologies. At present, I am actively seeking opportunities for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer, where I can contribute my expertise and passion for
        innovation.
      </p>
    </motion.section>
  );
}
