"use client";

import React, { useEffect, useState } from "react";
import { CiLight, CiDark } from "react-icons/ci";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  const [icon, setIcon] = useState(<CiLight size={35} />);
  const handleIsOn = () => {
    setIsOn(!isOn);
    if (isOn) {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
      setIcon(<CiLight size={35} />);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIcon(<CiDark size={35} />);
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsOn(true);
      setIcon(<CiDark size={35} />);
    }
  }, [isOn, setIsOn, icon]);

  return (
    <>
      <input
        type="checkbox"
        className="absolute hidden"
        id="switch"
        onChange={handleIsOn}
        checked={isOn}
      />
      <label htmlFor="switch" className="md:-mr-10">
        {icon}
      </label>
    </>
  );
};

export default ToggleSwitch;
