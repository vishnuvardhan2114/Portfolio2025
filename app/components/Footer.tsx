"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FileDown, Github, Linkedin } from "lucide-react";

const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["40%", "-25%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <footer className="py-20 bg-background relative overflow-hidden" ref={ref}>
      <motion.div className="absolute inset-0" style={{ y, opacity }}>
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/5" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-primary/10" />
      </motion.div>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row justify-between gap-8 py-12 border-t"
        >
          <div className="relative">
            <h3 className="text-base lg:text-lg mb-4 font-source_code_pro font-semibold">
              EMAIL ME FOR QUICK CONVERSATION
            </h3>
            <Link
              href="mailto:contact@vishnuvardhan.site"
              className="text-2xl lg:text-4xl font-roboto_condensed font-bold text-primary hover:opacity-80"
            >
              contact@vishnuvardhan.site
            </Link>
          </div>

          <div className="relative">
            <h3 className="text-sm lg:text-[20px] mb-4 font-source_code_pro font-extrabold">
              QUICK LINKS
            </h3>
            <ul className="space-y-2 font-source_code_pro font-medium">
              <li>
                <Link href="/works" className="hover:text-primary">
                  WORKS
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">
                  ABOUT ME
                </Link>
              </li>
              <li>
                <Link href="/testimonial" className="hover:text-primary">
                  TESTIMONIAL
                </Link>
              </li>
            </ul>
          </div>

          <div className="relative">
            <h3 className="text-sm lg:text-[20px] mb-4 font-source_code_pro font-extrabold">
              ADDRESS
            </h3>
            <address className="not-italic space-y-1 font-source_code_pro font-medium">
              <p>MADURAI - TAMILNADU</p>
              <p>INDIA</p>
            </address>
          </div>

          <div className="flex flex-col justify-center relative">
            <h3 className="text-sm lg:text-[20px] text-left mb-4 font-source_code_pro font-extrabold">
              FOLLOW
            </h3>
            <ul className="space-y-2 font-source_code_pro font-medium">
              <li>
                <Link
                  href="https://www.linkedin.com/in/vishnu-vardhan-14102002v/"
                  className="hover:text-primary flex items-center"
                >
                  <Linkedin className="mr-2" />
                  LINKEDIN
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/vishnuvardhan2114"
                  className="hover:text-primary flex items-center"
                >
                  <Github className="mr-2" />
                  GITHUB
                </Link>
              </li>
              <li>
                <Link
                  href="/Vishnu_resume.pdf"
                  download={true}
                  className="hover:text-primary flex items-center"
                >
                  <FileDown className="mr-2" />
                  RESUME
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="text-center font-source_code_pro font-semibold text-xs lg:text-sm mt-12">
          ©2025 VISHNUVARDHAN | ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
};

export default Footer;
