"use client";
import { ChevronsUp } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "./Button";

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
        <Button onClick={scrollToTop} className="p-3 rounded-full">
          <ChevronsUp />
        </Button>
      )}
    </div>
  );
}
