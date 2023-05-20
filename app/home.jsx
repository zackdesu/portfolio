import React from "react";
import { FiGithub, FiFacebook, FiInstagram } from "react-icons/fi";
import { BsDiscord } from "react-icons/bs";
import Icons from "@/components/Icons";

const Home = () => {
  const whatDoYouLearnNow = "NextJS";

  const now = new Date().getTime();

  // My birth date
  const birthDate = new Date("2007-01-08").getTime();
  const years = Math.floor((now - birthDate) / (1000 * 60 * 60 * 24 * 30 * 12));

  // My Experiences
  const firstTime = new Date("2022-12-23").getTime();
  const months = Math.floor((now - firstTime) / (1000 * 60 * 60 * 24 * 30));

  return (
    <div
      className="flex flex-col items-center justify-center h-[95vh] -mt-3"
      id="home"
    >
      <p className="font-FiraCode tracking-widest text-sm md:text-base lg:text-lg mb-2">
        LET&apos;S START
      </p>
      <h1 className="font-Josefin">
        Hello! I&apos;m{" "}
        <span className="text-cyan-600 dark:text-cyan-300">Zack</span>
      </h1>
      <h1 className="font-Josefin">A Front-end Web Developer</h1>
      <p className="max-w-xl xl:max-w-2xl mt-2 mx-8 text-center text-neutral-500 dark:text-neutral-300 xl:text-lg">
        I&apos;m a Front-end Web Developer. I&apos;m {years} years old. I just
        started programming for {months} months ago. Currently, I&apos;m
        learning {whatDoYouLearnNow}, and doing this project.
      </p>
      <ul className="flex my-3">
        <Icons icon={FiGithub} url={"https://github.com/zackdesu"} />
        <Icons icon={FiFacebook} />
        <Icons icon={BsDiscord} />
        <Icons icon={FiInstagram} url={"https://instagram.com/zackdesu"} />
      </ul>
    </div>
  );
};

export default Home;
