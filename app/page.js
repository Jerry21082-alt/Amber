"use client";

import About from "@/components/About";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    name1: "META",
    name2: "FORCE",
    year: "2022",
  },
  {
    name1: "SCAN",
    name2: "MATE",
    year: "2023",
  },
  {
    name1: "DIGITAL",
    name2: "HUB",
    year: "2024",
  },
  {
    name1: "DANCE",
    name2: "TORE",
    year: "2023",
  },
];

const page = () => {
  const [isSelected, setIsSelected] = useState(null);
  const handleSelect = (item) => {
    setIsSelected(item);
  };
  // const []

  return (
    <div id="barba-wrapper" aria-live="polite">
      <div
        className="barba-container"
        data-namespace="home-page"
        style={{ visibility: "visible" }}
      >
        <div className="barba-transition-container">
          <div className="stage-perspective paralax-perspective perspective-origin-tt-bb">
            <div
              className="stage-container"
              style={{ opacity: "1", height: "647.875px" }}
            >
              <main
                className="stage"
                style={{ transform: "translate3d(0px, -0.0019px, 0px)" }}
              >
                <ul className="projects">
                  {projects.map((project) => (
                    <li
                      key={project.name1}
                      className={`projectLi ${
                        isSelected === project
                          ? "isSelected"
                          : isSelected && isSelected !== project
                          ? "notSelected"
                          : null
                      }`}
                      keydata-barba="HomeTransition"
                    >
                      <div className="project-container">
                        <Link
                          onClick={() => handleSelect(project)}
                          href="/"
                          data-info={project.year}
                          data-barba="HomeTransition"
                        >
                          {project.name1} <br /> {project.name2}
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </main>
            </div>
          </div>
        </div>
      </div>
      {/* <About /> */}
    </div>
  );
};

export default page;
