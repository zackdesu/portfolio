import React from "react";
import ToggleSwitch from "./toggleswitch";

const ListLink = ({ title, href = "!" }) => (
  <li className="text-slate-800 mx-2 md:mx-3 dark:text-slate-200 font-semibold relative group">
    <a href={`#${href}`}>{title}</a>
    <span
      className={`h-[1px] inline-block w-0 bg-black dark:bg-white absolute right-5 -bottom-0.5 lg:group-hover:w-1/2 transition-[width] duration-200`}
    >
      &nbsp;
    </span>
    <span
      className={`h-[1px] inline-block w-0 bg-black dark:bg-white absolute left-5 -bottom-0.5 lg:group-hover:w-1/2 transition-[width] duration-200`}
    >
      &nbsp;
    </span>
  </li>
);

export default function Navbar() {
  return (
    <div className="backdrop-blur border-b-2 border-zinc-200 dark:border-zinc-800 text-slate-950 w-full flex items-center justify-around py-5 dark:text-slate-50 sticky top-0">
      <h2 className="md:-ml-10 cursor-pointer hover:text-cyan-600 hover:dark:text-cyan-300">
        zackdesu
      </h2>
      <ul className="flex items-center md:-ml-24 sm:-ml-12">
        <ListLink title="Home" href={"home"} />
        <ListLink title="About" href={"about"} />
        <ListLink title="Project" />
        <ListLink title="Contact" />
      </ul>
      <ToggleSwitch />
    </div>
  );
}
