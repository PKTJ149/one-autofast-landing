export default function ContactCta() {
  return (
    <section id="contact" className="px-6 pb-24 lg:px-10 lg:pb-32">
      <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[28px] bg-ink px-8 py-14 text-white lg:px-14 lg:py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-violet/60 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-28 -right-16 h-72 w-72 rounded-full bg-orange/50 blur-3xl"
        />

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-pill bg-white/10 px-3 py-1.5 font-display text-[11.5px] font-semibold uppercase tracking-[0.14em]">
              <i className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-soft" aria-hidden />
              พร้อมคุยกับคุณตลอด 24 ชม.
            </span>
            <h2 className="mt-5 text-[26px] font-bold leading-[1.35] sm:text-[34px]">
              คุยกับทีมขายของเรา
              <br className="hidden sm:block" /> ตอบไว ให้ข้อมูลครบทุกเรื่อง
            </h2>
            <p className="mt-4 max-w-[520px] text-[15.5px] leading-[1.85] text-white/70">
              ไม่ว่าจะเริ่มต้นเว็บแรกหรือกำลังขยายเป็นสิบแบรนด์
              ทีมงานพร้อมให้คำแนะนำและช่วยวางระบบให้เหมาะกับธุรกิจของคุณ
            </p>
          </div>

          <div className="lg:w-[240px]">
            <a
              href="#contact"
              className="block rounded-xl bg-gradient-to-r from-violet to-orange px-6 py-4 text-center text-[15px] font-semibold shadow-[0_18px_40px_-14px_rgba(255,107,44,0.8)] transition-transform hover:scale-[1.03]"
            >
              ติดต่อฝ่ายขาย
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
