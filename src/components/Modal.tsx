"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useCallback, useRef } from "react";

export function Modal({ children }: { children: ReactNode }) {
  const router = useRouter();
  const overlay = useRef(null);
  const wrapper = useRef(null);

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  return (
    <div
      ref={overlay}
      onClick={onClick}
      className="fixed inset-0 bg-black/80 z-20"
    >
      <div
        ref={wrapper}
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-6xl z-30"
      >
        {children}
      </div>
    </div>
  );
}
