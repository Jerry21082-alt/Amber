"use client";

import React from "react";
import { useEffect, useState } from "react";
import About from "@/components/About";
import Nav from "@/components/Nav";
import Curtain from "@/components/Curtain";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { globalContext } from "./useStateContext/AppContext";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const [isMounted, setIsMounted] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [navTop, setNavTop] = useState(false);

  const { uiMode, setUiMode } = globalContext();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      setUiMode("light-mode");
    } else setUiMode("night-mode");
  }, [pathname]);

  return (
    <section
      className={`home-page ${isMounted ? uiMode : ""} ${
        mobileNavOpen ? "mobileNavOpen" : null
      } ${showAbout ? "aboutShow" : null} ${navTop ? "navTop" : ""}`}
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
    </section>
  );
}
