"use client";

import Link from "next/link";

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
              <li className="about-li">
                <a
                  href="https://docs.google.com/document/d/1RhipAVOyWsDlf2o9-tXqdc3UzdjM6uKG/edit?usp=drive_link&ouid=108405425151733259634&rtpof=true&sd=true"
                  target="_blank"
                  aria-label="Resume"
                  className="link"
                >
                  <span>02</span>
                  <strong>resume</strong>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="right">
          <nav className="social">
            <ul>
              <li>
                <a
                  href="https://x.com/Jerryjersey7"
                  className="no-barba"
                  target="_blank"
                  rel="noopener"
                >
                  <span>03</span>
                  <strong>twitter</strong>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jerry-jersey-054ab7219/"
                  className="no-barba"
                  target="_blank"
                  rel="noopener"
                >
                  <span>04</span>
                  <strong>linkedIn</strong>
                </a>
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
