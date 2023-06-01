import React from "react";
import Link from "next/link";
import Image from "next/image";

const Icons = ({ icon: Icon, url = "#", name, inverted = false }) => (
  <li
    className={
      "shadow-[0_0_5px_1px] shadow-neutral-800 bg-neutral-200 hover:bg-neutral-300 dark:shadow-neutral-400 dark:bg-neutral-900 rounded-full mx-3 my-4 dark:hover:bg-neutral-800 hover:shadow-cyan-800 hover:dark:shadow-cyan-200 group"
    }
  >
    {url === "#" ? (
      <Icon className={"text-[22px] m-3 lg:m-4 lg:text-[30px]"} />
    ) : url.includes("/img") ? (
      <Image
        src={url}
        width={22}
        height={22}
        alt={name}
        className={
          inverted
            ? "mx-3 py-3 lg:py-4 lg:mx-4 lg:w-[30px] dark:invert"
            : "mx-3 py-3 lg:py-4 lg:mx-4 lg:w-[30px]"
        }
        title={name}
      />
    ) : (
      <Link href={url} target="_blank">
        <Icon className={"text-[22px] m-3 lg:m-4 lg:text-[30px]"} />
      </Link>
    )}
  </li>
);

export default Icons;
