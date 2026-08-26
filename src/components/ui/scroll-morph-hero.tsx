"use client";

/**
 * Scroll-morph gallery.
 *
 * Cards fly in scattered, settle into a line, close into a circle, then morph
 * into an arch as the section scrolls past.
 *
 * Adapted from the reference implementation in one important way: the original
 * captured `wheel` events and called preventDefault, which locks page scrolling
 * while the pointer is over the component. Here the morph is driven by the
 * page's own scroll position through a sticky container, so the visitor can
 * always scroll past.
 */

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export type MorphCard = {
  id: string;
  label: string;
  sub?: string;
  /** Optional screenshot; without it the card paints its gradient instead. */
  image?: string;
  from: string;
  to: string;
  bg: string;
  /** true when `bg` is a light colour, so mini-UI marks flip to dark. */
  light?: boolean;
};

type Phase = "scatter" | "line" | "circle";

const CARD_W = 66;
const CARD_H = 143;
const CIRCLE_SCALE = 1.15;

const lerp = (a: number, b: number, t: number) => a * (1 - t) + b * t;
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

/** Stable 0..1 value for a given index. */
function noise(n: number) {
  const x = Math.sin(n * 127.1) * 43758.5453;
  return x - Math.floor(x);
}

function Card({
  card,
  target,
}: {
  card: MorphCard;
  target: { x: number; y: number; rotation: number; scale: number; opacity: number };
}) {
  return (
    <motion.div
      animate={{
        x: target.x,
        y: target.y,
        rotate: target.rotation,
        scale: target.scale,
        opacity: target.opacity,
      }}
      transition={{ type: "spring", stiffness: 40, damping: 15 }}
      style={{
        position: "absolute",
        width: CARD_W,
        height: CARD_H,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="group cursor-pointer"
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ rotateY: 180 }}
      >
        {/* front — theme preview */}
        <div
          className="absolute inset-0 overflow-hidden rounded-[10px] shadow-lg ring-1 ring-black/10"
          style={{
            backfaceVisibility: "hidden",
            background: card.bg,
            color: card.light ? "#17102e" : "#ffffff",
          }}
        >
          {card.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={card.image}
              alt={card.label}
              className="h-full w-full object-cover"
            />
          ) : (
            /* Miniature of a mobile site in this theme's colours. */
            <div className="flex h-full w-full flex-col p-[4px]">
              {/* status bar + notch */}
              <div className="relative mb-[3px] flex items-center justify-between px-[2px]">
                <span className="h-[2px] w-[7px] rounded-full bg-current opacity-40" />
                <span className="absolute left-1/2 top-0 h-[3px] w-[14px] -translate-x-1/2 rounded-b-[3px] bg-black/45" />
                <span className="h-[2px] w-[9px] rounded-full bg-current opacity-40" />
              </div>

              {/* brand bar */}
              <div className="flex items-center gap-[3px]">
                <span
                  className="h-[7px] w-[7px] shrink-0 rounded-[2px]"
                  style={{
                    background: `linear-gradient(135deg, ${card.from}, ${card.to})`,
                  }}
                />
                <span
                  className="h-[3px] w-[18px] rounded-full"
                  style={{ background: card.from }}
                />
                <span
                  className="ml-auto h-[6px] w-[14px] rounded-[3px]"
                  style={{ background: card.to }}
                />
              </div>

              {/* hero banner */}
              <div
                className="mt-[4px] flex flex-col justify-end gap-[2px] rounded-[4px] p-[3px]"
                style={{
                  height: 26,
                  background: `linear-gradient(120deg, ${card.from}, ${card.to})`,
                }}
              >
                <span className="h-[3px] w-[26px] rounded-full bg-white/85" />
                <span className="h-[2px] w-[16px] rounded-full bg-white/50" />
              </div>

              {/* game grid */}
              <div className="mt-[4px] grid grid-cols-3 gap-[2px]">
                {[0, 1, 2, 3, 4, 5].map((n) => (
                  <span
                    key={n}
                    className="h-[13px] rounded-[2px]"
                    style={{
                      background: "rgba(255,255,255,0.14)",
                      borderTop: `1.5px solid ${n % 2 ? card.to : card.from}`,
                    }}
                  />
                ))}
              </div>

              {/* bottom nav */}
              <div
                className="mt-auto flex items-center justify-around rounded-[3px] px-[2px] py-[3px]"
                style={{ background: "rgba(255,255,255,0.12)" }}
              >
                {[0, 1, 2, 3].map((n) => (
                  <span
                    key={n}
                    className="h-[3px] w-[3px] rounded-full"
                    style={{ background: n === 0 ? card.to : "currentColor", opacity: n === 0 ? 1 : 0.35 }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* back — theme name */}
        <div
          className="absolute inset-0 grid place-items-center overflow-hidden rounded-[10px] bg-ink p-2 text-center shadow-lg"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div>
            <p
              className="font-display text-[8px] font-bold uppercase tracking-[0.14em]"
              style={{ color: card.to }}
            >
              Theme
            </p>
            <p className="mt-0.5 text-[10px] font-semibold leading-tight text-white">
              {card.label}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ScrollMorphHero({
  cards,
  intro,
  detail,
  mobileHeader,
}: {
  cards: MorphCard[];
  intro: ReactNode;
  detail: ReactNode;
  /** Shown above the mobile carousel; falls back to `detail`. */
  mobileHeader?: ReactNode;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { once: true, margin: "-20% 0px" });

  const [phase, setPhase] = useState<Phase>("scatter");
  const [size, setSize] = useState({ width: 0, height: 0 });
  /* The ring needs room the phone simply does not have, so below lg we
     render a carousel instead and never mount the animated cards. */
  const [ringEnabled, setRingEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const apply = () => setRingEnabled(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  /* stage size */
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) =>
      setSize({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      }),
    );
    ro.observe(el);
    setSize({ width: el.offsetWidth, height: el.offsetHeight });
    return () => ro.disconnect();
  }, []);

  /* intro runs once the section is on screen */
  useEffect(() => {
    if (!inView) return;
    const a = setTimeout(() => setPhase("line"), 300);
    const b = setTimeout(() => setPhase("circle"), 1600);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, [inView]);

  /* page scroll drives the morph — no wheel capture */
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });
  const morph = useSpring(useTransform(scrollYProgress, [0, 0.45], [0, 1]), {
    stiffness: 40,
    damping: 20,
  });
  const shuffle = useSpring(useTransform(scrollYProgress, [0.45, 1], [0, 1]), {
    stiffness: 40,
    damping: 20,
  });

  /* pointer parallax */
  const pointer = useMotionValue(0);
  const smoothPointer = useSpring(pointer, { stiffness: 30, damping: 20 });

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      pointer.set(((e.clientX - r.left) / r.width) * 2 - 1);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [pointer]);

  const [morphValue, setMorphValue] = useState(0);
  const [shuffleValue, setShuffleValue] = useState(0);
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    const u1 = morph.on("change", (v) => setMorphValue(clamp01(v)));
    const u2 = shuffle.on("change", (v) => setShuffleValue(clamp01(v)));
    const u3 = smoothPointer.on("change", (v) => setParallax(v * 90));
    return () => {
      u1();
      u2();
      u3();
    };
  }, [morph, shuffle, smoothPointer]);

  /* Deterministic scatter — a seeded value keeps the layout stable across
     renders and avoids impure Math.random() during render. */
  const scatter = useMemo(
    () =>
      cards.map((_, i) => ({
        x: (noise(i) - 0.5) * 1200,
        y: (noise(i + 97) - 0.5) * 800,
        rotation: (noise(i + 41) - 0.5) * 180,
        scale: 0.6,
        opacity: 0,
      })),
    [cards],
  );

  const introOpacity = useTransform(morph, [0, 0.5], [1, 0]);
  const detailOpacity = useTransform(morph, [0.7, 1], [0, 1]);
  const detailY = useTransform(morph, [0.7, 1], [20, 0]);

  const total = cards.length;

  return (
    <>
      {/* ---------- mobile: a plain horizontal carousel ---------- */}
      <div className="px-6 py-20 lg:hidden">
        <div className="mx-auto max-w-[560px] text-center">
          {mobileHeader ?? detail}
        </div>

        <ul className="-mx-6 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4">
          {cards.map((card) => (
            <li key={card.id} className="w-[172px] shrink-0 snap-center">
              {card.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={card.image}
                  alt={card.label}
                  loading="lazy"
                  className="h-auto w-full rounded-2xl shadow-lg ring-1 ring-black/10"
                />
              ) : (
                <div
                  className="aspect-[66/143] w-full rounded-2xl ring-1 ring-black/10"
                  style={{ background: card.bg }}
                />
              )}
              <p className="mt-2 text-center text-[12.5px] text-ink-muted">
                {card.label}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-2 text-center text-[12.5px] text-ink-faint">
          ปัดซ้าย–ขวาเพื่อดูธีมทั้งหมด {cards.length} แบบ
        </p>
      </div>

      {/* ---------- desktop: the morphing ring ---------- */}
      <div ref={wrapRef} className="relative hidden h-[190vh] lg:block">
      <div
        ref={stageRef}
        className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden"
      >
        {/* headline that fades out as the arch forms */}
        <motion.div
          style={{ opacity: introOpacity }}
          className="pointer-events-none absolute z-0 mx-auto max-w-[760px] px-6 text-center"
        >
          {intro}
        </motion.div>

        {/* copy that fades in once the arch is formed */}
        <motion.div
          style={{ opacity: detailOpacity, y: detailY }}
          className="pointer-events-none absolute top-[12%] z-10 px-6 text-center"
        >
          {detail}
        </motion.div>

        <div className="relative flex h-full w-full items-center justify-center">
          {ringEnabled &&
            cards.map((card, i) => {
            let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

            if (phase === "scatter") {
              target = scatter[i];
            } else if (phase === "line") {
              const spacing = CARD_W + 14;
              target = {
                x: i * spacing - (total * spacing) / 2,
                y: 0,
                rotation: 0,
                scale: 1,
                opacity: 1,
              };
            } else {
              const isMobile = size.width < 768;

              /* A rotated card reaches out by half its height, so the ring has
                 to fit the stage minus that, and stay wide enough to clear the
                 headline sitting in the middle. */
              const cardReach = (CARD_H * CIRCLE_SCALE) / 2;
              const circleRadius = Math.min(
                Math.max(size.height / 2 - cardReach - 12, 300),
                460,
              );
              const circleAngle = (i / total) * 360;
              const circleRad = (circleAngle * Math.PI) / 180;

              const arcRadius =
                Math.min(size.width, size.height * 1.5) * (isMobile ? 1.4 : 1.1);
              const arcCenterY =
                size.height * (isMobile ? 0.35 : 0.22) + arcRadius;

              const spread = isMobile ? 100 : 130;
              const step = spread / (total - 1);
              const bounded = -shuffleValue * spread * 0.8;
              const arcAngle = -90 - spread / 2 + i * step + bounded;
              const arcRad = (arcAngle * Math.PI) / 180;

              target = {
                x: lerp(
                  Math.cos(circleRad) * circleRadius,
                  Math.cos(arcRad) * arcRadius + parallax,
                  morphValue,
                ),
                y: lerp(
                  Math.sin(circleRad) * circleRadius,
                  Math.sin(arcRad) * arcRadius + arcCenterY,
                  morphValue,
                ),
                rotation: lerp(circleAngle + 90, arcAngle + 90, morphValue),
                scale: lerp(CIRCLE_SCALE, isMobile ? 1.3 : 1.55, morphValue),
                opacity: 1,
              };
            }

              return <Card key={card.id} card={card} target={target} />;
            })}
        </div>
      </div>
      </div>
    </>
  );
}
