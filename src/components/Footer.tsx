import { Contact } from "./sections/Contact";

export function Footer() {
  return (
    <footer className="bg-gray-950">
      <Contact />
      <div className="w-full h-14 flex items-center justify-center">
        <span className="flex items-center gap-2 text-sm sm:text-base font-mono text-gray-400">
          Made by <strong className="font-medium">Shindi Toyama</strong>
        </span>
      </div>
    </footer>
  );
}
