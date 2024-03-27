"use client";

import Nav from "@/components/Nav";
import Curtain from "@/components/Curtain";
import { useLocalStorage } from "@/hooks/useLocalStorage";

import "./global.scss";
import "../styles/core.scss";
import "../styles/home.scss";
import "../styles/about.scss";
import "../styles/typography.scss";

import { useEffect, useState } from "react";
import About from "@/components/About";

const metadata = {
  title: "E.J Amber",
  description:
    "Welcome to E.J Amber's Web Developer Portfolio - Your Gateway to Exceptional Digital Solutions! Dive into a showcase of bespoke websites, dynamic web applications, and innovative digital experiences meticulously crafted by a seasoned web developer. With expertise in both front-end and back-end technologies, including HTML, CSS, JavaScript, React, Node.js, and more, I specialize in delivering tailored solutions that captivate audiences and drive results. Explore my portfolio to witness a diverse range of projects, each demonstrating a commitment to excellence, creativity, and functionality. From responsive designs to seamless user interfaces, let's collaborate to elevate your online presence and achieve your digital objectives. Discover the power of transformative web development with E.J Amber. Get in touch today!",
};

const RootLayout = ({ children }) => {
  const [uiMode, setUiMode] = useLocalStorage("uiColorMode", "night-mode");
  const [isMounted, setIsMounted] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <html lang="en">
      <body
        className={`home-page ${isMounted ? uiMode : null} ${
          mobileNavOpen ? "mobileNavOpen" : null
        } ${showAbout ? "aboutShow navTop" : null}`}
      >
        <Curtain />
        <About setShowAbout={setShowAbout} />
        <Nav
          setUiMode={setUiMode}
          setMobileNavOpen={setMobileNavOpen}
          setShowAbout={setShowAbout}
          uiMode={uiMode}
        />
        <main>
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
