import Image from "next/image";

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
      {/* The violet band is its own clipped layer so the phone artwork can
          break out past the rounded edges. */}
      <div className="relative mx-auto max-w-[1180px] text-white">
        <div
          aria-hidden
          className="absolute inset-0 overflow-hidden rounded-[28px] bg-gradient-to-br from-violet-deep via-violet to-[#8b3ec9]"
        >
          {/* orange bloom */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-orange/40 blur-3xl" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
        </div>

        {/* Copy and the four steps run down the left; the product shot stands
            in the right column. */}
        <div className="relative z-10 grid gap-12 px-7 py-16 lg:grid-cols-[1fr_420px] lg:items-center lg:gap-14 lg:px-14 lg:py-20">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-pill bg-white/15 px-3.5 py-2 font-display text-[14px] font-semibold uppercase tracking-[0.14em] backdrop-blur-sm">
              <i className="h-2.5 w-2.5 rounded-full bg-orange-soft" aria-hidden />
              ONE 2 Coin
            </span>
            <h2 className="mt-5 text-[28px] font-bold leading-[1.32] sm:text-[36px]">
              ONE2COIN{" "}
              <span className="text-orange-soft">ระบบฝาก–ถอนคล่องตัว</span>
              <br />
              ไม่ต้องผูกกับบัญชีธนาคาร
            </h2>
            <p className="mx-auto mt-4 max-w-[560px] text-[15.5px] leading-[1.85] text-white/75 lg:mx-0">
              การจัดการฝาก-ถอนไม่ควรเป็นเรื่องซับซ้อน ONE2Coin
              ทำให้ทุกธุรกรรมจบได้ในระบบเดียว ไม่ต้องมีบัญชีธนาคาร
              และเริ่มใช้งานได้ทันที
            </p>

            {/* Four steps in a vertical rail so they sit beside the artwork. */}
            <ol className="mt-10 grid gap-6 sm:grid-cols-2">
              {STEPS.map((s, i) => (
                <li
                  key={s.title}
                  className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-4"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white font-display text-[14px] font-bold text-violet-deep shadow-[0_10px_24px_-8px_rgba(0,0,0,0.5)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[16px] font-semibold">{s.title}</h3>
                    <p className="mt-1.5 text-[14px] leading-[1.8] text-white/70">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Real ONE2Coin wallet screen — the asset already carries its own
              phone frame, so it only needs a soft cast shadow. */}
          <div className="mx-auto w-full max-w-[360px] lg:relative lg:mx-0 lg:h-full lg:max-w-none">
            <Image
              src="/one2coin.png"
              alt="หน้าจอระบบ ONE2Coin"
              width={1282}
              height={1793}
              className="h-auto w-full drop-shadow-[0_24px_48px_rgba(0,0,0,0.32)] lg:absolute lg:left-0 lg:top-1/2 lg:w-[145%] lg:max-w-none lg:-translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
