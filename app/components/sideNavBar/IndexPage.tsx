"use client";

import React, { useState, useRef, useEffect } from "react";
import RedButton from "./RedButton";
import Navbar from "./Navbar";

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, []);

  return (
    <div className="flex flex-col h-auto">
      <RedButton onClick={handleButtonClick} />
      <Navbar ref={navbarRef} isOpen={isOpen} />
    </div>
  );
};

export default IndexPage;
