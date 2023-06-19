import Image from "next/image";
import Link from "next/link";
import React from "react";

const Details = ({
  title = "lorem",
  desc = "loremipsumoadjsandasjdkasjdakjdajks",
  img,
  href = "#!",
  list = ["HTML"],
}) => {
  return (
    <>
      <div className="w-[100%] h-80 bg-black">
        <Image
          src={"/img/project/" + img + ".png"}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            objectPosition: "top",
            opacity: "30%",
          }}
          width={1500}
          height={1500}
          alt={title}
          priority
        />
      </div>
      <div className="mx-20 max-lg:mx-10 mt-5">
        <Link href="/#project">Back to Homepage</Link>
      </div>
      <div className="mx-20 max-lg:mx-14 my-5 flex max-lg:flex-col max-lg:items-center max-lg:text-center">
        <div className="w-[60%] max-lg:w-full">
          <h1>{title}</h1>
          <p className="my-3 text-lg max-md:text-base">
            <b>{title}</b>&nbsp;
            {desc}
          </p>
        </div>
        <div className="w-[40%] max-lg:w-full flex flex-col justify-around my-5">
          <ul className="bg-neutral-200 text-start dark:bg-neutral-800 rounded-xl mx-auto p-5 font-medium max-lg:w-[40%]">
            <h2 className="mb-5 text-center max-lg:text-3xl">Used tech</h2>
            {list.map((e, i) => (
              <li
                key={i}
                className="cursor-default list-disc w-1/4 mx-auto max-lg:text-lg"
              >
                {" "}
                {e}
              </li>
            ))}
          </ul>
          <div className="my-5 mx-auto text-center">
            <Link href={href} target={"_blank"}>
              {href !== "#!" ? (
                <button className="rounded-xl mx-auto">Go to page</button>
              ) : (
                <button
                  className="rounded-xl mx-auto disabled:bg-cyan-500"
                  disabled
                >
                  Go to page
                </button>
              )}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
