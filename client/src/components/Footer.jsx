import React from 'react';
import Map from '../components/Map';
import Image from 'next/image';
import image from '../../public/IIITS.jpg';
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { cn } from "@/lib/utils";
import Link from 'next/link';
import { LinkPreview } from "@/components/ui/link-preview";

function Footer() {
  const people = [
    {
      id: 1,
      name: "Abhijit Patil",
      designation: "Full Stack Developer",
      image:
        "https://avatars.githubusercontent.com/u/69165799?s=400&u=ca65f83b4db8a58427b5fa5f56f7918d2f04cc78&v=4",
    }
    
  ];
  return (
    <div className='flex flex-col'>
      <div className='flex sm:h-[25rem] h-[20vh] '>
    <div className="relative w-[60vw]  overflow-auto">
      <Image
        src={image}
        layout="fill"
        objectFit="cover"
        alt="College Entrance"
        className='overflow-hidden'
      />

    </div>
     <div className="flex justify-center items-center overflow-auto w-[40vw] ">
     <Map />
   </div>
   </div>
   <div>



   <footer className={cn(" text-neutral-500 py-6")}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">About Us</h4>
            <p>
              E Cell IIITS is a pioneering organisation helping and encouraging young student to step into entreprenuership and make an Impact on the world.
           </p>
          </div>



          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contributers of this website</h4>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
            <p>
              <strong>Email:</strong> ecell@iiits.in
            </p>
            <p>
              <strong>Address:</strong> Indian Institue of Information Technology, Sri City, AP, India
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-neutral-600 pt-4 text-center">
          <p>&copy; 2024 E Cell IIITS. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            {/* <LinkPreview url="https://www.instagram.com/cc_rcoe/profilecard/?igsh=MW54bHhrdDJjcXFuaw==" className="hover:text-white">Twitter</LinkPreview> */}
            <LinkPreview url="https://www.linkedin.com/company/e-cell-iiits/" className="hover:text-white">LinkedIn</LinkPreview>
          </div>
        </div>
      </div>




    </footer>



   </div>
   </div>
  );
}

export default Footer;
