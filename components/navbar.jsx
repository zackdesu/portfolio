import React from "react";
import ToggleSwitch from "./toggleswitch";

export default function Navbar() {
  return (
    <div className="backdrop-blur border-b-2 border-zinc-200 dark:border-zinc-800 text-slate-950 w-full flex items-center justify-around py-5 dark:text-slate-50 sticky top-0">
      <h2 className="md:-ml-10">Portfolio</h2>
      <ul className="flex items-center md:-ml-24 sm:-ml-12">
        <li className={"text-slate-800 mx-2 md:mx-3 dark:text-slate-200"}>
          Home
        </li>
        <li className={"text-slate-800 mx-2 md:mx-3 dark:text-slate-200"}>
          About
        </li>
        <li className={"text-slate-800 mx-2 md:mx-3 dark:text-slate-200"}>
          Skills
        </li>
        <li className={"text-slate-800 mx-2 md:mx-3 dark:text-slate-200"}>
          Project
        </li>
      </ul>
      <ToggleSwitch />
    </div>
  );
}
