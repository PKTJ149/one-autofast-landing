import ScrollMorphHero, {
  type MorphCard,
} from "@/components/ui/scroll-morph-hero";

/* Real theme screenshots, 430x932. Filenames keep the numbering from the
   design hand-off, so gaps (12, 13, 17) are expected. */
const FILES = [
  "theme01.png",
  "theme02.png",
  "theme03.png",
  "theme04.png",
  "theme05.png",
  "theme06.png",
  "theme07.png",
  "theme08.png",
  "theme09.png",
  "theme10.png",
  "theme11.png",
  "theme14.jpg",
  "theme15.jpg",
  "theme16.jpg",
  "theme18.png",
  "theme19.jpg",
  "theme20.jpg",
];

/* Accents only colour the flipped-over back face; the fronts are photographs. */
const ACCENTS = [
  { from: "#7c3aed", to: "#22d3ee" },
  { from: "#ff6b2c", to: "#ffc46b" },
  { from: "#d4af37", to: "#8a6f1f" },
  { from: "#0ea5e9", to: "#34d399" },
  { from: "#603ce3", to: "#ff6b2c" },
];

const CARDS: MorphCard[] = FILES.map((file, i) => ({
  id: file,
  label: `ธีมที่ ${String(i + 1).padStart(2, "0")}`,
  image: `/themes/${file}`,
  bg: "#0d0b1a",
  ...ACCENTS[i % ACCENTS.length],
}));

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
            {/* Kept on one line, and small enough that the ring clears it
                even on a 900px-tall screen. */}
            <h2 className="mt-4 text-[24px] font-bold tracking-[-0.01em] sm:text-[26px] lg:whitespace-nowrap">
              โดดเด่นด้วยธีมที่ออกแบบมาอย่างดี
            </h2>
            <p className="mt-3 font-display text-[12px] font-bold uppercase tracking-[0.2em] text-ink-faint">
              เลื่อนลงเพื่อดูธีมทั้งหมด
            </p>
          </>
        }
        mobileHeader={
          <>
            <span className="inline-flex items-center gap-2.5 font-display text-[14px] font-semibold uppercase tracking-[0.16em] text-violet">
              <i className="h-2.5 w-2.5 rounded-full bg-orange" aria-hidden />
              ปรับแต่งเว็บให้ดึงดูดลูกค้า
            </span>
            <h2 className="mt-4 text-[26px] font-bold tracking-[-0.01em]">
              โดดเด่นด้วยธีมที่ออกแบบมาอย่างดี
            </h2>
            <p className="mt-3 text-[15.5px] leading-[1.85] text-ink-muted">
              ไม่ว่าจะเรียบหรู ทันสมัย หรือสดใส ยกระดับภาพลักษณ์
              แตกต่างจากคู่แข่ง และสร้างความเชื่อมั่นให้ลูกค้า
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
