import Icons from "@/components/Icons";
import React from "react";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div
      className="flex flex-col items-center justify-center my-5"
      id="contact"
    >
      <h1 className="mb-3">Contacts</h1>
      <Icons icon={MdEmail} />
      <h3 className="text-xl">zarchxxx@gmail.com</h3>
    </div>
  );
};

export default Contact;
