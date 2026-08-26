"use client";

import type { CSSProperties, HTMLAttributes } from "react";

/**
 * Shine Border — adapted from MagicUI (magicui.design/docs/components/shine-border).
 *
 * Paints an animated gradient just inside the parent's rounded edge. The trick
 * is mask-composite: the element is filled with a moving gradient, then the
 * padding box is masked out, leaving only a border-width ring.
 *
 * The parent must be `relative` and carry the border radius.
 */
type ShineBorderProps = HTMLAttributes<HTMLDivElement> & {
  /** Ring thickness in px. */
  borderWidth?: number;
  /** Seconds for one full sweep. */
  duration?: number;
  /** One colour, or several to blend through. */
  shineColor?: string | string[];
};

export default function ShineBorder({
  borderWidth = 1,
  duration = 14,
  shineColor = "#7c3aed",
  className = "",
  style,
  ...props
}: ShineBorderProps) {
  const colors = Array.isArray(shineColor)
    ? shineColor.join(",")
    : shineColor;

  return (
    <div
      aria-hidden
      style={
        {
          "--shine-duration": `${duration}s`,
          padding: `${borderWidth}px`,
          backgroundImage: `radial-gradient(transparent, transparent, ${colors}, transparent, transparent)`,
          backgroundSize: "300% 300%",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          ...style,
        } as CSSProperties
      }
      className={`pointer-events-none absolute inset-0 size-full rounded-[inherit] will-change-[background-position] animate-shine ${className}`}
      {...props}
    />
  );
}
