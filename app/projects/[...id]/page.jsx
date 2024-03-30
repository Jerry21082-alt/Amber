"use client";

import { projects } from "@/constants";
import Link from "next/link";

const page = ({ params }) => {
  const { id } = params;

  const [projectDetails] = projects.filter((project) => project.id == id[0]);
  const projectLink = projectDetails.title1
    .concat(projectDetails.title2)
    .toLocaleLowerCase();

  return (
    <div id="barbar-wrapper" aria-live="polite">
      <div className="barbar-container" data-namespace="work-page">
        <div className="barbar-transition-container">
          <section className="case-study basicScroll">
            <Link href="/" className="btn-page-back">
              <span className="btn-box"></span>
            </Link>
            <div className="container" style={{ height: "5509px" }}>
              <div
                className="content"
                style={{ transform: "translate3d(0, 0, 0)" }}
              >
                <section className="hero">
                  <div
                    className="title-container parallax-vertical-mm-bt"
                    data-from="-35%"
                    data-to="25%"
                    data-timing="quadOut"
                  >
                    <h1 className="title">
                      {projectDetails.title1}
                      <br />
                      {projectDetails.title2}
                    </h1>
                  </div>
                </section>

                <section className="intro reveal reveal-show">
                  <div className="credits">
                    <h5>
                      <a
                        href="www.metaforce.com"
                        target="_blank"
                        rel="noopener"
                      >
                        {`www.${projectLink}.com`}
                      </a>
                    </h5>
                    <h6>
                      {projectDetails.title1} {""} {projectDetails.title2}
                    </h6>
                    <span className="title">Agency:</span>
                    <span>Amber Dev</span>
                    <span className="title">Lead Front-end Developer</span>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;
