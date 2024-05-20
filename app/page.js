"use client";

import { projects } from "@/constants";
import Link from "next/link";
import { useEffect, useState } from "react";

const page = () => {
  const [isSelected, setIsSelected] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  const handleSelect = (item) => {
    setIsSelected(item);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
                  {projects.map((project, i) => (
                    <li
                      key={i}
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
                        {isMounted && (
                          <Link
                            onClick={() => handleSelect(project)}
                            href={{
                              pathname: `/projects/${project.title1
                                .concat(project.title2)
                                .toLocaleLowerCase()}`,
                              id: project.title1
                                .concat(project.title2)
                                .toLocaleLowerCase(),
                            }}
                            data-info={project.productionYear}
                            data-barba="HomeTransition"
                          >
                            {project.title1} <br /> {project.title2}
                          </Link>
                        )}
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
