import Image from "next/image";
import Link from "next/link";
import React from "react";

const MyProjects = () => {
  const Template = ({
    src,
    name,
    desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nesciunt quod rerum placeat reiciendis necessitatibus explicabo sit expedita facilis laborum!",
  }) => (
    <li className="flex flex-col m-5 w-1/3 max-lg:w-full max-lg:items-center max-lg:text-center cursor-default">
      <Image
        src={src}
        width={400}
        height={185}
        style={{ width: "auto" }}
        alt={name}
        className="rounded-xl"
      />
      <h3 className="text-xl">{name}</h3>
      <p className="my-2 max-md:w-3/4">{desc}</p>
      <Link href={"#"}>
        <button className="px-5 py-2 bg-cyan-400 dark:bg-cyan-600 dark:hover:bg-cyan-500 hover:bg-cyan-500 rounded cursor-pointer">
          Link
        </button>
      </Link>
    </li>
  );

  return (
    <div id="project" className="bg-neutral-200 dark:bg-neutral-950 p-5">
      <h1 className="text-center">Projects</h1>
      <ul className="flex justify-center w-5/6 mx-auto flex-wrap">
        <Template src="/img/projects/kotaa.png" name="Project Kota Dumai" />
        <Template src="/img/projects/nuansashop.png" name="NuansaShop" />
        <Template src="/img/projects/kalkulator.png" name="Kalkulator" />
        <Template src="/img/projects/mountfuji.png" name="Mount Fuji" />
      </ul>
    </div>
  );
};

export default MyProjects;
