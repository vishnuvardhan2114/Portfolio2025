"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

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
       <motion.div className="absolute inset-0 " style={{ y, opacity }}>
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/5" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-primary/10" />
      </motion.div>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-between flex-row gap-8 py-12 border-t"
        >
          <div>
            <h3 className="text-lg mb-4 font-source_code_pro font-semibold">EMAIL ME FOR QUICK CONVERSATION</h3>
            <Link
              href="mailto:contact@vishnuvardhan.site"
              className="text-4xl font-roboto_condensed font-bold text-primary hover:opacity-80"
            >
              contact@vishnuvardhan.site
            </Link>
          </div>

          <div className="relative">
            <h3 className="text-[20px] mb-4 font-source_code_pro font-extrabold">QUICK LINKS</h3>
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

          <div>
            <h3 className="text-[20px] mb-4 font-source_code_pro font-extrabold">ADDRESS</h3>
            <address className="not-italic space-y-1 font-source_code_pro font-medium">
              <p>EMMASINGEL 14, 3RD FLOOR</p>
              <p>5611 AZ EINDHOVEN</p>
              <p>THE NETHERLANDS</p>
            </address>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-[20px] text-left mb-4 font-source_code_pro font-extrabold">FOLLOW</h3>
            <ul className="space-y-2 font-source_code_pro font-medium">
            <li>
                <Link href="#" className="hover:text-primary flex items-center">
                  <Facebook className="mr-2" />
                  FACEBOOK
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary flex items-center">
                  <Instagram  className="mr-2" />
                  INSTAGRAM
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary flex items-center">
                  <Twitter className="mr-2" />
                  TWITTER
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="text-center font-source_code_pro font-semibold text-sm mt-12">
          ©2023 ALBERT | ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
};

export default Footer;
