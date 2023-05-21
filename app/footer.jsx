import Link from "next/link";
import React from "react";

const Footer = () => {
  const now = new Date().getFullYear();
  return (
    <>
      <div className="flex justify-around mt-2 text-white bg-neutral-500 p-3 border-t-black dark:border-t-white">
        <p>{now} &copy; All Rights Reserved.</p>
        <p>
          Build with ❤ by{" "}
          <span className="underline cursor-pointer">
            <Link href="https://github.com/zackdesu">zackdesu</Link>
          </span>
        </p>
      </div>
    </>
  );
};

export default Footer;
