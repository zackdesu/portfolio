import React from "react";
import { FiGithub, FiFacebook, FiInstagram } from "react-icons/fi";
import { BsDiscord } from "react-icons/bs";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-[85vh] mt-2">
        <p>Let&apos;s start</p>
        <h1>
          Hello! I&apos;m{" "}
          <span className="text-cyan-600 dark:text-cyan-300">Zack</span>
        </h1>
        <h1>A Front-end Web Developer</h1>
        <p className="max-w-xl mt-4 mx-8 text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit ex
          natus sed aliquam ad sit! Laudantium, blanditiis! Error praesentium
          ratione repellat velit amet quo voluptate aliquid.
        </p>
        <ul className="flex my-3">
          <li className="shadow-[0_0_5px_1px] shadow-neutral-800 bg-neutral-200 hover:bg-neutral-400 dark:shadow-neutral-400 dark:bg-neutral-800 p-3 rounded-full mx-3 my-4 dark:hover:bg-neutral-600">
            <Link href="https://github.com/zackdesu" target={"_blank"}>
              <FiGithub size={22} />
            </Link>
          </li>
          <li className="shadow-[0_0_5px_1px] shadow-neutral-800 bg-neutral-200 hover:bg-neutral-400 dark:shadow-neutral-400 dark:bg-neutral-800 p-3 rounded-full mx-3 my-4 dark:hover:bg-neutral-600">
            <FiFacebook size={22} />
          </li>
          <li className="shadow-[0_0_5px_1px] shadow-neutral-800 bg-neutral-200 hover:bg-neutral-400 dark:shadow-neutral-400 dark:bg-neutral-800 p-3 rounded-full mx-3 my-4 dark:hover:bg-neutral-600">
            <BsDiscord size={22} />
          </li>
          <li className="shadow-[0_0_5px_1px] shadow-neutral-800 bg-neutral-200 hover:bg-neutral-400 dark:shadow-neutral-400 dark:bg-neutral-800 p-3 rounded-full mx-3 my-4 dark:hover:bg-neutral-600">
            <Link href="https://instagram.com/zackdesu" target={"_blank"}>
              <FiInstagram size={22} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
