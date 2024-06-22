import React, { useEffect } from "react";

const About = ({ setShowAbout }) => {
  const handleEscapePress = (e) => {
    if (e.key === "Escape") {
      setShowAbout(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscapePress);

    return () => document.removeEventListener("keydown", handleEscapePress);
  }, []);

  return (
    <section className="about">
      <button
        className="btn-back"
        type="button"
        aria-label="Back"
        onClick={() => setShowAbout(false)}
      >
        <span className="btn-box">
          <span className="icon-close"></span>
        </span>
      </button>
      <div className="container">
        <div className="left">
          <h2 className="heading">
            Specializing in refined digital web experiences with a focus on
            functional, responsive, and interactive content.
          </h2>
          <p>
            Partnering with agencies and brands that value design and
            development integrity.
          </p>
          <p>
            Delivering highly executed front-end user experiences by paying
            close attention to design, optimization, and performance.
          </p>
        </div>
        <div className="right">
          <div className="col-1">
            <div className="info">
              <h5 className="heading">Availability</h5>
              <h6 className="title">March 2024 -</h6>
              <p>Remotely</p>
              <h5 className="heading">Services</h5>
              <h6 className="title">Developement -</h6>
              <ul>
                <li>Technical Direction</li>
                <li>Frontend Development</li>
                <li>Craft CMS Solutions</li>
                <li>Development Consulting</li>
              </ul>
            </div>
          </div>
          <div className="col-2">
            <h5 className="heading">Frameworks & Languages -</h5>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript(ES6+)</li>
              <li>Typescript</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Git</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
