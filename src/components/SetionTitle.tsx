import { MotionH3, MotionSpan } from "./Motion";

interface Props {
  title: string;
  subtitle: string;
}

export function SectionTitle({ title, subtitle }: Props) {
  const animProps = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <div className="flex flex-col gap-4">
      <MotionSpan
        {...animProps}
        transition={{ duration: 0.5 }}
        className="text-sm font-mono text-primary"
      >
        {`../${subtitle}`}
      </MotionSpan>
      <MotionH3
        {...animProps}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-medium"
      >
        {title}
      </MotionH3>
    </div>
  );
}
