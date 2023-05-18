import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      className="
    flex justify-center flex-col lg:flex-row
    h-[80vh] my-2 md:items-center
    
    "
      id="about"
    >
      <div>
        <Image
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt="images"
          width={400}
          height={400}
          className="border-2 border-zinc-300 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 p-5 mx-auto lg:mx-10 lg:w-[500px] 2xl:w-[700px]"
        />
      </div>
      <div className="mx-10 flex flex-col lg:text-end">
        <h2 className="mx-auto lg:mx-0 ">About Me</h2>
        <p className="mx-auto lg:mx-0 max-w-xl mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
          laudantium sunt porro perspiciatis ipsam, quo recusandae reiciendis
          labore illum, qui dicta, dignissimos voluptate dolorum iste laboriosam
          quaerat laborum minus! Nulla, nemo veritatis dolore laboriosam ad,
          sint amet nam excepturi iste sit facilis esse et optio officiis ullam,
          exercitationem aliquid fugit! Atque magni officiis suscipit commodi
          quod eos minus incidunt, excepturi voluptate inventore nesciunt porro
          fugiat nam, doloribus harum ex vel facilis ullam possimus doloremque
          molestias ipsum. Repellat, fugiat illo quidem possimus animi excepturi
          quae unde odit, provident facere numquam ut voluptates nihil
          repellendus rerum reprehenderit, voluptatibus sapiente iure. Earum,
          quam.
        </p>
      </div>
    </div>
  );
};

export default About;
