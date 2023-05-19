"use client";

import React, { useEffect, useState } from "react";
import { CiLight, CiDark } from "react-icons/ci";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  const [icon, setIcon] = useState(
    <CiLight className="text-[25px] md:text-[35px]" />
  );
  const handleIsOn = () => {
    setIsOn(!isOn);
    if (isOn) {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
      setIcon(<CiLight className="text-[25px] md:text-[35px]" />);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIcon(<CiDark className="text-[25px] md:text-[35px]" />);
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsOn(true);
      setIcon(<CiDark className="text-[25px] md:text-[35px]" />);
    }
  }, [isOn, setIsOn]);

  return (
    <>
      <input
        type="checkbox"
        className="absolute hidden"
        id="switch"
        onChange={handleIsOn}
        checked={isOn}
      />
      <label htmlFor="switch" className="md:-mr-10 cursor-pointer">
        {icon}
      </label>
    </>
  );
};

export default ToggleSwitch;
