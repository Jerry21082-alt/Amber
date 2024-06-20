"use client";

import AnimateOnReveal from "@/components/AnimateOnReveal";
import { projects } from "@/constants";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import Link from "next/link";
import { useEffect, useState } from "react";

const page = ({ params }) => {
  const { id } = params;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexSec, setCurrentIndexSec] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [uiMode, setUiMode] = useLocalStorage("uiMode", "ultra-mode");

  const projectDetails = getProductDetails();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const slides = projectDetails.pagePhotos;
  const slides2 = projectDetails.pagePhotos2;

  const showSlide = (index) => {
    const totalSlides = slides.length;
    if (index >= totalSlides) {
      setCurrentIndex(0);
    } else if (index < 0) {
      setCurrentIndex(totalSlides - 1);
    } else {
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => {
    showSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    showSlide(currentIndex - 1);
  };

  const showSlideSec = (index) => {
    const totalSlides = slides2.length;
    if (index >= totalSlides) {
      setCurrentIndexSec(0);
    } else if (index < 0) {
      setCurrentIndexSec(totalSlides - 1);
    } else {
      setCurrentIndexSec(index);
    }
  };

  const nextSlideSec = () => {
    showSlideSec(currentIndexSec + 1);
  };

  const prevSlideSec = () => {
    showSlideSec(currentIndexSec - 1);
  };

  function getProductDetails() {
    const [projectDetails] = projects.filter((project) => {
      const projectFullName = project.title1
        .concat(project.title2)
        .toLocaleLowerCase();

      return projectFullName === id[0];
    });

    return projectDetails;
  }

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
            <div className="container">
              <div
                className="content"
                // style={{ transform: "translate3d(0, -0.0019px, 0)" }}
              >
                <section
                  className="hero"
                  style={{
                    backgroundImage: `url("${projectDetails.introPhoto}")`,
                  }}
                >
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
                    <AnimateOnReveal animation="content-slide" delay=".4s">
                      <h5>
                        <a
                          href={projectDetails.href}
                          target="_blank"
                          rel="noopener"
                          style={{ color: "blue" }}
                        >
                          {projectDetails.href}
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
                    </AnimateOnReveal>
                  </div>

                  <div className="summary reveal">
                    <div className="col-1">
                      <AnimateOnReveal animation="content-slide">
                        <p>
                          <strong>
                            {projectDetails.overview.section_1.intro}
                          </strong>
                        </p>
                        <p>{projectDetails.overview.section_1.paragraph_1}</p>
                      </AnimateOnReveal>
                    </div>

                    <div className="col-2">
                      <AnimateOnReveal animation="content-slide" delay=".2s">
                        <p>{projectDetails.overview.section_1.paragraph_2}</p>
                      </AnimateOnReveal>
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
                      {slides.map((photo, idx) => (
                        <div
                          key={idx}
                          className="flickity-slider"
                          style={{
                            left: "0px",
                            transform: `translateX(${-currentIndex * 100}%)`,
                            transition: "transform .5s ease-in-out",
                          }}
                        >
                          <img
                            src={`${photo}`}
                            alt="Home"
                            aria-selected="true"
                            className="is-selected"
                            style={{
                              position: "absolute",
                              left: `${idx * 100}%`,
                            }}
                          />
                        </div>
                      ))}
                    </div>
                    <button
                      type="button"
                      aria-label="prvious"
                      onClick={prevSlide}
                      style={{ display: "none" }}
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
                      onClick={nextSlide}
                      style={{ display: "none" }}
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
                      {slides.map((slide, idx) => (
                        <li
                          key={idx}
                          className={`dot ${
                            slides.indexOf(slide) === currentIndex
                              ? "is-selected"
                              : ""
                          }`}
                          aria-label="page dot 1"
                          aria-current="step"
                        ></li>
                      ))}
                    </ol>
                  </div>

                  <div className="info">
                    <AnimateOnReveal animation="content-rotate">
                      <div className="pagination">
                        <button
                          className="btn-gallery-left"
                          aria-label="previous"
                          onClick={prevSlide}
                          style={{ width: "35px", height: "20px" }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            id="left-arrow"
                            // width="20px"
                            // height="20px"
                            style={{ width: "100%", height: "100%" }}
                          >
                            <path d="M1.293,12.707a1,1,0,0,1,0-1.414l5-5A1,1,0,0,1,7.707,7.707L4.414,11H22a1,1,0,0,1,0,2H4.414l3.293,3.293a1,1,0,1,1-1.414,1.414Z"></path>
                          </svg>
                        </button>
                        <span className="current">{currentIndex + 1}</span>
                        {"/"}
                        <span className="total">{slides.length}</span>

                        <button
                          className="btn-gallery-right"
                          aria-label="next"
                          onClick={nextSlide}
                          style={{ width: "20px", height: "20px" }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            id="right-arrow"
                            // width="20px"
                            // height="20px"
                            style={{ width: "100%", height: "100%" }}
                          >
                            <path d="M22.707,12.707a1,1,0,0,0,0-1.414l-6-6a1,1,0,0,0-1.414,1.414L19.586,11H2a1,1,0,0,0,0,2H19.586l-4.293,4.293a1,1,0,0,0,1.414,1.414Z"></path>
                          </svg>
                        </button>
                      </div>
                      <h6 className="title">
                        {projectDetails.overview.section_2.side.heading}
                      </h6>
                      <div className="description">
                        <p>
                          - {projectDetails.overview.section_2.side.list[0]}
                          <br />-{" "}
                          {projectDetails.overview.section_2.side.list[1]}
                          <br />-{" "}
                          {projectDetails.overview.section_2.side.list[2]}
                          <br />
                        </p>
                      </div>
                    </AnimateOnReveal>
                  </div>
                </section>

                <section className="module-copy reveal theme-reduce-top-padding reveal-show">
                  <div className="summary">
                    <div className="col-1">
                      <AnimateOnReveal animation="content-slide">
                        <p>{projectDetails.overview.section_2.paragraph_1}</p>
                      </AnimateOnReveal>
                    </div>

                    <div className="col-2">
                      <AnimateOnReveal animation="content-slide" delay=".2s">
                        <p>{projectDetails.overview.section_2.paragraph_2}</p>
                      </AnimateOnReveal>
                    </div>
                  </div>
                </section>

                <section
                  className="module-quote reveal parallax-vertical-mm-bt reveal-show"
                  data-from="0%"
                  data-to="10%"
                  data-timing="quadOut"
                >
                  <AnimateOnReveal animation="content-rotate">
                    <blockquote>
                      <span className="quote-left">"</span>
                      <p>{projectDetails.overview.section_3.paragraph_1}</p>
                    </blockquote>
                  </AnimateOnReveal>
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
                      {slides2.map((photo, idx) => (
                        <div
                          key={idx}
                          className="flickity-slider"
                          style={{
                            left: "0px",
                            transform: `translateX(${-currentIndexSec * 100}%)`,
                            transition: "transform .5s ease-in-out",
                          }}
                        >
                          <img
                            src={`${photo}`}
                            alt="Home"
                            aria-selected="true"
                            className="is-selected object-center object-cover"
                            style={{
                              position: "absolute",
                              left: `${idx * 100}%`,
                            }}
                          />
                        </div>
                      ))}
                    </div>
                    <button
                      type="button"
                      aria-label="prvious"
                      onClick={prevSlide}
                      style={{ display: "none" }}
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
                      onClick={nextSlide}
                      style={{ display: "none" }}
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
                      {slides2.map((slide, idx) => (
                        <li
                          key={idx}
                          className={`dot ${
                            slides2.indexOf(slide) === currentIndexSec
                              ? "is-selected"
                              : ""
                          }`}
                          aria-label="page dot 1"
                          aria-current="step"
                        ></li>
                      ))}
                    </ol>
                  </div>

                  <div className="info">
                    <AnimateOnReveal animation="content-rotate">
                      <div className="pagination">
                        <button
                          className="btn-gallery-left"
                          aria-label="previous"
                          onClick={prevSlideSec}
                          style={{ width: "35px", height: "20px" }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            id="left-arrow"
                            // width="20px"
                            // height="20px"
                            style={{ width: "100%", height: "100%" }}
                          >
                            <path d="M1.293,12.707a1,1,0,0,1,0-1.414l5-5A1,1,0,0,1,7.707,7.707L4.414,11H22a1,1,0,0,1,0,2H4.414l3.293,3.293a1,1,0,1,1-1.414,1.414Z"></path>
                          </svg>
                        </button>
                        <span className="current">{currentIndexSec + 1}</span>
                        {"/"}
                        <span className="total">{slides2.length}</span>

                        <button
                          className="btn-gallery-right"
                          aria-label="next"
                          onClick={nextSlideSec}
                          style={{ width: "20px", height: "20px" }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            id="right-arrow"
                            // width="20px"
                            // height="20px"
                            style={{ width: "100%", height: "100%" }}
                          >
                            <path d="M22.707,12.707a1,1,0,0,0,0-1.414l-6-6a1,1,0,0,0-1.414,1.414L19.586,11H2a1,1,0,0,0,0,2H19.586l-4.293,4.293a1,1,0,0,0,1.414,1.414Z"></path>
                          </svg>
                        </button>
                      </div>
                      <h6 className="title">
                        {projectDetails.overview.section_4.side.heading}
                      </h6>
                      <div className="description">
                        <p>
                          - {projectDetails.overview.section_4.side.list[0]}
                          <br />-{" "}
                          {projectDetails.overview.section_4.side.list[1]}
                          <br />-{" "}
                          {projectDetails.overview.section_4.side.list[2]}
                          <br />
                        </p>
                      </div>
                    </AnimateOnReveal>
                  </div>
                </section>

                <section className="module-copy reveal theme-reduce-top-padding reveal-show">
                  <div className="summary">
                    <div className="col-1">
                      <AnimateOnReveal animation="content-slide">
                        <p>{projectDetails.overview.section_4.paragraph_1}</p>
                      </AnimateOnReveal>
                    </div>

                    <div className="col-2">
                      <AnimateOnReveal animation="content-slide" delay=".2s">
                        <p>{projectDetails.overview.section_4.paragraph_2}</p>
                      </AnimateOnReveal>
                    </div>
                  </div>
                </section>

                <section className="module-image reveal reveal-show">
                  <img
                    src={projectDetails.pagePhot3}
                    alt={`${projectDetails.title1} ${""} ${
                      projectDetails.title2
                    }`}
                    className="media"
                  />

                  <div className="info">
                    <AnimateOnReveal animation="content-rotate">
                      <h6 className="title">
                        {projectDetails.overview.section_5[0]}
                      </h6>
                      <p>{projectDetails.overview.section_5[1]}</p>
                    </AnimateOnReveal>
                  </div>
                </section>

                <section className="module-image reveal reveal-show">
                  <img
                    src={`${projectDetails.mobilePhotos[0]}`}
                    alt="mobile home and navigation"
                    className="media"
                  />

                  <div className="info">
                    <AnimateOnReveal animation="content-rotate" delay=".2s">
                      <h6 className="title">
                        {projectDetails.overview.section_6[0]}
                      </h6>

                      <p>{projectDetails.overview.section_6[1]}</p>
                    </AnimateOnReveal>
                  </div>
                </section>

                <section className="module-image reveal reveal-show">
                  <img
                    src={`${projectDetails.mobilePhotos[1]}`}
                    alt="mobile home and navigation"
                    className="media"
                  />

                  <div className="info">
                    <AnimateOnReveal animation="content-rotate">
                      <h6 className="title">
                        {projectDetails.overview.section_7[0]}
                      </h6>

                      <p>{projectDetails.overview.section_7[1]}</p>

                      <p>{projectDetails.overview.section_7[2]}</p>
                    </AnimateOnReveal>
                  </div>
                </section>

                <section className="module-copy reveal theme-reduce-top-padding reveal-show">
                  <div className="summary">
                    <div className="col-1">
                      <AnimateOnReveal animation="content-slide">
                        <p>
                          <strong>
                            {projectDetails.overview.section_8.heading}
                          </strong>
                        </p>
                        <p>{projectDetails.overview.section_8.paragraph_1}</p>
                      </AnimateOnReveal>
                    </div>
                    <div className="col-2">
                      <AnimateOnReveal animation="content-slide" delay=".2s">
                        <p>{projectDetails.overview.section_8.paragraph_2}</p>

                        <p>
                          Like this project and want to chat about what we could
                          do for you? Hit us up!
                        </p>
                      </AnimateOnReveal>
                    </div>
                  </div>
                </section>

                <section className="module-project reveal parallax-vertical-tb-bt parallax-no-mobile reveal-show">
                  <Link href={``}>
                    <h2
                      className="next-project"
                      style={{
                        color:
                          isMounted && uiMode === "night-mode"
                            ? "#fff"
                            : "#000",
                      }}
                    >
                      next project
                    </h2>
                    <span
                      className="project-name"
                      style={{
                        WebkitTextStrokeColor:
                          isMounted && uiMode === "night-mode"
                            ? "#fff"
                            : "#000",
                      }}
                    >
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
