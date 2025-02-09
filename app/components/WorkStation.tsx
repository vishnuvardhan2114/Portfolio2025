"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Work from "@/public/office.webp";
import { Milestone } from "lucide-react";
import { useRef } from "react";

const whatido = [
  "END-TO-END DEVELOPMENT",
  "SCALABLE ARCHITECTURE ",
  "THIRD-PARTY INTEGRATIONS",
  "PERFORMANCE OPTIMIZATION",
  "SECURITY & AUTHENTICATION",
  "PROJECT DEPLOYMENT & MANAGEMENT",
];

export default function Workstation() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <section className="py-20 min-h-screen bg-background overflow-hidden relative" ref={ref}>
      <motion.div className="absolute inset-0 " style={{ y, opacity }}>
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/5" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-primary/10" />
      </motion.div>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 ">
          <div>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xl font-source_code_pro font-semibold max-w-xs"
            >
              World Visa | October 2024 – Present
            </motion.p>
          </div>
          <div className="text-left">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm max-w-xs ml-auto font-source_code_pro font-semibold"
            >
              AS A FULL STACK DEVELOPER AT WORLD VISA, I DESIGNED, DEVELOPED,
              AND DEPLOYED GET A VISA, THE GREY WALL INTERIORS, AND WORLD VISA
              GROUP, MANAGING THEIR ARCHITECTURE AND SCALABILITY
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center "
          >
            <div className="flex items-center relative">
              <div className="absolute left-[-25%] top-[70%] z-10">
                <Image
                  src={Work}
                  alt="Workstation setup"
                  width={350}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <h2 className="text-[180px] font-bold text-primary text-center font-roboto_condensed relative z-0">
                EXPERIENCE
              </h2>
            </div>
          </motion.div>

          <div className="flex justify-center">
            <div className="">
              <h3 className="text-xl  mb-4 font-source_code_pro font-bold">
                WHAT DO I DO?
              </h3>
              <p className="text-sm max-w-xl font-source_code_pro font-semibold">
              <motion.ul 
                className="grid grid-cols-2 gap-4"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.6, 
                    },
                  },
                }}
              >
                  {whatido?.map((point, index) => (
                    <motion.li 
                      key={index} 
                      className="flex"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    > 
                      <Milestone className="mx-2 text-primary"/> {point}
                    </motion.li>
                  ))}
              </motion.ul>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
