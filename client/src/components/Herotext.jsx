"use client"
import React, { useState, useEffect } from "react";
import { FlipWords } from "./ui/flip-words";
import Image from 'next/image';
import image from '../../public/CC_logo.png';
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
function HeroText() {
  const words = ["Solutions", "Ideas", "Innovation", "Creativity"];
  const [isMobile, setIsMobile] = useState(false);

  // Function to update the layout based on screen width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Define mobile as width <= 768px
    };
    
    handleResize(); // Check initial screen width
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center px-4">
      <div
        className={`${
          isMobile ? "grid grid-rows-2 gap-4 items-center" : "grid grid-cols-2 gap-4 items-center"
        } text-2xl md:text-4xl  font-normal text-neutral-600 dark:text-neutral-400`}
      >
        <div className="flex  justify-center">
          <Image src={image} alt="Aceternity Logo" width={300} height={150} />
         
        </div>
        <div className={`${isMobile ? "ml-5 sm:ml-0 text-2xl relative" : "text-left"}`}>
        {/* <div className=" text-5xl font-semibold text-[#01E6F1] my-5"> &lt;CC_Rcoe/&gt;</div> */}
          Empowering  
          <FlipWords  words={words} /> <br />
          Through Collaboration.
        </div>
      </div>
      <div className="flex gap-8">

      <a href="https://www.instagram.com/cc_rcoe/profilecard/?igsh=MW54bHhrdDJjcXFuaw==">
      <div className="flex justify-center">
        <button className=" bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-s font-semibold leading-6 text-white">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
            <span>{`Instagram`}</span>
            {<Instagram />}
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        </button>
      </div>
      </a>
      <a href="https://www.linkedin.com/company/code-cell-rcoe/">
      <div className="flex justify-center">
        <button className=" bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-s font-semibold leading-6 text-white">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
            <span>{"Linkedin "}</span>
            <Linkedin />
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        </button>
      </div>
      </a>
      </div>
    </div>
  );
}

export default HeroText;
