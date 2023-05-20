import Image from "next/image";
import React from "react";

const Skills = () => {
  const ListItem = ({ img, name }) => (
    <li className="cursor-default flex justify-around items-center w-3/4 bg-zinc-300 mx-auto my-3 rounded-xl p-5 font-semibold text-xl">
      <Image src={img} width={50} height={50} alt={name} />
      {name}
    </li>
  );

  return (
    <div className="h-[90vh] p-5" id="skills">
      <h1 className="text-center">My Skills</h1>
      <ul>
        <ListItem img={"/img/html.png"} name={"HTML"} />
      </ul>
    </div>
  );
};

export default Skills;
