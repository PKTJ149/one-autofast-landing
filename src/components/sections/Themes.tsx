import ScrollMorphHero, {
  type MorphCard,
} from "@/components/ui/scroll-morph-hero";

/* The five themes, repeated to fill the ring. Add `image` to any entry once a
   real theme screenshot lands in /public/themes. */
const THEMES = [
  { id: "midnight", label: "Midnight", bg: "#0d0b1a", from: "#7c3aed", to: "#22d3ee" },
  { id: "sunset", label: "Sunset", bg: "#1a0f0a", from: "#ff6b2c", to: "#ffc46b" },
  { id: "luxe", label: "Luxe Gold", bg: "#100f0c", from: "#d4af37", to: "#8a6f1f" },
  { id: "ocean", label: "Ocean", bg: "#04121c", from: "#0ea5e9", to: "#34d399" },
  { id: "daylight", label: "Daylight", bg: "#f4f2fb", from: "#7c3aed", to: "#ff6b2c", light: true },
];

const CARDS: MorphCard[] = Array.from({ length: 20 }, (_, i) => {
  const t = THEMES[i % THEMES.length];
  return { ...t, id: `${t.id}-${i}` };
});

export default function Themes() {
  return (
    <section id="themes">
      <ScrollMorphHero
        cards={CARDS}
        intro={
          <>
            <span className="inline-flex items-center gap-2.5 font-display text-[14px] font-semibold uppercase tracking-[0.16em] text-violet">
              <i className="h-2.5 w-2.5 rounded-full bg-orange" aria-hidden />
              ปรับแต่งเว็บให้ดึงดูดลูกค้า
            </span>
            {/* one line once the ring is wide enough to clear it */}
            <h2 className="mt-4 text-[26px] font-bold tracking-[-0.01em] sm:text-[34px] lg:whitespace-nowrap">
              โดดเด่นด้วยธีมที่ออกแบบมาอย่างดี
            </h2>
            <p className="mt-3 font-display text-[12px] font-bold uppercase tracking-[0.2em] text-ink-faint">
              เลื่อนลงเพื่อดูธีมทั้งหมด
            </p>
          </>
        }
        detail={
          <>
            <h3 className="text-[26px] font-bold tracking-[-0.01em] sm:text-[36px]">
              เลือกธีมที่ใช่สำหรับแบรนด์คุณ
            </h3>
            <p className="mx-auto mt-3 max-w-[560px] text-[15.5px] leading-[1.85] text-ink-muted">
              ไม่ว่าจะเรียบหรู ทันสมัย หรือสดใส
              ยกระดับภาพลักษณ์ แตกต่างจากคู่แข่ง และสร้างความเชื่อมั่นให้ลูกค้า
            </p>
          </>
        }
      />
    </section>
  );
}
