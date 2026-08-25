import SectionHeading from "@/components/SectionHeading";

/* Placeholder names — swap for real partner logos before launch. */
const ROW_A = [
  "PromptPay",
  "TrueMoney Wallet",
  "SCB Easy",
  "KBank",
  "Krungsri",
  "Bangkok Bank",
  "GSB",
  "ttb",
  "Krungthai",
  "ShopeePay",
];

const ROW_B = [
  "USDT · TRC20",
  "Bitcoin",
  "Ethereum",
  "Skrill",
  "Neteller",
  "Perfect Money",
  "AstroPay",
  "Help2Pay",
  "Rapid Transfer",
  "Binance Pay",
];

export default function Gateways() {
  return (
    <section className="relative overflow-hidden px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading
          eyebrow="ตัวเลือกไม่จำกัด เชื่อถือได้ 100%"
          title="รวม Payment Gateway ที่ครบที่สุด กว้าง เร็ว ครอบคลุมทั่วโลก"
          description="ไปไกลกว่าธนาคารแบบเดิม เราเชื่อมต่อช่องทางชำระเงินได้หลากหลายที่สุด ครอบคลุมทุกช่องทางที่ลูกค้าของคุณใช้จริง ทั้งในประเทศและต่างประเทศ"
        />
      </div>

      {/* Full-bleed dual marquee — replaces the static logo grid. */}
      <div className="mt-12 space-y-3">
        <Row items={ROW_A} />
        <Row items={ROW_B} reverse />
      </div>

      <p className="mx-auto mt-10 max-w-[1180px] text-center text-[13px] text-ink-faint">
        เลื่อนเมาส์ไปวางเพื่อหยุดดูรายชื่อ · รองรับเพิ่มช่องทางใหม่ได้ตลอดเวลา
      </p>
    </section>
  );
}

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="marquee">
      <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
        {/* rendered twice so the -50% translation loops seamlessly */}
        {[...items, ...items].map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="flex shrink-0 items-center gap-2.5 rounded-xl border border-line bg-surface px-5 py-3.5 shadow-[0_1px_2px_rgba(23,16,46,0.03)]"
          >
            <i
              aria-hidden
              className="h-2 w-2 rounded-full bg-gradient-to-br from-violet to-orange"
            />
            <span className="whitespace-nowrap font-display text-[14px] font-medium text-ink">
              {name}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
