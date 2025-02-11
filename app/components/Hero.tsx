"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import MyImage from "@/public/hero/myImage2-removebg.png";
import { CodeXml } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const isSmallDevice = useMediaQuery({ maxWidth: 640 });
  return (
    <div
      ref={ref}
      className="relative sm:min-h-screen min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background circles */}
      <motion.div className="absolute inset-0 " style={{ y, opacity }}>
        <div className="absolute sm:top-1/4 top-20 sm:right-1/4 sm:w-[400px] sm:h-[400px] w-[120px] h-[120px] rounded-full bg-primary/5" />
        <div className="absolute bottom-1/4 left-1/4 w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] rounded-full bg-primary/10" />
      </motion.div>
    

      <div className="container mx-auto px-4 font-roboto_condensed">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center flex  mb-14 font-roboto_condensed font-bold justify-center text-2xl sm:text-4xl"
        >
          HI THERE, I&apos;M VISHNUVARDHAN
        </motion.h2>

        <div className="relative">
          {/* Main image */}
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ y, opacity }}
            className="absolute sm:left-[13%] -right-[94px] -bottom-[70%] sm:-bottom-[32%] transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[1000px] sm:h-[1000px] z-10"
          >
            <Image
              src={MyImage}
              alt="Portrait"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          {/* Text layers */}
          <div className="grid grid-cols-2 gap-8">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-8xl font-extrabold text-primary font-bebas_neue ml-[6%]"
            >
              FULL
            </motion.h1>
            <motion.h1
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-8xl font-extrabold text-primary sm:ml-[48%] ml-[14%] font-bebas_neue"
            >
              STACK
            </motion.h1>
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl sm:text-8xl font-bold text-primary col-span-2 text-center sm:mt-4 font-bebas_neue"
            >
              DEVELOPER
            </motion.h1>
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl sm:text-8xl font-bold text-primary col-span-2 text-center mt-4 font-bebas_neue"
            >
              <CodeXml size={isSmallDevice ? 60 : 160} />
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute sm:block hidden font-source_code_pro font-semibold top-1/2 right-0 max-w-[140px] sm:max-w-[200px] text-sm sm:text-base" // Adjusted text size and max-width for responsiveness
          >
            I AM A CREATIVE FRONT-END DEVELOPER WITH A STRONG FOCUS ON MOTION
            AND INTERACTION.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
