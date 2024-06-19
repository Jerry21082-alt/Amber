"use client";

import React from "react";
import { useEffect, useState } from "react";
import About from "@/components/About";
import Nav from "@/components/Nav";
import Curtain from "@/components/Curtain";

export default function Layout({ children }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [navTop, setNavTop] = useState(false);
  const [isVissible, setIsVissible] = useState(false);
  const [prevPos, setPrevpos] = useState(0);
  const [uiMode, setUiMode] = useState("ultra-mode");

  const handleScroll = () => {
    const currentPos = window.scrollY;
    const windowHight = window.innerHeight;
    const doumentHight = document.documentElement.scrollHeight;

    windowHight + currentPos >= doumentHight
      ? setIsVissible(false)
      : currentPos > 200
      ? setIsVissible(true)
      : setIsVissible(false);

    setPrevpos(currentPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVissible, prevPos]);

  return (
    <body
      className={`home-page ${uiMode} ${
        mobileNavOpen ? "mobileNavOpen" : null
      } ${showAbout ? "aboutShow" : null} ${navTop ? "navTop" : ""} ${
        isVissible || showAbout ? "isvissible" : ""
      }`}
    >
      <Curtain />
      <About setShowAbout={setShowAbout} />
      <Nav
        setUiMode={setUiMode}
        setMobileNavOpen={setMobileNavOpen}
        setShowAbout={setShowAbout}
        uiMode={uiMode}
      />
      <div>{children}</div>
    </body>
  );
}
