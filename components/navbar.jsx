"use client";

import React from "react";
import Hamburger from "./Hamburger";
import ToggleSwitch from "./toggleswitch";

const ListLink = ({ title, href = "!" }) => {
  return (
    <a href={`#${href}`}>
      <li
        className="text-slate-800 p-3 dark:text-slate-200 active:text-cyan-500 dark:active:text-cyan-500 font-semibold relative group text-base"
        onClick={() => {
          const hamburger = document.querySelector(".hamburger");
          const navMenu = document.querySelector("#nav-menu");
          const bar = document.querySelectorAll(".bar");
          if (!hamburger.classList.contains("max-md:hidden")) {
            bar.forEach((e) => {
              e.classList.toggle("ganti");
            });
            navMenu.classList.add("max-md:hidden");
          }
        }}
      >
        {title}
      </li>
    </a>
  );
};

export default function Navbar() {
  return (
    <header
      className={`bg-neutral-200 border-b-2 border-zinc-200 dark:border-zinc-800 text-slate-950 w-full flex items-center max-md:justify-between max-md:px-8 md:justify-around py-5 dark:text-slate-50 sticky z-[99999999] top-0`}
    >
      <h2 className="md:-ml-10 cursor-pointer hover:text-cyan-600 hover:dark:text-cyan-300">
        zackdesu
      </h2>
      <ul
        id="nav-menu"
        className="md:flex md:items-center md:-ml-24 max-md:hidden max-md:absolute max-md:py-5 max-nd:backdrop-blur max-md:bg-[rgba(255,255,255,0.9)] dark:max-md:bg-[rgba(0,0,0,0.9)] max-md:shadow-lg max-md:rounded-lg max-md:max-w-[150px] max-md:w-full max-md:top-full max-md:right-8"
      >
        <ListLink title="Home" href={"home"} />
        <ListLink title="About" href={"about"} />
        <ListLink title="Tech Stacks" href="skills" />
        <ListLink title="Project" href="project" />
        <ListLink title="Contact" href="contact" />
      </ul>
      <div className="flex items-center">
        <ToggleSwitch />
        <Hamburger />
      </div>
    </header>
  );
}
