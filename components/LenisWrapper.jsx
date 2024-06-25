"use client";

import { useEffect, useRef } from "react";

export * from "lenis/react";
import { ReactLenis, useLenis } from "lenis/react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function LenisWrapper({ children }) {
  const lenisRef = useRef();

  // useEffect(() => {
  //   function update(time) {
  //     lenisRef.current?.lenis?.raf(time * 1000);
  //   }

  //   gsap.ticker.add(update);

  //   return () => {
  //     gsap.ticker.remove(update);
  //   };
  // });

  return (
    <ReactLenis ref={lenisRef} autoRaf={false}>
      {children}
    </ReactLenis>
  );
}
