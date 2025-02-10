"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <div className="relative sm:py-20 py-8 overflow-hidden bg-[#f8f9f5]">
      <div className="container mx-auto px-4">
        <div className="text-center flex flex-col lg:flex-row justify-center sm:mb-20">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex flex-col lg:flex-row items-center">
              <h2 className="text-5xl lg:text-8xl sm:my-0 my-10 font-bold font-roboto_condensed text-primary">
                HAVE AN IDEA?
              </h2>
              <p className="text-xs lg:text-sm max-w-[250px] font-semibold font-source_code_pro text-left mx-4 lg:mx-8">
                I UNDERSTAND THAT YOU MIGHT BE BUSY, BUT ANY ASSISTANCE YOU
                COULD PROVIDE WOULD BE GREATLY APPRECIATED.
              </p>
              <div className="mx-2 lg:mx-4 relative">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href="/Vishnu_resume.pdf"
                    download={true}
                    className="inline-flex h-16 lg:h-20 items-center justify-center rounded-full border border-input px-6 lg:px-8 text-xs lg:text-sm font-semibold shadow-sm font-source_code_pro"
                  >
                    TAKE MY RESUME <ArrowDown size={15} className="mx-1 lg:mx-2" />
                  </Link>
                </motion.div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-[30%] mx-2 lg:mx-4 relative">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex h-16 lg:h-20 items-center justify-center rounded-full border border-input px-6 lg:px-8 text-xs lg:text-sm font-semibold shadow-sm font-source_code_pro"
                  >
                    SEND ME A EMAIL <ArrowUpRight size={15} className="mx-1 lg:mx-2" />
                  </Link>
                </motion.div>
              </div>
              <h2 className="text-4xl sm:my-0 my-8 lg:text-8xl w-auto font-bold text-primary text-center whitespace-nowrap">
                TELL ME ABOUT IT
              </h2>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}