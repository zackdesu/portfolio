import Image from "next/image";
import Link from "next/link";
import React from "react";

const MyProjects = () => {
  const Template = ({
    name,
    desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nesciunt quod rerum placeat reiciendis necessitatibus explicabo sit expedita facilis laborum!",
    href = "#!",
  }) => (
    <li className="flex flex-col justify-between m-5 w-1/3 max-lg:w-full max-lg:items-center max-lg:text-center cursor-default">
      <div>
        <Image
          src={"/img/project/" + href + ".png"}
          width={400}
          height={185}
          style={{ objectFit: "cover", objectPosition: "top" }}
          alt={name}
          className="rounded-xl w-full max-w-[500px] mx-auto"
        />
        <div>
          <h3 className="text-xl mt-2">{name}</h3>
          <p className="my-2 mx-auto max-md:w-3/4 max-lg:w-2/4">{desc}</p>
        </div>
      </div>
      <Link href={"/" + href}>
        <button>Details</button>
      </Link>
    </li>
  );

  return (
    <div
      id="project"
      className="bg-neutral-200 dark:bg-neutral-950 p-5 mt-[78px]"
    >
      <h1 className="text-center font-Josefin">Projects</h1>
      <ul className="flex justify-center w-5/6 mx-auto flex-wrap">
        <Template
          name="Project Kota Dumai"
          desc="This is my first project with HTML and Bootstrap only. I try to make my own city website, Dumai."
          href="kotadumai"
        />
        <Template
          name="NuansaShop"
          desc="NuansaShop, I do this project because my friend asked me to make this type of website. In here, I learn deeply about flexbox."
          href="nuansashop"
        />
        <Template
          name="Mount Fuji"
          desc="Mount Fuji, my friend asked me to make a website with Mount Fuji theme. This is the first website which was bought by my friend."
          href="mountfuji"
        />
        <Template
          name="Presensi Osis"
          desc="Presensi Osis, this website was made for the presence system for my school council in SMKN 1 Dumai."
          href="presensi-osis"
        />
      </ul>
    </div>
  );
};

export default MyProjects;
