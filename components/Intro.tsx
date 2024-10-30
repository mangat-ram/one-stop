"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
// import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";
// import { useActiveSectionContext } from "@/context/ActiveSectionContext";

import { FaArrowRight } from "react-icons/fa";

export default function Intro(){
  const { ref } = useSectionInView("Home", 0.5);
  // const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      className="-mt-8 mb-28 max-w-[60rem] mx-auto text-center sm:mb-0 font-customPop scroll-mt-[100rem] h-screen"
      id="home"
      ref={ref}
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 mt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.25
          }}
          className="flex flex-col items-center sm:items-start mt-4"
        >
          <div className="flex justify-center items-center flex-col">
            <p className="font-spaceMono text-2xl sm:text-5xl font-extrabold">
            <span className="bg-red-500 text-white rounded-xl px-3">OneStop</span> Solutions</p> 
            <p className="font-spaceMono text-2xl sm:text-5xl font-extrabold mt-3">For All Your Printer Problems</p>
          <Button size="lg" className="font-spaceMono text-xl sm:text-2xl p-4 sm:p-6 leading-tight mt-4 flex items-center justify-center">
            Get An Answer
            <FaArrowRight />
          </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.25
          }}
          className="flex-shrink-0"
        >
          <Image
            src="/printer1.webp"
            alt="printer"
            width={192}
            height={192}
            quality={95}
            priority={true}
            className="h-60 w-80 rounded-xl object-cover border-[0.2rem] border-white shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
