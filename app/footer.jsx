import Link from "next/link";
import React from "react";

const Footer = () => {
  const now = new Date().getFullYear();
  return (
    <>
      <hr />
      <div className="flex justify-around mt-2">
        <p>{now} &copy; All Rights Reserved.</p>
        <p>
          Build by{" "}
          <span className="underline cursor-pointer">
            <Link href="https://github.com/zackdesu">zackdesu</Link>
          </span>
        </p>
      </div>
    </>
  );
};

export default Footer;
