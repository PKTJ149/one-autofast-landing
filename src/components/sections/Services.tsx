import SectionHeading from "@/components/SectionHeading";

const SPECS: [string, string][] = [
  [
    "ระบบจัดการเว็บไซต์",
    "ควบคุมทุกเว็บไซต์และทุกแบรนด์จากหน้าจอเดียว ตั้งค่าแยกรายเว็บได้อิสระ",
  ],
  [
    "ระบบจัดการการเงิน",
    "ติดตามรายรับรายจ่าย ออกรายงานเรียลไทม์ พร้อมมาตรฐานความปลอดภัยระดับสูง",
  ],
  [
    "ระบบจัดการฟีเจอร์",
    "เปิด-ปิดฟีเจอร์แต่ละตัวได้ตามต้องการ ปรับให้เหมาะกับกลุ่มลูกค้าของแต่ละแบรนด์",
  ],
  [
    "ระบบซัพพอร์ต 24/7",
    "ทีมงานพร้อมให้ข้อมูลและช่วยแก้ปัญหาตลอดเวลา ไม่มีวันหยุด",
  ],
  [
    "สัญญาเช่าระบบฝาก–ถอนอัตโนมัติ",
    "กำหนดเงื่อนไขการฝากและถอนได้เองตามรูปแบบธุรกิจ ตั้งค่าผ่าน Auto Fast Track ได้ทันที",
  ],
];

export default function Services() {
  return (
    <section className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading
          eyebrow="เสถียร เร็ว พร้อมขับเคลื่อน"
          title="บริการทั้งหมดของ Auto Fast Track"
          description="ระบบที่พร้อมรองรับการเติบโตของธุรกิจคุณตั้งแต่วันแรก ไม่ต้องรอพัฒนาเพิ่ม"
        />

        {/* Spec sheet — plain numbered rows on hairlines, no cards at all.
            A deliberate quiet beat between the heavier sections. */}
        <dl className="mt-4">
          {SPECS.map(([term, desc], i) => (
            <div
              key={term}
              className="group grid gap-2 border-b border-line py-7 transition-colors hover:bg-tint/50 sm:grid-cols-[64px_minmax(0,300px)_1fr] sm:items-baseline sm:gap-6"
            >
              <span className="font-display text-[13px] font-bold tracking-[0.1em] text-orange">
                {String(i + 1).padStart(2, "0")}
              </span>
              <dt className="text-[17px] font-semibold sm:text-[18px]">
                {term}
              </dt>
              <dd className="text-[15px] leading-[1.8] text-ink-muted">
                {desc}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
