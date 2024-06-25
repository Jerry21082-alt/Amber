"use client";

import { duration } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function AnimateOnReveal({
  children,
  animationFrom = { opacity: 0, y: 50 },
  animationTo = { opacity: 1, y: 0, duration: 0.3, delay: 0 },
  triggerStart = "top 75%",
  triggerEnd = "bottom top",
  toggleActions = "play none none none",
}) {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(textRef.current, animationFrom, {
      ...animationTo,
      ease: "power2",
      scrollTrigger: textRef.current,
      start: triggerStart,
      end: triggerEnd,
      toggleActions: toggleActions,
    });
  }, [animationFrom, animationTo, triggerEnd, triggerStart, toggleActions]);
  return <div ref={textRef}>{children}</div>;
}
