import SectionHeading from "@/components/SectionHeading";

const TOOLS = [
  "ระบบสมาชิก",
  "ฝาก–ถอนอัตโนมัติ",
  "รายงานการเงิน",
  "จัดการโปรโมชั่น",
  "ระบบพันธมิตร",
  "จัดการพนักงาน",
  "แจ้งเตือนอัตโนมัติ",
  "ระบบแต้มสะสม",
  "มินิเกม",
  "วงล้อเสี่ยงโชค",
  "ร้านแลกของรางวัล",
  "จัดการหลายแบรนด์",
  "ตั้งค่าเรตรายค่าย",
  "บันทึกกิจกรรม (Log)",
  "จัดการสิทธิ์เข้าถึง",
  "รายงานเรียลไทม์",
  "ระบบภารกิจ",
  "คูปองส่วนลด",
];

export default function Tools() {
  return (
    <section className="px-6 pb-24 lg:px-10 lg:pb-32">
      <div className="mx-auto max-w-[1180px]">
        <div className="relative overflow-hidden rounded-[28px] border border-line bg-surface p-8 lg:p-14">
          <div className="aurora opacity-70" aria-hidden />

          <div className="relative z-10">
            <SectionHeading
              align="center"
              eyebrow="เครื่องมือครบทุกความต้องการ"
              title="เครื่องมือในตัวที่ครอบคลุมทุกงาน"
              description="ฟีเจอร์ที่ต้องใช้ทั้งหมดรวมอยู่ในที่เดียว ใช้ง่าย สะดวก และออกแบบมาให้ธุรกิจของคุณเติบโตได้อย่างมั่นใจ"
            />

            {/* Inventory of tools as a dense tag field — reads as "there is a
                lot here" faster than a grid of equal cards. */}
            <ul className="mt-10 flex flex-wrap justify-center gap-2.5">
              {TOOLS.map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-2 rounded-pill border border-line bg-canvas px-4 py-2.5 text-[14px] transition-colors hover:border-violet-soft hover:bg-violet-tint"
                >
                  <span
                    aria-hidden
                    className="font-display text-[13px] font-bold text-orange"
                  >
                    +
                  </span>
                  {t}
                </li>
              ))}
            </ul>

            <p className="mx-auto mt-10 max-w-[640px] text-center text-[15px] text-ink-muted">
              เครื่องมือโปรโมชั่นที่ทำได้มากกว่าการเพิ่มยอดขาย
              เพราะมันสร้างประสบการณ์ที่สนุกและน่าจดจำให้ลูกค้าของคุณด้วย
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
