import Image from "next/image";

const COLUMNS: { title: string; links: string[] }[] = [
  {
    title: "แพลตฟอร์ม",
    links: ["จัดการหลังบ้าน", "ระบบการเงิน", "ระบบพันธมิตร", "จัดการโปรโมชั่น"],
  },
  {
    title: "ฟีเจอร์",
    links: ["มินิเกม", "วงล้อเสี่ยงโชค", "ระบบหวย", "ร้านแลกของรางวัล"],
  },
  {
    title: "บริษัท",
    links: ["เกี่ยวกับเรา", "ธีมเว็บไซต์", "แพ็กเกจ", "ติดต่อเรา"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface px-6 py-14 lg:px-10">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/logo.png"
              alt="Auto Fast Track"
              width={211}
              height={47}
              className="h-10 w-auto"
            />
            <p className="mt-4 max-w-[300px] text-[14px] leading-[1.8] text-ink-muted">
              ระบบหลังบ้านครบวงจรสำหรับผู้ให้บริการแพลตฟอร์มออนไลน์
              รวมทุกเว็บไซต์ไว้ในที่เดียว
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-[11.5px] font-semibold uppercase tracking-[0.14em] text-ink-faint">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#top"
                      className="text-[14px] text-ink-muted transition-colors hover:text-violet-deep"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hairline my-10" aria-hidden />

        <div className="flex flex-col gap-3 text-[13px] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Auto Fast Track. สงวนลิขสิทธิ์ทุกประการ</p>
          <p className="font-display tracking-[0.04em]">
            ซัพพอร์ต 24/7 · ทุกวันไม่มีวันหยุด
          </p>
        </div>
      </div>
    </footer>
  );
}
