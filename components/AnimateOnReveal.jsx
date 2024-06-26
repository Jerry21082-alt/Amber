"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function AnimateOnReveal({
  children,
  animationFrom = { opacity: 0, y: 50 },
  animationTo = { opacity: 1, y: 0, duration: 0.5, delay: 0 },
  triggerEnd = "bottom top",
  toggleActions = "play none none none",
}) {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(ref.current, animationFrom, {
      ...animationTo,
      ease: "power1",
      scrollTrigger: ref.current,
      end: triggerEnd,
      toggleActions: toggleActions,
    });
  }, [animationFrom, animationTo, triggerEnd, toggleActions]);
  return <div ref={ref}>{children}</div>;
}
