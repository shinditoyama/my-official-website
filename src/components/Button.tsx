import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "flex justify-center items-center gap-2 py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 transition-all",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
