"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export function TypedText() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Fullstack Developer", "Game Developer"],
      typeSpeed: 50,
      backSpeed: 35,
      backDelay: 2500,
      startDelay: 0,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="uppercase text-primary text-lg font-bold mb-4 xl:mb-2 tracking-widest">
      <span ref={el} />
    </div>
  );
}
