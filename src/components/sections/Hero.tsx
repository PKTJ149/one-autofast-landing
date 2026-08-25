import AvatarStack from "@/components/AvatarStack";

const STATS = [
  { value: "1,000+", label: "ผู้ใช้งานที่ไว้ใจเรา" },
  { value: "60+", label: "ช่องทางชำระเงิน" },
  { value: "24/7", label: "ทีมซัพพอร์ต" },
];

const BARS = [42, 66, 35, 88, 54, 73, 96];

const ROWS = [
  { label: "ยอดฝากรวม", value: "฿ 2,103,221.67" },
  { label: "สมาชิกที่ใช้งาน", value: "300", delta: "▲ 12%" },
  { label: "ยอด ONE2Coin", value: "1,985,014" },
  { label: "รอทำรายการถอน", value: "4" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-28 pt-32 lg:px-10 lg:pb-36 lg:pt-40"
    >
      <div className="relative z-10 mx-auto grid max-w-[1180px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* ---------- copy ---------- */}
        <div>
          <div className="inline-flex items-center gap-2.5 rounded-pill border border-violet-tint bg-white/70 py-1.5 pl-2 pr-4 backdrop-blur-md">
            <span className="rounded-pill bg-indigo px-2.5 py-1 font-display text-[10.5px] font-bold tracking-[0.1em] text-white">
              NEW
            </span>
            <span className="text-[12.5px] text-ink-muted">
              แพลตฟอร์มมาตรฐานระดับโลกสำหรับธุรกิจออนไลน์
            </span>
          </div>

          <h1 className="mt-7 max-w-[560px] text-[34px] font-bold leading-[1.3] tracking-[-0.01em] sm:text-[42px] lg:text-[50px]">
            {/* Thai has no spaces, so the browser may break mid-phrase.
                Each line is its own block to keep the phrasing intact. */}
            <span className="block">
              เพิ่มพลังให้ธุรกิจของคุณ
            </span>
            <span className="block text-indigo sm:whitespace-nowrap">
              โตเร็ว คุมได้ ครบในที่เดียว
            </span>
          </h1>

          <p className="mt-5 max-w-[520px] text-[16px] text-ink-muted">
            พลิกโฉมธุรกิจการเดิมพันของคุณให้เหนือชั้น
            และเติบโตได้อย่างไร้ขีดจำกัด ด้วยระบบอัตโนมัติ ที่ผสานความรวดเร็ว,
            ความปลอดภัยและความสมบูรณ์แบบตามมาตรฐานสากล จาก Auto Fast
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-5">
            <a
              href="#contact"
              className="inline-block rounded-xl bg-cta px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_0_24px_rgba(255,114,33,0.5),0_14px_34px_-10px_rgba(255,114,33,0.95)] transition-all hover:scale-[1.03] hover:shadow-[0_0_34px_rgba(255,114,33,0.75),0_18px_42px_-10px_rgba(255,114,33,1)]"
            >
              ติดต่อฝ่ายขาย
            </a>

            <AvatarStack />
          </div>

          <dl className="mt-12 flex gap-9 border-t border-line pt-7">
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

        {/* ---------- live panel ---------- */}
        <div className="frost rounded-card p-5 sm:p-6">
          <h2 className="font-display text-[11.5px] font-semibold uppercase tracking-[0.14em] text-ink-faint">
            ภาพรวมแบบเรียลไทม์
          </h2>

          <div className="mt-5 flex h-24 items-end gap-2" aria-hidden>
            {BARS.map((h, i) => (
              <i
                key={i}
                style={{ height: `${h}%` }}
                className="flex-1 rounded-t-md bg-gradient-to-b from-violet to-orange/25"
              />
            ))}
          </div>

          <dl className="mt-4">
            {ROWS.map((r) => (
              <div
                key={r.label}
                className="flex items-center justify-between border-b border-line-soft py-3.5 text-[14px] last:border-0"
              >
                <dt className="text-ink-muted">{r.label}</dt>
                <dd className="font-display font-semibold">
                  {r.value}
                  {r.delta && (
                    <span className="ml-2 text-[12.5px] text-mint">
                      {r.delta}
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
