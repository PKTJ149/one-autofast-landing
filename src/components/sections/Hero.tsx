import AvatarStack from "@/components/AvatarStack";

const STATS = [
  { value: "1,000+", label: "ผู้ใช้งานที่ไว้ใจเรา" },
  { value: "60+", label: "ช่องทางชำระเงิน" },
  { value: "24/7", label: "ทีมซัพพอร์ต" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-20 pt-24 lg:px-10 lg:pb-24 lg:pt-28"
    >
      <div className="relative z-10 mx-auto grid max-w-[1180px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* ---------- copy ---------- */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2.5 rounded-pill border border-violet-tint bg-white/70 py-1.5 pl-2 pr-4 backdrop-blur-md">
            <span className="rounded-pill bg-indigo px-2.5 py-1 font-display text-[10.5px] font-bold tracking-[0.1em] text-white">
              NEW
            </span>
            <span className="text-[12.5px] text-ink-muted">
              แพลตฟอร์มมาตรฐานระดับโลกสำหรับธุรกิจออนไลน์
            </span>
          </div>

          <h1 className="mx-auto mt-7 max-w-[560px] lg:mx-0 text-[34px] font-bold leading-[1.3] tracking-[-0.01em] sm:text-[42px] lg:text-[50px]">
            {/* Thai has no spaces, so the browser may break mid-phrase.
                Each line is its own block to keep the phrasing intact. */}
            <span className="block">
              เพิ่มพลังให้ธุรกิจของคุณ
            </span>
            <span className="block text-indigo sm:whitespace-nowrap">
              โตเร็ว คุมได้ ครบในที่เดียว
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-[520px] lg:mx-0 text-[16px] text-ink-muted">
            พลิกโฉมธุรกิจการเดิมพันของคุณให้เหนือชั้น
            และเติบโตได้อย่างไร้ขีดจำกัด ด้วยระบบอัตโนมัติ ที่ผสานความรวดเร็ว,
            ความปลอดภัยและความสมบูรณ์แบบตามมาตรฐานสากล จาก Auto Fast
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-5 lg:justify-start">
            <a
              href="#contact"
              className="inline-block rounded-xl bg-cta px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_0_24px_rgba(255,114,33,0.5),0_14px_34px_-10px_rgba(255,114,33,0.95)] transition-all hover:scale-[1.03] hover:shadow-[0_0_34px_rgba(255,114,33,0.75),0_18px_42px_-10px_rgba(255,114,33,1)]"
            >
              ติดต่อฝ่ายขาย
            </a>

            <AvatarStack />
          </div>

          <dl className="mt-12 flex justify-center gap-9 border-t border-line pt-7 lg:justify-start">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-display text-[26px] font-bold tracking-[-0.02em] text-violet-deep">
                    {s.value}
                  </span>
                  <span className="text-[12.5px] text-ink-faint">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ---------- product artwork ---------- */}
        {/* Animated SVG: CSS keyframes live inside the file and play while it
            is loaded through <img>. next/image would need dangerouslyAllowSVG
            and gives us nothing here, so a plain img is the simpler choice. */}
        {/* Wider than its grid track on desktop so the artwork bleeds past the
            container edge — the section clips it. */}
        <div className="lg:w-[172%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero.svg"
            alt="ตัวอย่างหน้าจอระบบหลังบ้านของ Auto Fast Track"
            width={1600}
            height={1188}
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
