/**
 * Full-bleed sales call-to-action band used as a break between content
 * sections. Colours are sampled from the supplied artwork: the gradient runs
 * violet through pink into orange, and the button matches the site CTA colour.
 */
const BAND =
  "linear-gradient(96deg, #703BF7 2%, #7B3BF1 20%, #B26BEE 34%, #E7B9EE 48%, #FECBDF 61%, #FFA5B4 75%, #FEA89D 89%, #FE7B55 100%)";

export default function SalesBreak() {
  return (
    <section
      className="relative my-12 overflow-hidden lg:my-16"
      style={{ background: BAND }}
    >
      {/* diagonal sheen, strongest on the warm end */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, rgba(255,255,255,0.14) 0 2px, transparent 2px 22px)",
          maskImage: "linear-gradient(90deg, transparent 45%, #000 100%)",
        }}
      />

      {/* content still tracks the same 1180px column as the rest of the page */}
      <div className="relative z-10 mx-auto flex max-w-[1180px] flex-col items-center gap-8 px-6 py-12 text-center lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-10 lg:py-14 lg:text-left">
        <div>
          {/* Same badge treatment as the closing CTA so the two read as one
              family. */}
          <span className="inline-flex items-center gap-2 rounded-pill bg-white/20 px-3.5 py-2 font-display text-[14px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
            <i
              className="h-2.5 w-2.5 animate-pulse rounded-full bg-cta"
              aria-hidden
            />
            พร้อมคุยกับคุณตลอด 24 ชม.
          </span>
          <h2 className="mt-5 text-[28px] font-bold leading-[1.35] text-white sm:text-[36px]">
            คุยกับทีมขายของเรา
            <br className="hidden sm:block" /> ตอบไว ให้ข้อมูลครบทุกเรื่อง
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[15.5px] leading-[1.85] text-white/85 lg:mx-0">
            ไม่ว่าจะเริ่มต้นเว็บแรกหรือกำลังขยายเป็นสิบแบรนด์
            ทีมงานพร้อมให้คำแนะนำและช่วยวางระบบให้เหมาะกับธุรกิจของคุณ
          </p>
        </div>

        <a
          href="#contact"
          className="shrink-0 whitespace-nowrap rounded-xl bg-cta px-7 py-4 text-[15px] font-semibold text-white shadow-[0_0_24px_rgba(255,114,33,0.5),0_14px_34px_-10px_rgba(255,114,33,0.95)] transition-all hover:scale-[1.03] hover:shadow-[0_0_34px_rgba(255,114,33,0.75),0_18px_42px_-10px_rgba(255,114,33,1)] lg:self-auto"
        >
          ติดต่อ Auto Fast
        </a>
      </div>
    </section>
  );
}
