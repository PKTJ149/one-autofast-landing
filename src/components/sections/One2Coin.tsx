const STEPS = [
  {
    title: "ข้ามธนาคาร ประหยัดเวลา",
    body: "โอน ฝาก ถอน ได้ทันที ไม่ต้องรอธนาคารภายนอก ระบบเดินหน้าต่อได้ไม่มีสะดุด",
  },
  {
    title: "ระบบ Wallet ในตัว",
    body: "ONE2Coin ทำหน้าที่เป็นสกุลเงินภายในแพลตฟอร์มของคุณ ฝาก ถอน โอน แลกเปลี่ยน ได้อย่างยืดหยุ่น",
  },
  {
    title: "ค่าธรรมเนียมต่ำ",
    body: "ประหยัดต้นทุนต่อธุรกรรม เพราะไม่ต้องพึ่ง payment gateway แบบเดิมอีกต่อไป",
  },
  {
    title: "ปลอดภัยโดยไม่ต้องผูกธนาคาร",
    body: "หมดเรื่องยุ่งยากกับบัญชีธนาคาร ทำธุรกรรมได้อย่างปลอดภัย ความเสี่ยงต่ำ ยืดหยุ่นสูง",
  },
];

export default function One2Coin() {
  return (
    <section id="products" className="px-6 pb-8 lg:px-10">
      {/* A deep violet band breaks the white rhythm without going full dark. */}
      <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[28px] bg-gradient-to-br from-violet-deep via-violet to-[#8b3ec9] px-7 py-16 text-white lg:px-14 lg:py-20">
        {/* orange bloom */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-orange/40 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <div className="relative z-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-pill bg-white/15 px-3 py-1.5 font-display text-[11.5px] font-semibold uppercase tracking-[0.14em] backdrop-blur-sm">
                <i className="h-1.5 w-1.5 rounded-full bg-orange-soft" aria-hidden />
                ONE 2 Coin
              </span>
              <h2 className="mt-5 text-[28px] font-bold leading-[1.32] sm:text-[36px]">
                ฝาก–ถอนได้ครบ
                <br />
                โดยไม่ต้องใช้บัญชีธนาคาร
              </h2>
            </div>
            <p className="text-[15.5px] leading-[1.85] text-white/75">
              การจัดการฝาก-ถอนไม่ควรเป็นเรื่องซับซ้อน ONE2Coin
              ทำให้ทุกธุรกรรมจบได้ในระบบเดียว ไม่ต้องมีบัญชีธนาคาร
              และเริ่มใช้งานได้ทันที
            </p>
          </div>

          {/* Connected 4-step flow — replaces the four stacked cards. */}
          <ol className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {/* the rail the steps sit on */}
            <span
              aria-hidden
              className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-white/10 via-white/40 to-white/10 lg:block"
            />
            {STEPS.map((s, i) => (
              <li key={s.title} className="relative lg:pr-6">
                <span className="relative z-10 grid h-10 w-10 place-items-center rounded-xl bg-white font-display text-[14px] font-bold text-violet-deep shadow-[0_10px_24px_-8px_rgba(0,0,0,0.5)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-[17px] font-semibold">{s.title}</h3>
                <p className="mt-2 text-[14.5px] leading-[1.8] text-white/70">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
