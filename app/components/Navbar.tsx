"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import vishnu from  "@/public/Vishnu.svg"
const navLinks = [
  { href: "/works", label: "WORKS" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
  // { href: "/testimonial", label: "HIRE ME" },

]

const socialLinks = [
  { href: "#", label: "GITHUB" },
  // { href: "#", label: "INSTAGRAM" },
  // { href: "#", label: "TWITTER" },
  { href: "#", label: "LINKEDIN" },
]

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className=" top-0 left-0 right-0 z-50 py-3"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-semibold font-dancing_script">
        <Image 
            src={vishnu}
            alt="logo"
            width={130}
            height={100}
            priority
            className="filter-black"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-12 bg-white rounded-full px-10 py-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-[16px] hover:text-primary font-source_code_pro transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="hidden md:flex flex-col items-center gap-2">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-sm hover:text-primary font-source_code_pro font-semibold transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}

