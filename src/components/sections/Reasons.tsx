import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import ShineBorder from "@/components/ui/shine-border";

/* Real member photos; the fade from left to right reads as headcount
   dropping away. */
const TEAM = [
  "/avatars/avatar01.png",
  "/avatars/avatar02.png",
  "/avatars/avatar03.png",
  "/avatars/avatar04.png",
  "/avatars/avatar05.png",
  "/avatars/avatar06.png",
];

/* Payment provider logos — horizontal lockups, transparent, 142x50. */
const GATEWAYS = [
  "/gateways/gateway01.png",
  "/gateways/gateway02.png",
  "/gateways/gateway03.png",
  "/gateways/gateway04.png",
  "/gateways/gateway05.png",
  "/gateways/gateway06.png",
  "/gateways/gateway07.png",
];

export default function Reasons() {
  return (
    <section id="about" className="relative px-6 pb-24 pt-16 lg:px-10 lg:pb-32 lg:pt-20">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading
          align="stacked"
          eyebrow="4 เหตุผล"
          title={
            <>
              ทำไม <span className="text-indigo">Auto Fast</span> ถึงตอบโจทย์คุณ
            </>
          }
          description="เปลี่ยนความซับซ้อนของการจัดการเว็บเดิมพัน ให้กลายเป็นระบบที่ง่ายและไร้รอยต่อ ด้วย Automation จาก Auto Fast ที่ออกแบบมาเพื่อความรวดเร็ว ปลอดภัย และพร้อมรองรับทุกการเติบโต"
        />

        {/* Bento: 7/5 then 5/7 — an intentionally uneven rhythm instead of a
            row of four identical cards. */}
        <div className="mt-10 grid gap-4 lg:grid-cols-12">
          {/* 01 — large */}
          <Card className="lg:col-span-7" num="01" title="ลดจำนวนคน แต่ยังคุมได้เหมือนเดิม">
            ไม่ต้องจ้างทีมใหญ่มานั่งตรวจสอบรางวัล คำนวณแต้ม
            หรือดูแลงานหลังบ้าน ระบบจัดการให้ทั้งหมด ทันที และแม่นยำ
            <div className="mt-7 flex flex-col items-center gap-4 rounded-2xl bg-tint p-4 sm:flex-row">
              <div className="flex -space-x-2" aria-hidden>
                {TEAM.map((src, i) => (
                  <Image
                    key={src}
                    src={src}
                    alt=""
                    width={39}
                    height={39}
                    style={{ opacity: 1 - i * 0.15 }}
                    className="h-8 w-8 rounded-full border-2 border-surface object-cover"
                  />
                ))}
              </div>
              <p className="text-[13px] leading-snug text-ink-muted">
                ทีมหลังบ้าน{" "}
                <b className="font-display text-ink line-through decoration-orange decoration-2">
                  12
                </b>{" "}
                คน เหลือเพียง{" "}
                <b className="font-display text-[18px] text-violet-deep">2</b> คน
              </p>
            </div>
          </Card>

          {/* 02 */}
          <Card className="lg:col-span-5" num="02" title="ตัดงานซ้ำซากออกไปให้หมด">
            เลิกทำงานมือทุกวัน ทั้งเช็คโปรโมชั่นและบันทึกข้อมูล
            แดชบอร์ดช่วยให้ทำงานเร็วขึ้น เจอข้อผิดพลาดไว
            และเห็นทุกอย่างจบในหน้าเดียว
          </Card>

          {/* 03 */}
          <Card className="lg:col-span-5" num="03" title="ต้นทุนต่ำลง ควบคุมได้มากขึ้น">
            ลดต้นทุนคงที่ แล้วนำเงินส่วนนั้นไปลงทุนขยายธุรกิจแทน
            บริหารงานได้มีประสิทธิภาพและทำกำไรได้มากขึ้น
          </Card>

          {/* 04 — large */}
          <Card
            className="lg:col-span-7"
            num="04"
            title="เชื่อมต่อ Payment Gateway ระดับมืออาชีพ"
          >
            รองรับผู้ให้บริการชำระเงินหลายราย ทำธุรกรรมแบบเรียลไทม์
            ยืดหยุ่นสำหรับลูกค้าของคุณ ทั้งเร็ว ปลอดภัย และเชื่อถือได้
            <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
              {GATEWAYS.map((src) => (
                <span
                  key={src}
                  className="grid h-11 w-[104px] place-items-center rounded-xl border border-line bg-surface px-2"
                >
                  <Image
                    src={src}
                    alt=""
                    width={142}
                    height={50}
                    aria-hidden
                    className="h-[26px] w-auto object-contain"
                  />
                </span>
              ))}
              <span className="rounded-xl border border-line bg-canvas px-3 py-2.5 font-display text-[12.5px] font-medium text-ink-muted">
                +55
              </span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Card({
  num,
  title,
  children,
  className = "",
}: {
  num: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`card group relative overflow-hidden rounded-card p-7 text-center transition-shadow lg:text-left hover:shadow-[0_1px_2px_rgba(23,16,46,0.04),0_28px_70px_-30px_rgba(91,33,182,0.45)] ${className}`}
    >
      <ShineBorder borderWidth={2} shineColor={["#7c3aed", "#ff7221"]} />

      <div className="relative flex items-baseline gap-3 text-left">
        <span className="font-display text-[13px] font-bold tracking-[0.08em] text-orange">
          {num}
        </span>
        <span className="h-px flex-1 bg-line" aria-hidden />
      </div>
      <h3 className="relative mt-4 text-[19px] font-semibold sm:text-[21px]">{title}</h3>
      <div className="relative mt-3 text-[15px] leading-[1.8] text-ink-muted">
        {children}
      </div>
    </article>
  );
}
