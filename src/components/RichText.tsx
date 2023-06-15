import { RichText as RichTextCMS } from "@graphcms/rich-text-react-renderer";
import { ComponentProps } from "react";

type RichTextProps = ComponentProps<typeof RichTextCMS>;

export function RichText({ ...props }: RichTextProps) {
  return (
    <RichTextCMS
      renderers={{
        bold: ({ children }) => (
          <b className="text-gray-50 font-medium">{children}</b>
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
