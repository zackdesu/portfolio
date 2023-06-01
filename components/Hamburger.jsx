"use client";

import React from "react";

const Hamburger = () => {
  return (
    <div
      className="hamburger md:hidden ml-8"
      onClick={() => {
        const bar = document.querySelectorAll(".bar");
        const navMenu = document.querySelector("#nav-menu");
        bar.forEach((e) => {
          e.classList.toggle("ganti");
        });
        navMenu.classList.toggle("max-md:hidden");
      }}
    >
      <div className="bar bar1"></div>
      <div className="bar bar2"></div>
      <div className="bar bar3"></div>
    </div>
  );
};

export default Hamburger;
