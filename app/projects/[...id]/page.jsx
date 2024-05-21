"use client";

import { projects } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const page = ({ params }) => {
  const { id } = params;

  function getProductDetails() {
    const [projectDetails] = projects.filter((project) => {
      const projectFullName = project.title1
        .concat(project.title2)
        .toLocaleLowerCase();

      return projectFullName === id[0];
    });

    return projectDetails;
  }

  const projectDetails = getProductDetails();

  const projectLink = projectDetails.title1
    .concat(projectDetails.title2)
    .toLocaleLowerCase();

  return (
    <div id="barbar-wrapper" aria-live="polite">
      <div className="barbar-container" data-namespace="work-page">
        <div className="barbar-transition-container">
          <section className="case-study basicScroll">
            <Link href="/" className="btn-page-back">
              <span className="btn-box">
                <span className="icon-back"></span>
              </span>
            </Link>
            <div className="container" style={{ height: "6000px" }}>
              <div
                className="content"
                // style={{ transform: "translate3d(0, -0.0019px, 0)" }}
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
                    <span className="title">Lead Front-end Developer:</span>
                    <span>Effiong Jerry</span>
                    <span className="title">Lead Back-end Developer:</span>
                    <span>Effiong Jerry</span>
                  </div>

                  <div className="summary reveal">
                    <div className="col-1">
                      <p>
                        {projectDetails.title1} {""} {projectDetails.title2} is
                        a brand design agency based in Portland, Oregon
                      </p>
                      <p>
                        With simplicity, flexibility and maintainablity in mind
                        we build a website uniquely Mega
                      </p>
                    </div>

                    <div className="col-2">
                      <p>
                        {" "}
                        design agency based in Portland, Oregon. With
                        simplicity, flexibility, and maintainability in mind we
                        built a website uniquely mega. Powered by a Craft CMS
                        back-end the website is easy to manage and update. There
                        are several customizable content blocks that can be
                        added and rearranged to make case studies be presented
                        in a meaningful way.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="module-gallery reveal reveal-show">
                  <div
                    className="media gallery flickity-enabled is-draggable"
                    tabIndex="0"
                  >
                    <div
                      className="flickity-viewport"
                      style={{ touchAction: "pan-y" }}
                    >
                      <div
                        className="flickity-slider"
                        style={{ left: "0px", transform: "translateX(-0.02%)" }}
                      >
                        <Image
                          fill
                          src="/carousel_01-slide_01.jpg"
                          alt="Home"
                          aria-selected="true"
                          className="is-selected"
                          style={{ position: "absolute", left: "0%" }}
                        />
                        <Image
                          fill
                          src="/carousel_01-slide_01.jpg"
                          alt="Home"
                          aria-selected="true"
                          className="is-selected"
                          style={{ position: "absolute", left: "100.05%" }}
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      aria-label="prvious"
                      className="flickity-button flickity-prev-next-button previous"
                    >
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        className="flickity-button-icon"
                      >
                        <title>chevron-right</title>
                        <path d="M9.163 4.516c0.418 0.408 4.502 4.695 4.502 4.695 0.223 0.219 0.335 0.504 0.335 0.789s-0.112 0.57-0.335 0.787c0 0-4.084 4.289-4.502 4.695-0.418 0.408-1.17 0.436-1.615 0-0.446-0.434-0.481-1.041 0-1.574l3.747-3.908-3.747-3.908c-0.481-0.533-0.446-1.141 0-1.576s1.197-0.409 1.615 0z"></path>
                      </svg>
                    </button>
                    <button
                      type="button"
                      aria-label="next"
                      className="flickity-button flickity-prev-next-button previous"
                    >
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        className="flickity-button-icon"
                      >
                        <title>chevron-right</title>
                        <path d="M9.163 4.516c0.418 0.408 4.502 4.695 4.502 4.695 0.223 0.219 0.335 0.504 0.335 0.789s-0.112 0.57-0.335 0.787c0 0-4.084 4.289-4.502 4.695-0.418 0.408-1.17 0.436-1.615 0-0.446-0.434-0.481-1.041 0-1.574l3.747-3.908-3.747-3.908c-0.481-0.533-0.446-1.141 0-1.576s1.197-0.409 1.615 0z"></path>
                      </svg>
                    </button>

                    <ol className="flickity-page-dots">
                      <li
                        className="dot is-selected"
                        aria-label="page dot 1"
                        aria-current="step"
                      ></li>
                      <li className="dot" aria-label="page dot 2"></li>
                      <li className="dot" aria-label="page dot 3"></li>
                      <li className="dot" aria-label="page dot 4"></li>
                    </ol>
                  </div>

                  <div className="info">
                    <div className="pagination">
                      <button
                        className="btn-gallery-left"
                        aria-label="previous"
                      >
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                        >
                          <title>arrow-long-left</title>
                          <path d="M0.75 10l5.25-5.5v3.5h13v4h-13v3.5l-5.25-5.5z"></path>
                        </svg>
                      </button>
                      <span className="current">1</span>
                      {"/"}
                      <span className="total">4</span>

                      <button className="btn-gallery-right" aria-label="next">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                        >
                          <title>arrow-long-right</title>
                          <path d="M14 15.5v-3.5h-13v-4h13v-3.5l5.25 5.5-5.25 5.5z"></path>
                        </svg>
                      </button>
                    </div>
                    <h6 className="title">
                      Start with an idea <br /> and make it better
                    </h6>
                    <div className="description">
                      <p>
                        - Home
                        <br />
                        - Work
                        <br />
                        - Studio
                        <br />
                      </p>
                    </div>
                  </div>
                </section>

                <section className="module-copy reveal theme-reduce-top-padding reveal-show">
                  <div className="summary">
                    <div className="col-1">
                      <p>
                        The home page features a randomly selected video, masked
                        in a circle, with animated text describing Studio Mega's
                        high-level process.
                      </p>
                    </div>

                    <div className="col-2">
                      <p>
                        We developed multiple content column layouts, carousels
                        and media assets that provides an ease to the flow pages
                      </p>
                    </div>
                  </div>
                </section>

                <section
                  className="module-quote reveal parallax-vertical-mm-bt reveal-show"
                  data-from="0%"
                  data-to="10%"
                  data-timing="quadOut"
                >
                  <blockquote>
                    <span className="quote-left">"</span>
                    <p>
                      Finding someone that can not only bring expertise and
                      technical ability but also creativity to enhance the
                      experience is hard to find. But Eric does just that.
                    </p>
                    <p>
                      When we work with him, we’re not just handing off a
                      direction and waiting for him to implement it. We
                      collaborate throughout the process and the end result is
                      always better than what we initially thought was possible.
                    </p>
                    <p>
                      On top of that, he’s an awesome dude, good communicator
                      and fun to be around.
                    </p>
                  </blockquote>
                </section>

                <section className="module-gallery reveal reveal-show">
                  <div
                    className="media gallery flickity-enabled is-draggable"
                    tabIndex="0"
                  >
                    <div
                      className="flickity-viewport"
                      style={{ touchAction: "pan-y" }}
                    >
                      <div
                        className="flickity-slider"
                        style={{ left: "0px", transform: "translateX(-0.02%)" }}
                      >
                        <Image
                          fill
                          src="/carousel_01-slide_01.jpg"
                          alt="Home"
                          aria-selected="true"
                          className="is-selected"
                          style={{ position: "absolute", left: "0%" }}
                        />
                        <Image
                          fill
                          src="/carousel_01-slide_01.jpg"
                          alt="Home"
                          aria-selected="true"
                          className="is-selected"
                          style={{ position: "absolute", left: "100.05%" }}
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      aria-label="prvious"
                      className="flickity-button flickity-prev-next-button previous"
                    >
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        className="flickity-button-icon"
                      >
                        <title>chevron-right</title>
                        <path d="M9.163 4.516c0.418 0.408 4.502 4.695 4.502 4.695 0.223 0.219 0.335 0.504 0.335 0.789s-0.112 0.57-0.335 0.787c0 0-4.084 4.289-4.502 4.695-0.418 0.408-1.17 0.436-1.615 0-0.446-0.434-0.481-1.041 0-1.574l3.747-3.908-3.747-3.908c-0.481-0.533-0.446-1.141 0-1.576s1.197-0.409 1.615 0z"></path>
                      </svg>
                    </button>
                    <button
                      type="button"
                      aria-label="next"
                      className="flickity-button flickity-prev-next-button previous"
                    >
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        className="flickity-button-icon"
                      >
                        <title>chevron-right</title>
                        <path d="M9.163 4.516c0.418 0.408 4.502 4.695 4.502 4.695 0.223 0.219 0.335 0.504 0.335 0.789s-0.112 0.57-0.335 0.787c0 0-4.084 4.289-4.502 4.695-0.418 0.408-1.17 0.436-1.615 0-0.446-0.434-0.481-1.041 0-1.574l3.747-3.908-3.747-3.908c-0.481-0.533-0.446-1.141 0-1.576s1.197-0.409 1.615 0z"></path>
                      </svg>
                    </button>

                    <ol className="flickity-page-dots">
                      <li
                        className="dot is-selected"
                        aria-label="page dot 1"
                        aria-current="step"
                      ></li>
                      <li className="dot" aria-label="page dot 2"></li>
                      <li className="dot" aria-label="page dot 3"></li>
                      <li className="dot" aria-label="page dot 4"></li>
                    </ol>
                  </div>

                  <div className="info">
                    <div className="pagination">
                      <button
                        className="btn-gallery-left"
                        aria-label="previous"
                      >
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                        >
                          <title>arrow-long-left</title>
                          <path d="M0.75 10l5.25-5.5v3.5h13v4h-13v3.5l-5.25-5.5z"></path>
                        </svg>
                      </button>
                      <span className="current">1</span>
                      {"/"}
                      <span className="total">4</span>

                      <button className="btn-gallery-right" aria-label="next">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                        >
                          <title>arrow-long-right</title>
                          <path d="M14 15.5v-3.5h-13v-4h13v-3.5l5.25 5.5-5.25 5.5z"></path>
                        </svg>
                      </button>
                    </div>
                    <h6 className="title">Case Studies</h6>
                    <div className="description">
                      <p>
                        A primary focus of the website is to showcase the brand
                        design work that studio Mega has delivered to their
                        clients
                      </p>
                    </div>
                  </div>
                </section>

                <section className="module-copy reveal theme-reduce-top-padding reveal-show">
                  <div className="summary">
                    <div className="col-1">
                      <p>
                        The home page features a randomly selected video, masked
                        in a circle, with animated text describing Studio Mega's
                        high-level process.
                      </p>
                    </div>

                    <div className="col-2">
                      <p>
                        We developed multiple content column layouts, carousels
                        and media assets that provides an ease to the flow pages
                      </p>
                    </div>
                  </div>
                </section>

                <section className="module-image reveal reveal-show">
                  <img
                    src="/carousel_01-slide_01.jpg"
                    alt={`${projectDetails.title1} ${""} ${
                      projectDetails.title2
                    }`}
                    className="media"
                  />

                  <div className="info">
                    <h6 className="title">
                      Studio Mega own branding set them apart from
                      other&nbsp;agencies
                    </h6>
                    <p>
                      vibrant colors, unique blending modes, and hover overkays
                      can be seen here and in hoverable content throughout the
                      website
                    </p>
                  </div>
                </section>

                <section className="module-image reveal reveal-show">
                  <img
                    src="/carousel_01-slide_01.jpg"
                    alt="mobile home and navigation"
                    className="media"
                  />

                  <div className="info">
                    <h6 className="title">
                      A fully featured mobile experience .
                    </h6>

                    <p>
                      Inline auto playing video and animation can been seen on
                      the home, work , and case study pages
                    </p>

                    <p>
                      The animated mobile navigation content keep the mobile
                      experience feeling last fluid
                    </p>
                  </div>
                </section>

                <section className="module-image reveal reveal-show">
                  <img
                    src="/carousel_01-slide_01.jpg"
                    alt="mobile home and navigation"
                    className="media"
                  />

                  <div className="info">
                    <h6 className="title">Touch interactions</h6>

                    <p>
                      Inline auto playing video and animation can been seen on
                      the home, work , and case study pages
                    </p>

                    <p>
                      The animated mobile navigation content keep the mobile
                      experience feeling last fluid
                    </p>
                  </div>
                </section>

                <section className="module-copy reveal theme-reduce-top-padding reveal-show">
                  <div className="summary">
                    <div className="col-1">
                      <p>
                        <strong>
                          Studio Mega has some of the top creative talent in
                          portland area
                        </strong>
                      </p>
                      <p>
                        We're thrilled at each opportunity we have to partner
                        with such an easy going, welcoming group of mega
                        creatives.
                      </p>
                    </div>
                    <div className="col-2">
                      <p>
                        {" "}
                        top creative talent in the Portland area. We're thrilled
                        at each opportunity we have to partner with such an easy
                        going, welcoming group of mega creatives. If you're ever
                        in PDX, be sure to grab a drink with these fine people.
                        Learn about how they've helped build and brand their
                        little create oasis, New New Crusher Court.
                      </p>

                      <p>
                        Like this project and want to chat about what we could
                        do for you? Hit us up!
                      </p>
                    </div>
                  </div>
                </section>

                <section className="module-project reveal parallax-vertical-tb-bt parallax-no-mobile reveal-show">
                  <Link href={``}>
                    <h2 className="next-project">next project</h2>
                    <span className="project-name">
                      {projectDetails.title1} <br />
                      {projectDetails.title2}
                    </span>
                  </Link>
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
