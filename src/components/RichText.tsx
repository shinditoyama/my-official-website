import { RichText as RichTextCMS } from "@graphcms/rich-text-react-renderer";
import { ComponentProps } from "react";

type RichTextProps = ComponentProps<typeof RichTextCMS>;

export function RichText({ ...props }: RichTextProps) {
  return (
    <RichTextCMS
      renderers={{
        bold: ({ children }) => (
          <strong className="text-primary font-semibold">{children}</strong>
        ),
        ul: ({ children }) => (
          <ul className="flex flex-col gap-2 pl-2 list-disc list-inside">
            {children}
          </ul>
        ),
      }}
      {...props}
    />
  );
}
