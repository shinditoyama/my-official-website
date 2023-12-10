import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HTMLProps } from "react";

const links = [
  { path: "/", name: "home" },
  { path: "/project", name: "projetos" },
  { path: "/contact", name: "contato" },
];

interface Props {
  containerStyle: HTMLProps<HTMLElement>["className"];
  linkStyle: HTMLProps<HTMLElement>["className"];
  underlineStyle?: HTMLProps<HTMLElement>["className"];
}

export function Nav({ containerStyle, linkStyle, underlineStyle }: Props) {
  const path = usePathname();

  return (
    <nav className={containerStyle}>
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.name}
          className={`capitalize ${linkStyle}`}
        >
          {link.path === path && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={underlineStyle}
            />
          )}
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
