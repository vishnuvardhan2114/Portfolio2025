"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ProjectImage1 from "@/public/works/Screenshot 2024-10-21 181717.png";
import ProjectImage2 from "@/public/works/project2new.png";
import ProjectImage3 from "@/public/works/project3.png";
import { ArrowUpRight } from "lucide-react";
import { WorksMobile } from "./WorksMobile";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Works() {
  return (
    <section className="py-20 min-h-screen bg-[#f8f9f5]" >
      <div className="container mx-auto px-4">
        <div className="hidden md:grid lg:grid-cols-3 gap-12">
          {/* Left column with title */}
          <div>
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-9xl font-roboto_condensed font-bold text-primary"
            >
              WORKS
              {/* project 1 */}
            </motion.h2>
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="w-[320px] mt-[10%]"
            >
              <Link href="" className="block">
                <div className="relative w-[400px] mb-4 overflow-hidden shadow-lg">
                  <Image
                    src={ProjectImage1}
                    alt="GreyWall"
                    width={1000}
                    height={1000}
                    className="object-cover transition-transform duration-100 rounded-md group-hover:scale-110"
                  />
                </div>
                <div className="flex items-start font-roboto_condensed">
                  <h3 className="text-3xl font-bold">Grey Wall interiors</h3>
                  <span className="text-[12px] px-1 font-semibold font-source_code_pro ">
                    2024
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-sm font-source_code_pro font-semibold hover:underline">
                    VIEW PROJECTS
                  </span>
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    className="text-sm"
                  >
                    <ArrowUpRight size={17} />
                  </motion.span>
                </div>
              </Link>
            </motion.div>
          </div>
          <div>
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className=" mt-[15%]"
            >
              <Link href="" className="block">
                <div className="relative w-[450px] mb-4 overflow-hidden shadow-lg">
                  <Image
                    src={ProjectImage2}
                    alt="Getavisa"
                    width={1000}
                    height={1000}
                    className="object-cover transition-transform duration-100 rounded-md group-hover:scale-110"
                  />
                </div>
                <div className="flex items-start font-roboto_condensed">
                  <h3 className="text-3xl font-bold">Getavisa</h3>
                  <span className="text-[12px] px-1 font-semibold font-source_code_pro ">
                    2025
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-sm font-source_code_pro font-semibold hover:underline">
                    VIEW PROJECTS
                  </span>
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    className="text-sm"
                  >
                    <ArrowUpRight size={17} />
                  </motion.span>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Right column with description */}
          <div className="lg:text-start font-source_code_pro font-semibold">
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm max-w-xs ml-auto"
            >
              DURING HIS THREE PROFESSIONAL EXPERIENCES, THEO HAD THE
              OPPORTUNITY TO WORK ON A WIDE VARIETY OF PROJECTS.
            </motion.p>
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="min-w-full mt-[10%] ml-12"
            >
              <Link href="" className="block">
                <div className="relative w-[420px] mb-4 overflow-hidden shadow-lg">
                  <Image
                    src={ProjectImage3}
                    alt="GreyWall"
                    width={1000}
                    height={1000}
                    className="object-cover transition-transform duration-100 rounded-md group-hover:scale-110"
                  />
                </div>
                <div className="flex items-start font-roboto_condensed">
                  <h3 className="text-3xl font-bold">BookWise</h3>
                  <span className="text-[12px] px-1 font-semibold font-source_code_pro ">
                    2025
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-sm font-source_code_pro font-semibold hover:underline">
                    VIEW PROJECTS
                  </span>
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    className="text-sm"
                  >
                    <ArrowUpRight size={17} />
                  </motion.span>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="md:hidden relative">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-roboto_condensed font-bold text-primary mb-5"
          >
            WORKS
            {/* project 1 */}
          </motion.h2>
          <WorksMobile />
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className=" text-start sm:mt-0 mt-6"
        >
          <Link
            href="/works"
            className="inline-flex h-12 items-center justify-center rounded-full border border-dashed font-source_code_pro border-black px-8 text-sm font-bold shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            VIEW ALL <ArrowUpRight className="mx-1" size={17} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
