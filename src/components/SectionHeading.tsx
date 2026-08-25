import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  /** Split lays eyebrow+title on the left and the description on the right. */
  align?: "split" | "center";
};

/**
 * Shared section header. The "split" variant deliberately breaks away from the
 * centred stack the rest of the category uses.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "split",
}: Props) {
  if (align === "center") {
    return (
      <div className="mx-auto max-w-[720px] text-center">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 text-[28px] font-bold tracking-[-0.01em] sm:text-[36px]">
          {title}
        </h2>
        {description && (
          <p className="mx-auto mt-4 max-w-[560px] text-[15.5px] text-ink-muted">
            {description}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="grid gap-6 border-b border-line pb-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 text-[28px] font-bold tracking-[-0.01em] sm:text-[36px]">
          {title}
        </h2>
      </div>
      {description && (
        <p className="text-[15.5px] text-ink-muted lg:pb-2">{description}</p>
      )}
    </div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-display text-[11.5px] font-semibold uppercase tracking-[0.16em] text-violet">
      <i className="h-1.5 w-1.5 rounded-full bg-orange" aria-hidden />
      {children}
    </span>
  );
}
