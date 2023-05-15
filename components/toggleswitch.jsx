"use client";

import React, { useEffect, useState } from "react";
import "../public/css/style.css";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleIsOn = () => {
    setIsOn(!isOn);
    if (isOn) {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsOn(true);
    }
  }, [isOn, setIsOn]);

  return (
    <>
      <input type="checkbox" id="switch" onChange={handleIsOn} checked={isOn} />
      <label htmlFor="switch" className="md:-mr-10">
        Toggle
      </label>
    </>
  );
};

export default ToggleSwitch;
