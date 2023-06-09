"use client";
import React from "react";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: e.target.Name.value,
      email: e.target.Email.value,
      message: e.target.Message.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (res.ok) {
      alert(result.message);
    } else {
      alert(result.message);
    }
  };

  const InputForm = ({ name, type = "text" }) => (
    <div className="flex flex-col w-full sm:w-3/4 lg:w-1/2">
      <label htmlFor={name} className="my-1 font-medium">
        {name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="mb-3 px-3 py-2 rounded border border-slate-500 shadow-sm focus:outline-none focus:border-cyan-500 bg-zinc-100 dark:bg-zinc-700"
        autoComplete="off"
      />
    </div>
  );
  return (
    <div
      className="flex flex-col items-center justify-center my-5"
      id="contact"
    >
      <h1 className="mb-3">Contact Me</h1>
      <form
        className="my-3 w-2/3 flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <InputForm name="Name" />
        <InputForm name="Email" type="email" />
        <InputForm name="Message" />
        <button
          type="submit"
          className="bg-cyan-400 dark:bg-cyan-700 rounded px-3 py-2 mt-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] font-medium tracking-wide"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
