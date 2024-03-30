import { HTMLProps } from "react";

interface Props {
  containerStyle: HTMLProps<HTMLElement>["className"];
  iconStyle: HTMLProps<HTMLElement>["className"];
  socials: [ISocialAttributes];
}

export function Socials({ containerStyle, iconStyle, socials }: Props) {
  return (
    <div className={containerStyle}>
      {socials.map((contact, index) => (
        <a key={index} href={contact.url} target="_blank">
          <div
            className={iconStyle}
            dangerouslySetInnerHTML={{
              __html: contact.icon,
            }}
          />
        </a>
      ))}
    </div>
  );
}
