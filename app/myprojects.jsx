import Image from "next/image";
import React from "react";

const MyProjects = () => {
  return (
    <div>
      <h1 className="text-center">Projects</h1>
      <ul className="flex justify-center">
        <li className="flex flex-col items-center bg-slate-300 p-5 my-5 w-4/12">
          <Image
            src={"/img/projects/kotadumai.png"}
            width={400}
            height={0}
            style={{ height: "auto" }}
            alt="Project Kota Dumai"
          />
          Kota Dumai
        </li>
      </ul>
    </div>
  );
};

export default MyProjects;
