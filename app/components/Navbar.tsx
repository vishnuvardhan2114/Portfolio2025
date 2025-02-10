"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import vishnu from "@/public/Vishnu.svg";

const navLinks = [
  { href: "", label: "WORKS" },
  { href: "", label: "ABOUT" },
  { href: "", label: "CONTACT" },
  // { href: "/testimonial", label: "HIRE ME" },
];

const socialLinks = [
  { href: "https://github.com/vishnuvardhan2114", label: "GITHUB" },
  // { href: "#", label: "INSTAGRAM" },
  { href: "https://www.linkedin.com/in/vishnu-vardhan-14102002v/", label: "LINKEDIN" },
  { href: "/Vishnu_resume.pdf", label: "RESUME", download: true }, // Update this line
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="top-0 left-0 right-0 z-50 py-3"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-semibold font-dancing_script">
          <Image
            src={vishnu}
            alt="logo"
            width={130}
            height={100}
            priority
            className="filter-black w-20 h-16 md:w-32 md:h-20"
          />
        </Link>

        {/* Menu Icon for smaller devices */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            ☰
          </button>
        </div>

        {/* Navigation Links for larger devices */}
        <ul className="hidden md:flex items-center gap-12 bg-[#f8f9f5] rounded-full px-10 py-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[16px] hover:text-primary font-source_code_pro transition-colors relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-primary after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Links for larger devices */}
        <ul className="hidden md:flex flex-col items-center gap-2">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                download={link?.download}
                className="text-sm flex items-center text-left hover:text-primary font-source_code_pro font-semibold transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Slide-in Menu for smaller devices */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? 0 : "100%" }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-40 md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <button onClick={toggleMenu} className="text-2xl p-4">
          ✕
        </button>
        <ul className="flex flex-col items-center gap-6 mt-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-lg hover:text-primary font-source_code_pro transition-colors"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
          {socialLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                download={link?.download}
                className="text-lg hover:text-primary font-source_code_pro transition-colors"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
}
