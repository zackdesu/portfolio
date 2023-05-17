import React from "react";
import { FiGithub, FiFacebook, FiInstagram } from "react-icons/fi";
import { BsDiscord } from "react-icons/bs";
import Link from "next/link";

const Home = () => {
  const whatDoYouLearnNow = "NextJS";

  const now = new Date().getTime();

  // My birth date
  const birthDate = new Date("2007-01-08").getTime();
  const years = Math.floor((now - birthDate) / (1000 * 60 * 60 * 24 * 30 * 12));

  // My Experiences
  const firstTime = new Date("2022-12-23").getTime();
  const months = Math.floor((now - firstTime) / (1000 * 60 * 60 * 24 * 30));

  const className =
    "shadow-[0_0_5px_1px] shadow-neutral-800 bg-neutral-200 hover:bg-neutral-400 dark:shadow-neutral-400 dark:bg-neutral-800 rounded-full mx-3 my-4 dark:hover:bg-neutral-600 hover:shadow-cyan-600 hover:dark:shadow-cyan-300";

  return (
    <div className="flex flex-col items-center justify-center h-[85vh] my-2">
      <p className="font-FiraCode tracking-widest text-lg mb-2">
        LET&apos;S START
      </p>
      <h1 className="font-Josefin">
        Hello! I&apos;m{" "}
        <span className="text-cyan-600 dark:text-cyan-300">Zack</span>
      </h1>
      <h1 className="font-Josefin">A Front-end Web Developer</h1>
      <p className="max-w-xl xl:max-w-2xl mt-2 mx-8 text-center">
        I'm a Front-end Web Developer. I'm {years} years old. I just started
        programming for {months} months ago. Currently, I'm learning{" "}
        {whatDoYouLearnNow}, and doing this project.
      </p>
      <ul className="flex my-3">
        <li className={className}>
          <Link href="https://github.com/zackdesu" target={"_blank"}>
            <FiGithub className="text-[22px] m-3 lg:text-[30px]" />
          </Link>
        </li>
        <li className={className}>
          <FiFacebook className="text-[22px] m-3 lg:text-[30px]" />
        </li>
        <li className={className}>
          <BsDiscord className="text-[22px] m-3 lg:text-[30px]" />
        </li>
        <li className={className}>
          <Link href="https://instagram.com/zackdesu" target={"_blank"}>
            <FiInstagram className="text-[22px] m-3 lg:text-[30px]" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
