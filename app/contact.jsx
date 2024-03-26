"use client";
import React from "react";
import { MdEmail } from "react-icons/md";
import Icons from "@/components/Icons";
const Contact = () => {
  return (
    <div
      className="flex flex-col items-center justify-center px-5 py-10"
      id="contact"
    >
      <h1 className="font-Josefin">Contact Me</h1>
      <Icons
        icon={MdEmail}
        url={
          "mailto:zarchxxx@gmail.com?subject=Website Project&body=Hello Wongso Wijaya, "
        }
      />
    </div>
  );
};

export default Contact;
