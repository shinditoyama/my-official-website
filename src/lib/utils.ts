import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const links = [
  { path: "/", name: "home" },
  { path: "/portfolio", name: "portfolio" },
  { path: "/contact", name: "contato" },
];
