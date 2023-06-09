import React from "react";
import Image from "next/image";

const Page = ({ params }) => {
  return (
    <div>
      <div className="w-full h-1/2 bg-black">
        <Image
          src={`/img/project/${params.slug}.png`}
          fill={true}
          style={{ objectFit: "contain" }}
          alt={params.slug}
        />
      </div>
    </div>
  );
};

export default Page;
