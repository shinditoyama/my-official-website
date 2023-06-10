"use client";

import { useCallback, useEffect, useState } from "react";

export function BackToTop() {
  const [show, setShow] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = useCallback(() => {
    if (!show && window.scrollY > 500) setShow(true);
    if (show && window.scrollY <= 500) setShow(false);
  }, [show]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="fixed right-4 bottom-4 z-20">
      {show && (
        <button
          onClick={scrollToTop}
          className="bg-emerald-600 py-3 px-4 rounded-lg hover:bg-emerald-500 transition-all"
        >
          Top
        </button>
      )}
    </div>
  );
}
