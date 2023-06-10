import React from "react";
import Link from "next/link";
import Image from "next/image";

const Icons = ({
  icon: Icon,
  url = "#",
  name,
  inverted = false,
  colorHover = "",
}) => (
  <>
    {url === "#" ? (
      <li
        className={
          "shadow-[0_0_5px_1px] shadow-neutral-800 bg-neutral-200 hover:bg-neutral-300 dark:shadow-neutral-400 dark:bg-neutral-900 rounded-full mx-3 my-4 dark:hover:bg-neutral-800 hover:shadow-cyan-800 hover:dark:shadow-cyan-200 list-none group"
        }
      >
        <Icon
          className={`text-[22px] m-3 lg:m-4 lg:text-[30px] ${colorHover}`}
        />{" "}
      </li>
    ) : url.includes("/img") ? (
      <li
        className={
          "shadow-[0_0_5px_1px] shadow-neutral-800 bg-neutral-200 hover:bg-neutral-300 dark:shadow-neutral-400 dark:bg-neutral-900 rounded-full mx-3 my-4 dark:hover:bg-neutral-800 hover:shadow-cyan-800 hover:dark:shadow-cyan-200 list-none group"
        }
      >
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
        />{" "}
      </li>
    ) : (
      <Link
        href={url}
        target="_blank"
        className={
          "shadow-[0_0_5px_1px] shadow-neutral-800 bg-neutral-200 hover:bg-neutral-300 dark:shadow-neutral-400 dark:bg-neutral-900 rounded-full mx-3 my-4 dark:hover:bg-neutral-800 hover:shadow-cyan-800 hover:dark:shadow-cyan-200 list-none group"
        }
      >
        <li>
          <Icon
            className={`text-[22px] m-3 lg:m-4 lg:text-[30px] ${colorHover}`}
          />
        </li>
      </Link>
    )}
  </>
);

export default Icons;
