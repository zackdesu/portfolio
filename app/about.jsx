import Image from "next/image";
import React from "react";

const About = () => {
  const now = new Date().getTime();
  // My Experiences
  const firstTime = new Date("2022-12-23").getTime();
  const months = Math.floor((now - firstTime) / (1000 * 60 * 60 * 24 * 30));
  const years = Math.floor(months / 12);

  return (
    <div className="bg-neutral-200 dark:bg-neutral-950 p-5" id="about">
      <div className="flex justify-center flex-col xl:flex-row md:items-center">
        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="images"
            width={400}
            height={400}
            className="border-2 border-zinc-300 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 p-5 mx-auto lg:mx-10 lg:w-[450px] xl:w-[500px] 2xl:w-[700px] rounded-xl hover:xl:scale-105 duration-200 xl:transition-all shadow-[0_0_5px_.5px] shadow-neutral-800 dark:shadow-neutral-400 xl:hover:shadow-none"
          />
        </div>
        <div className="mx-10 flex my-5 flex-col text-center xl:text-end font-Lato">
          <h1 className="mx-auto mb-3 xl:m-0 font-[700] xl:text-5xl font-Josefin">
            Who I am
          </h1>
          {/* prettier-ignore */}
          <p className="mx-auto xl:mx-0 max-w-xl mt-2 font-[300] xl:text-lg">
          Hello, my name is Zack. a front-end web developer with{" "}
          {months < 13
            ? `${months} months of experience.`
            : years === 1
            ? `${years} year of experience.`
            : `${years} years of experience.`}{" "}
          I specialize in creating visually appealing and user-friendly
          websites. My expertise lies in HTML, CSS, JavaScript. I&apos;m
          passionate about delivering responsive designs that provide an
          excellent user experience. I believe that a well-designed website
          should not only look great but also be easy to navigate and interact
          with. 
          <br/><br/>
          In addition to my core skills, I have a solid understanding of
          various frameworks such as ExpressJS, NextJS, Bootstrap, and
          TailwindCSS. These frameworks allow me to build dynamic and efficient
          web applications. I&apos;m still newbie in working with MongoDB, a
          popular NoSQL database, which enables me to handle data effectively
          and build robust back-end systems. With my knowledge of Canva and
          Figma, I can create design that enhance the overall user interface.
        </p>
        </div>
      </div>
    </div>
  );
};

export default About;
