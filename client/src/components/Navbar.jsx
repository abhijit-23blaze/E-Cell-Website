"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import img from '../../public/CC_RCOE.png';
import Link from "next/link";
import { useSession ,signOut} from 'next-auth/react';
import UserIcon from '@/components/UserIcon';
import { useUserContext } from '@/app/context/Userinfo';

function NavbarUse() {
  return (
    <div className="relative max-w-2xl flex items-center justify-between z-100 ">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const { data: session } = useSession()
  const {contextisLoggedIn} = useUserContext();
  const [active, setActive] = useState(null);
  const Logout =()=>{
    localStorage.setItem('authToken', "-")
  }
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-xl mx-auto z-50 p-2 md:p-4",
        className,
        "block"
      )}
    >
      <Menu setActive={setActive}>
    <Link href="/">
      <MenuItem setActive={setActive} active={active} item="Home" />
    </Link>

    {/* Desktop Navigation */}
    <div className="hidden md:flex md:flex-row md:items-center md:space-x-4"> {/* Hidden on mobile, visible on medium screens and up */}
      <Link href="/Partners">
        <MenuItem setActive={setActive} active={active} item="Partners" />
      </Link>

      <Link href="/Incubtor">
        <MenuItem setActive={setActive} active={active} item="Incubator" />
      </Link>

      <Link href="/Events">
        <MenuItem setActive={setActive} active={active} item="Events" />
      </Link>

      <Link href="/About">
        <MenuItem setActive={setActive} active={active} item="About Us" />
      </Link>

      <Link href="/Team">
        <MenuItem setActive={setActive} active={active} item="Team" />
      </Link>
    </div>

    {/* Mobile Navigation */}
    <div className="block md:hidden"> {/* Visible on mobile, hidden on medium screens and up */}
      <MenuItem setActive={setActive} active={active} item="Discover">
        <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
          <ProductItem
            title="Events"
            href="/Events"
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            description="All the upcoming, ongoing, and past events conducted by E Cell IIITS"
          />
          <ProductItem
            title="Incubator"
            href="/Incubator"
            src="https://images.pexels.com/photos/1226721/pexels-photo-1226721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            description="Check out our Incubator Portfolio"
          />
          <ProductItem
            title="Partners"
            href="/Partners"
            src="https://images.pexels.com/photos/1226721/pexels-photo-1226721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            description="Check out our Partners"
          />
          <ProductItem
            title="About us"
            href="/About"
            src={img}
            description="Know more about E Cell IIITS"
          />
          <ProductItem
            title="Team"
            href="/Team"
            src={img}
            description="Meet the team behind E Cell IIITS"
          />
        </div>
      </MenuItem>
    </div>

        {/* {session||contextisLoggedIn ? (

          
        <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-s font-semibold leading-6 text-white inline-block" onClick={() => signOut()&&Logout()}>
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
            <span>{`LogOut`}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M10.75 8.75L14.25 12L10.75 15.25"
              ></path>
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        </button>
        
        ):(
          <Link href="/Login">
        <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-s font-semibold leading-6 text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
            <span>{`Login`}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M10.75 8.75L14.25 12L10.75 15.25"
              ></path>
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        </button>
        </Link>


        )}
        {
          session||contextisLoggedIn?(
            <div className="pl-1">
          <UserIcon></UserIcon>
        </div>
          ):''
        } */}
        
    

      </Menu>
    </div>
  );
}

export default NavbarUse;
