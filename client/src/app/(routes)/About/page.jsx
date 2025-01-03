import React from 'react'

import { Spotlight } from "@/components/ui/Spotlight";
function page() {
  return (
    <div>
      <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden ">
      <Spotlight
        className="-top-45 left-5 sm:left-60 sm:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0 mt-10">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          ABOUT US 
        </h1>
        <p className="mt-4 font-normal text-lg text-neutral-300 max-w-xl text-justify mx-auto">
        E Cell IIITS is a pioneering organisation helping and encouraging young student to step into entreprenuership and make an Impact on the world.
        </p>
      </div>
    </div>
    </div>
  )
}

export default page
