'use client'

import Link from "next/link";
import { globalContext } from "./useStateContext/AppContext";

const Nav = ({ setUiMode, setMobileNavOpen, setShowAbout }) => {
  return (
    <header className="ui">
      <Link href="/" className="logo">
        <span className="slideUp">
          <span>AMBER</span>
        </span>
        <span className="slideUp">
          <span>DEV.</span>
        </span>
      </Link>

      <button
        className="mobile-nav"
        type="button"
        role="button"
        aria-label="Menu"
        onClick={() => setMobileNavOpen((prev) => !prev)}
      >
        <span className="mobile-nav-box">
          <span className="mobile-nav-inner"></span>
        </span>
      </button>

      <div className="info nav-info">
        <div className="left">
          <div className="contact">
            <ul>
              <li>Studio of Amber</li>
              <li>Web Developer</li>
            </ul>
            <ul>
              <li>Lagos NG</li>
              <li className="email">
                <Link href="/">
                  <strong>effiongjerry210@yahoo.com</strong>
                </Link>
              </li>
            </ul>
          </div>
          <nav className="links">
            <ul>
              <li className="about-li">
                <button
                  type="button"
                  role="button"
                  aria-label="About"
                  className="link"
                  onClick={() => setShowAbout(true)}
                >
                  <span>01</span>
                  <strong>about</strong>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="right">
          <nav className="social">
            <ul>
              <li>
                <Link
                  href="/"
                  className="no-barba"
                  target="_blank"
                  rel="noopener"
                >
                  <span>02</span>
                  <strong>twitter</strong>
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="no-barba"
                  target="_blank"
                  rel="noopener"
                >
                  <span>03</span>
                  <strong>linkedIn</strong>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="color-mode">
            <div className="dot"></div>
            <button
              className="night-mode"
              aria-label="night color mode"
              onClick={() => setUiMode("night-mode")}
            ></button>
            <button
              className="light-mode"
              aria-label="light color mode"
              onClick={() => setUiMode("light-mode")}
            ></button>
            <button
              className="ultra-mode"
              aria-label="ultra mode"
              onClick={() => setUiMode("ultra-mode")}
            ></button>
            <div className="circle"></div>
          </div>
        </div>
        <div className="copyright">
          copyright &copy; {new Date().getFullYear()} Amber Dev. all rights
          reserved
        </div>
      </div>
    </header>
  );
};

export default Nav;
