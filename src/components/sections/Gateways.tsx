import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

/* Provider logos, 100x40 transparent PNGs in /public/providers. */
type Provider = { name: string; logo: string };

const ROW_A: Provider[] = [
  { name: "PromptPay", logo: "/providers/promptpay.png" },
  { name: "TrueMoney Wallet", logo: "/providers/truemoney.png" },
  { name: "SCB Easy", logo: "/providers/scbeasy.png" },
  { name: "KBank", logo: "/providers/kbank.png" },
  { name: "Krungsri", logo: "/providers/krungsri.png" },
  { name: "Bangkok Bank", logo: "/providers/bangkokbank.png" },
  { name: "GSB", logo: "/providers/gsb.png" },
  { name: "ttb", logo: "/providers/ttb.png" },
  { name: "Krungthai", logo: "/providers/krungthai.png" },
  { name: "ShopeePay", logo: "/providers/shopeepay.png" },
];

const ROW_B: Provider[] = [
  { name: "USDT · TRC20", logo: "/providers/usdt.png" },
  { name: "Bitcoin", logo: "/providers/bitcoin.png" },
  { name: "Ethereum", logo: "/providers/ethereum.png" },
  { name: "Skrill", logo: "/providers/skrill.png" },
  { name: "Neteller", logo: "/providers/neteller.png" },
  { name: "Perfect Money", logo: "/providers/perfectmoney.png" },
  { name: "AstroPay", logo: "/providers/astropay.png" },
  { name: "Help2Pay", logo: "/providers/help2pay.png" },
  { name: "Rapid Transfer", logo: "/providers/rapidtransfer.png" },
  { name: "Binance Pay", logo: "/providers/binancepay.png" },
];

const POINTS = [
  {
    term: "หลายช่องทางเปิดพร้อมกัน",
    body: "ธนาคารอัตโนมัติ เกตเวย์หลายเจ้า ONE2Coin และคริปโต ทำงานขนานกันได้ทั้งหมด ไม่ต้องเลือกอย่างใดอย่างหนึ่ง",
  },
  {
    term: "สลับให้เองเมื่อช่องทางมีปัญหา",
    body: "ระบบเฝ้าดูสถานะและเวลาตอบสนองตลอดเวลา ช่องทางไหนช้าหรือปิด รายการจะถูกส่งไปช่องทางถัดไปทันทีโดยลูกค้าไม่ต้องทำอะไร",
  },
];

export default function Gateways() {
  return (
    <section className="relative overflow-hidden px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading
          align="stacked"
          eyebrow="ตัวเลือกไม่จำกัด เชื่อถือได้ 100%"
          title={
            <>
              <span className="block">ฝาก-ถอนไม่มีสะดุด</span>
              <span className="block">เพราะไม่ได้พึ่งช่องทางเดียว</span>
            </>
          }
          description="เปิดใช้หลายช่องทางพร้อมกันได้ทั้งธนาคารอัตโนมัติ payment gateway หลายเจ้า ONE2Coin และคริปโต ถ้าช่องทางไหนช้าหรือปิดปรับปรุง ระบบย้ายรายการไปช่องทางถัดไปให้เอง ลูกค้าฝากถอนได้ต่อเนื่องโดยไม่รู้สึกว่ามีอะไรเกิดขึ้น"
        />

        {/* Supporting points */}
        <dl className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {POINTS.map((pt) => (
            <div key={pt.term}>
              <dt className="flex items-center gap-3 text-[19px] font-semibold sm:text-[21px]">
                <i className="h-3 w-3 shrink-0 bg-orange" aria-hidden />
                {pt.term}
              </dt>
              <dd className="mt-2 pl-6 text-[15px] leading-[1.8] text-ink-muted">
                {pt.body}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Full-bleed dual marquee — replaces the static logo grid. */}
      <div className="mt-12 space-y-3">
        <Row items={ROW_A} />
        <Row items={ROW_B} reverse />
      </div>
    </section>
  );
}

function Row({
  items,
  reverse = false,
}: {
  items: Provider[];
  reverse?: boolean;
}) {
  return (
    <div className="marquee">
      <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
        {/* rendered twice so the -50% translation loops seamlessly */}
        {[...items, ...items].map((p, i) => (
          <span
            key={`${p.name}-${i}`}
            className="grid h-14 w-[150px] shrink-0 place-items-center rounded-xl border border-line bg-surface px-4 shadow-[0_1px_2px_rgba(23,16,46,0.03)]"
          >
            <Image
              src={p.logo}
              alt={p.name}
              width={100}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
