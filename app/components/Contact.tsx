"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <div className=" relative py-20 overflow-hidden bg-[#f8f9f5]" >
      <div className="container mx-auto px-4">
        <div className="text-center flex justify-center mb-20">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex flex-row items-center">
              <h2 className="text-8xl font-bold font-roboto_condensed text-primary">
                HAVE AN IDEA?
              </h2>
              <p className="text-sm max-w-[250px] font-semibold font-source_code_pro text-left mx-8">
                I UNDERSTAND THAT YOU MIGHT BE BUSY, BUT ANY ASSISTANCE YOU
                COULD PROVIDE WOULD BE GREATLY APPRECIATED.
              </p>
            </div>
            <div className="flex flex-row items-center">
              <div className="w-[30%] mx-4 relative">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex h-20 items-center justify-center rounded-full border border-input px-8  text-sm font-semibold shadow-sm font-source_code_pro"
                  >
                    SEND ME A EMAIL <ArrowUpRight size={17} className="mx-2" />
                  </Link>
                </motion.div>
              </div>
              <h2 className="text-8xl w-auto font-bold text-primary text-center whitespace-nowrap">
                TELL ME ABOUT IT
              </h2>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
