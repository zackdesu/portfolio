import Image from "next/image";
import Link from "next/link";
import React from "react";

const MyProjects = () => {
  const Template = ({
    src,
    name,
    desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nesciunt quod rerum placeat reiciendis necessitatibus explicabo sit expedita facilis laborum!",
  }) => (
    <li className="flex flex-col m-5 w-1/3 cursor-default">
      <Image
        src={src}
        width={400}
        height={0}
        style={{ height: "auto" }}
        alt={name}
        className="rounded-xl"
      />
      <h3 className="text-xl">Lorem Ipsum</h3>
      <p className="my-2">{desc}</p>
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
      <ul className="flex justify-center w-3/4 mx-auto flex-wrap">
        <Template src="/img/projects/kotadumai.png" name="Project Kota Dumai" />
        <Template src="/img/projects/kotadumai.png" name="Project Kota Dumai" />
        <Template src="/img/projects/kotadumai.png" name="Project Kota Dumai" />
      </ul>
    </div>
  );
};

export default MyProjects;
