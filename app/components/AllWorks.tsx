"use client";
import projects from '@/constants/index';
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from 'react';
import WorkCard from '../components/WorkCard';

const AllWorks = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <div
            ref={ref}
            className="relative sm:min-h-screen min-h-[90vh] py-16 flex items-center overflow-hidden"
        >
            <motion.div className="absolute inset-0 " style={{ y, opacity }}>
                <div className="absolute sm:top-1/4 top-20 sm:right-1/4 sm:w-[400px] sm:h-[400px] w-[120px] h-[120px] rounded-full bg-primary/5" />
                <div className="absolute bottom-1/4 left-1/4 w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] rounded-full bg-primary/10" />
            </motion.div>

            <div className="container relative mx-auto px-4">
                <motion.h2
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="sm:text-9xl text-6xl mb-6 font-roboto_condensed font-bold text-primary"
                >
                    ALL WORKS
                </motion.h2>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 '>
                    {projects.map((data, index) => (
                        <div key={index}>
                            <WorkCard data={data} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllWorks