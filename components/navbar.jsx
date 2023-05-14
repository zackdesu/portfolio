import React from "react";
import ToggleSwitch from "./toggleswitch";

export default function Navbar() {
  return (
    <div className="bg-zinc-100 text-slate-950 w-full flex items-center justify-around py-5 dark:bg-zinc-800 dark:text-slate-50 sticky top-0">
      <h2 className="-ml-10">Portfolio</h2>
      <ul className="flex items-center -ml-24">
        <li className={"text-slate-800 mx-3 dark:text-slate-200"}>Home</li>
        <li className={"text-slate-800 mx-3 dark:text-slate-200"}>About</li>
        <li className={"text-slate-800 mx-3 dark:text-slate-200"}>Skills</li>
        <li className={"text-slate-800 mx-3 dark:text-slate-200"}>Project</li>
      </ul>
      <ToggleSwitch />
    </div>
  );
}
