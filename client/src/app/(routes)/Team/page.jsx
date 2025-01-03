"use client";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Timeline } from "@/components/ui/timeline";
import  InfiniteMovingCards  from "@/components/ui/infinite-moving-cards";
import teamData from '../../data/team.json';



function Page() {
  const [prof, setProf] = useState([]);
  const [president, setPresident] = useState([]);
  const [vpresident, setVpresident] = useState([]);
  const [execd, setExecd] = useState([]);
  const [execa, setExeca] = useState([]);
  const [head, setHead] = useState([]);
  const [tech, setTech] = useState([]);
  const [management, setManagement] = useState([]);
  const [marketing, setMarketing] = useState([]);
  const [tech1, setTech1] = useState([]);
  const [management1, setManagement1] = useState([]);
  const [marketing1, setMakreting1] = useState([]);

  useEffect(() => {
    try {
      setProf(teamData.prof); // Note: we access the 'marketing' array from the JSON
    } catch (error) {
      toast({
        title: "There was an error loading the team data",
      });
    }
  }, []);

  useEffect(() => {
    try {
      setPresident(teamData.president); // Note: we access the 'marketing' array from the JSON
    } catch (error) {
      toast({
        title: "There was an error loading the team data",
      });
    }
  }, []);

  useEffect(() => {
    try {
      setVpresident(teamData.vpresident); // Note: we access the 'marketing' array from the JSON
    } catch (error) {
      toast({
        title: "There was an error loading the team data",
      });
    }
  }, []);

  useEffect(() => {
    try {
      setExecd(teamData.execd); // Note: we access the 'marketing' array from the JSON
    } catch (error) {
      toast({
        title: "There was an error loading the team data",
      });
    }
  }, []);

  useEffect(() => {
    try {
      setExeca(teamData.execa); // Note: we access the 'marketing' array from the JSON
    } catch (error) {
      toast({
        title: "There was an error loading the team data",
      });
    }
  }, []);

  



  const data = [
    {
      title: "Mentor",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-10">
          The Professors mentor students, share their expertise, and contribute to academic growth by providing valuable insights and guidance in their respective fields.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
            {prof.map((item, index) => (
             <div className=" group/card" key={item.id}>
             <div
               className={cn(
"cursor-pointer overflow-hidden relative card rounded-lg shadow-xl",
  "h-[250px] w-[250px]", // Base square size
  "sm:h-[280px] sm:w-[280px]", // Small screens
  "md:h-[300px] md:w-[300px]", // Medium screens
  "mx-auto my-3", // Consistent spacing
  "bg-cover bg-center bg-no-repeat",
  "transition-all duration-300"               )}
  style={{
    backgroundImage: `url('${item.drive_file_id}')`,
  }}
             >
               <div className="absolute inset-0 bg-black opacity-0 group-hover/card:opacity-40 transition-opacity duration-300"></div> {/* Background overlay */}
               <div className="absolute inset-0 flex flex-col justify-end  items-center text-white p-4 z-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                 <h1 className="font-bold text-xl md:text-2xl">
                   {item.name || "Event Title"}
                 </h1>
                 <p className="font-normal text-sm md:text-base">
                   {item.about || "Event Date"}
                 </p>
               </div>
             </div>
           </div>

            ))}


            </div>


        </div>
      ),
    },
    {
      title: "President",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          The President of Committee leads the team, coordinates activities, and ensures smooth execution of initiatives while fostering collaboration and setting the strategic direction for the department.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
            {president.map((item, index) => (
             <div className=" group/card" key={item.id}>
             <div
               className={cn(
"cursor-pointer overflow-hidden relative card rounded-lg shadow-xl",
  "h-[250px] w-[250px]", // Base square size
  "sm:h-[280px] sm:w-[280px]", // Small screens
  "md:h-[300px] md:w-[300px]", // Medium screens
  "mx-auto my-3", // Consistent spacing
  "bg-cover bg-center bg-no-repeat",
  "transition-all duration-300"               )}
  style={{
    backgroundImage: `url('${item.drive_file_id}')`,
  }}
             >
               <div className="absolute inset-0 bg-black opacity-0 group-hover/card:opacity-40 transition-opacity duration-300"></div> {/* Background overlay */}
               <div className="absolute inset-0 flex flex-col justify-end  items-center text-white p-4 z-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                 <h1 className="font-bold text-xl md:text-2xl">
                   {item.name || "Event Title"}
                 </h1>
                 <p className="font-normal text-sm md:text-base">
                   {item.about || "Event Date"}
                 </p>
               </div>
             </div>
           </div>

            ))}


            </div>



        </div>
      ),
    },
    {
      title: "Vice president",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
            {vpresident.map((item, index) => (
             <div className=" group/card" key={item.id}>
             <div
               className={cn(
"cursor-pointer overflow-hidden relative card rounded-lg shadow-xl",
  "h-[250px] w-[250px]", // Base square size
  "sm:h-[280px] sm:w-[280px]", // Small screens
  "md:h-[300px] md:w-[300px]", // Medium screens
  "mx-auto my-3", // Consistent spacing
  "bg-cover bg-center bg-no-repeat",
  "transition-all duration-300"               )}
  style={{
    backgroundImage: `url('${item.drive_file_id}')`,
  }}
             >
               <div className="absolute inset-0 bg-black opacity-0 group-hover/card:opacity-40 transition-opacity duration-300"></div> {/* Background overlay */}
               <div className="absolute inset-0 flex flex-col justify-end  items-center text-white p-4 z-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                 <h1 className="font-bold text-xl md:text-2xl">
                   {item.name || "Event Title"}
                 </h1>
                 <p className="font-normal text-sm md:text-base">
                   {item.about || "Event Date"}
                 </p>
               </div>
             </div>
           </div>

            ))}


            </div>
            {/* <div
      className=" rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-auto">
      <InfiniteMovingCards items={tech1} direction="right"  />
    </div> */}


        </div>
      ),
    },
    {
      title: "Executive Director",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            coming soon
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
          {execd.map((item, index) => (
             <div className=" group/card" key={item.id}>
             <div
               className={cn(
"cursor-pointer overflow-hidden relative card rounded-lg shadow-xl",
  "h-[250px] w-[250px]", // Base square size
  "sm:h-[280px] sm:w-[280px]", // Small screens
  "md:h-[300px] md:w-[300px]", // Medium screens
  "mx-auto my-3", // Consistent spacing
  "bg-cover bg-center bg-no-repeat",
  "transition-all duration-300"               )}
  style={{
    backgroundImage: `url('${item.drive_file_id}')`,
  }}

             >
               <div className="absolute inset-0 bg-black opacity-0 group-hover/card:opacity-40 transition-opacity duration-300"></div> {/* Background overlay */}
               <div className="absolute inset-0 flex flex-col justify-end  items-center text-white p-4 z-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                 <h1 className="font-bold text-xl md:text-2xl">
                   {item.name || "Event Title"}
                 </h1>
                 <p className="font-normal text-sm md:text-base">
                   {item.about || "Event Date"}
                 </p>
               </div>
             </div>
           </div>

            ))}
          </div>
          {/* <div
      className=" rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={management1} direction="right"  />
    </div> */}
        </div>
      ),
    },
    {
      title: "Executive Associate",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            coming soon
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
          {execa.map((item, index) => (
             <div className=" group/card" key={item.id}>
             <div
               className={cn(
"cursor-pointer overflow-hidden relative card rounded-lg shadow-xl",
  "h-[250px] w-[250px]", // Base square size
  "sm:h-[280px] sm:w-[280px]", // Small screens
  "md:h-[300px] md:w-[300px]", // Medium screens
  "mx-auto my-3", // Consistent spacing
  "bg-cover bg-center bg-no-repeat",
  "transition-all duration-300"               )}
  style={{
    backgroundImage: `url('${item.drive_file_id}')`,
  }}

             >
               <div className="absolute inset-0 bg-black opacity-0 group-hover/card:opacity-40 transition-opacity duration-300"></div> {/* Background overlay */}
               <div className="absolute inset-0 flex flex-col justify-end  items-center text-white p-4 z-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                 <h1 className="font-bold text-xl md:text-2xl">
                   {item.name || "Event Title"}
                 </h1>
                 <p className="font-normal text-sm md:text-base">
                   {item.about || "Event Date"}
                 </p>
               </div>
             </div>
           </div>

            ))}
          </div>
          {/* <div
      className=" rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={management1} direction="right"  />
    </div> */}
        </div>
      ),
    }
  ];

  return (
    <div>
<div className="flex flex-col gap-4 mt-5">

      <Timeline data={data} />
    </div>
    <div className="h-[60vh]">
      </div>

    </div>

  );
}

export default Page;
