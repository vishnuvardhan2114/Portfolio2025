"use client";

import Image from "next/image";
// import Link from "next/link";
import { motion } from "framer-motion";
import AboutImage1 from "@/public/about/about1.webp";
import Avatar from "@/public/about/aboutusavatar-removebg.png";
import html from "@/public/toolIcons/html.png";
import css from "@/public/toolIcons/css.png";
import js from "@/public/toolIcons/javascript.png";
import ts from "@/public/toolIcons/typescript-removebg-preview.png";
import tailwindCss from "@/public/toolIcons/tailwindcss-removebg-preview.png";
import reactjs from "@/public/toolIcons/react.png";
import nextjs from "@/public/toolIcons/nextjs.png";
import redis from "@/public/toolIcons/redis-removebg-preview.png";
import mysql from "@/public/toolIcons/mysql-removebg-preview.png";
import mongodb from "@/public/toolIcons/mongodb-removebg-preview.png";
import git from "@/public/toolIcons/git.png";
import nodejs from "@/public/toolIcons/nodejs.png";
import StickyNote from "@/public/stickyPad2.png";
import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

const toolcard = [
  {
    icon: html,
    title: "HTML",
  },
  {
    icon: css,
    title: "CSS",
  },
  {
    icon: js,
    title: "JavaScript",
  },
  {
    icon: ts,
    title: "TypeScript",
  },
  {
    icon: tailwindCss,
    title: "Tailwind CSS",
  },
  {
    icon: reactjs,
    title: "React",
  },
  {
    icon: nextjs,
    title: "Next.js",
  },
  {
    icon: redis,
    title: "Redis",
  },
  {
    icon: mysql,
    title: "MySQL",
  },
  {
    icon: mongodb,
    title: "MongoDB",
  },
  {
    icon: git,
    title: "Git",
  },
  {
    icon: nodejs,
    title: "Node.js",
  },
];

export default function About() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    };
    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="sm:py-20 py-10 min-h-screen bg-[#f8f9f5]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row sm:gap-8">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center text-center gap-10"
          >
            <h2 className="text-5xl lg:text-9xl font-bold text-primary font-roboto_condensed mb-4">
              PASSIONATE
            </h2>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-[200px] s,::w-[300px] h-[86px] sm:h-[100px] bg-[#C1E1C1] rounded-xl mb-3"
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute top-[-52px] left-[12px] sm:top-[-92px] sm:left-[25px] w-[180px] lg:w-[250px] flex mx-auto"
              >
                <Image
                  src={Avatar}
                  alt="About image"
                  width={1000}
                  height={1000}
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left max-w-full lg:max-w-[250px] font-semibold font-source_code_pro sm:mt-4"
          >
            <p className="text-xs lg:text-sm">
              INNOVATION AND STORYTELLING. INTERESTED ABOUT CONCEPTION AND
              CREATING INTERACTIVE EXPERIENCES.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mt-5 sm:mt-0 sm:mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={AboutImage1}
              alt="Development concept"
              width={500}
              height={300}
              className="rounded-lg opacity-80"
            />
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center relative"
          >
            <h2 className="text-5xl lg:text-[94px] flex w-full lg:w-[70%] font-bold text-primary mb-8 font-roboto_condensed">
              ABOUT DEVELOPMENT
            </h2>
            <Image
              src={StickyNote}
              alt="Experience Note"
              width={280}
              height={500}
              className="absolute right-0 sm:top-0 -top-14 w-24 h-24 lg:w-[280px] lg:h-[300px]"
            />
            <div className="absolute right-[13px] -top-[20%] sm:right-0 sm:-top-[30%] sm:w-[280px] sm:h-[500px] flex flex-col items-center justify-center">
              <h3 className="text-4xl lg:text-8xl font-londrina_sketch font-bold">1+</h3>
              <p className="text-[6px] lg:text-sm font-source_code_pro font-semibold">years of experience</p>
            </div>
            <div className="space-y-6">
              <div>
                <motion.h3 className="text-xl lg:text-3xl font-bold flex items-center font-roboto_condensed underline">
                  SKILLS
                  <motion.div
                    initial={{ y: -2, opacity: 0 }}
                    animate={{ y: 2, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    <ArrowDown
                      className="mx-2 w-5 h-5 lg:w-6 lg:h-6"
                    />
                  </motion.div>
                </motion.h3>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="w-full h-[150px] overflow-hidden" ref={scrollRef}>
          <div className="flex flex-row">
            {toolcard.map((tool, index) => (
              <motion.div
                key={index}
                className="flex-none w-32 lg:w-40 h-32 lg:h-40 flex flex-col items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={tool.icon}
                  alt={tool.title}
                  className="w-20 h-20 lg:w-24 lg:h-24"
                />
                <p className="mt-2 text-center text-xs lg:text-base font-cabin capitalize font-semibold">
                  {tool.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        {/* ... existing code ... */}
      </div>
    </section>
  );
}
