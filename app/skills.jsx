import React from "react";
import Icons from "@/components/Icons";

const Skills = () => {
  return (
    <div
      className="flex flex-col justify-center items-center my-24 h-52"
      id="skills"
    >
      <h1 className="font-Josefin">Tech Stacks</h1>
      <ul className="flex my-3 w-4/6 lg:w-3/6 xl:w-2/6 mx-auto justify-center flex-wrap">
        <Icons url={"/img/html.png"} name="Hypertext Markup Language" />
        <Icons url={"/img/css.png"} name="Cascading Style Sheets" />
        <Icons url={"/img/js.png"} name="JavaScript" />
        <Icons url={"/img/react.png"} name="React.js" />
        <Icons url={"/img/next.svg"} name="Next.js" />
        <Icons url={"/img/tailwind.png"} name="Tailwind CSS" />
        <Icons url={"/img/express.png"} name="Express.js" />
        <Icons url={"/img/canva.png"} name="Canva" />
        <Icons url={"/img/figma.png"} name="Figma" />
        <Icons url={"/img/mongodb.png"} name="MongoDB" />
      </ul>
    </div>
  );
};

export default Skills;
