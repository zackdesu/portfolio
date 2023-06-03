"use client";

import React from "react";
import Home from "./home";
import About from "./about";
import Skills from "./skills";
import MyProjects from "./myprojects";
import Contact from "./contact";

const Page = () => (
  <div
    onClick={() => {
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector("#nav-menu");
      const bar = document.querySelectorAll(".bar");
      if (!hamburger.classList.contains("max-md:hidden")) {
        bar.forEach((e) => {
          e.classList.remove("ganti");
          if (!e.classList.contains("ganti")) {
            navMenu.classList.add("max-md:hidden");
          }
        });
        navMenu.classList.add("max-md:hidden");
      }
    }}
  >
    <Home />
    <About />
    <Skills />
    <MyProjects />
    <Contact />
  </div>
);

export default Page;
