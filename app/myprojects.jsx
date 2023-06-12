import Image from "next/image";
import Link from "next/link";
import React from "react";

const MyProjects = () => {
  const Template = ({
    src,
    name,
    desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nesciunt quod rerum placeat reiciendis necessitatibus explicabo sit expedita facilis laborum!",
    href = "#!",
  }) => (
    <li className="flex flex-col justify-between m-5 w-1/3 max-lg:w-full max-lg:items-center max-lg:text-center cursor-default">
      <div>
        <Image
          src={src}
          width={400}
          height={185}
          style={{ objectFit: "contain" }}
          alt={name}
          className="rounded-xl max-h-[208px] mx-auto"
        />
        <div>
          <h3 className="text-xl mt-2">{name}</h3>
          <p className="my-2 mx-auto max-md:w-3/4 max-lg:w-2/4">{desc}</p>
        </div>
      </div>
      <Link href={href}>
        <button className="px-5 py-2 bg-cyan-400 dark:bg-cyan-700 dark:hover:bg-cyan-500 hover:bg-cyan-500 rounded cursor-pointer my-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] font-medium">
          Details
        </button>
      </Link>
    </li>
  );

  return (
    <div id="project" className="bg-neutral-200 dark:bg-neutral-950 p-5">
      <h1 className="text-center font-Josefin">Projects</h1>
      <ul className="flex justify-center w-5/6 mx-auto flex-wrap">
        <Template
          src="/img/project/kotaa.png"
          name="Project Kota Dumai"
          desc="This is my first project with HTML and Bootstrap only. I try to make my own city website, Dumai."
        />
        <Template
          src="/img/project/nuansashop.png"
          name="NuansaShop"
          desc="This is my second project, NuansaShop. I do this project because my friend asked me to make this type of website. In here, I learn deeply about flexbox."
        />
        <Template
          src="/img/project/kalkulator.png"
          name="Calculator"
          desc="This is my third project, I try to use object because my knowledge about Object is bad."
        />
        <Template
          src="/img/project/mountfuji.png"
          name="Mount Fuji"
          desc="This is my fourth project, Mount Fuji. My friend asked me to make a website with Mount Fuji theme. This is the first website which was bought by my friend."
          href="/mountainfuji"
        />
      </ul>
    </div>
  );
};

export default MyProjects;
