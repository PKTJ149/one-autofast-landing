"use client";

import Image from "next/image";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

type Tab = {
  key: string;
  label: string;
  title: string;
  body: string;
  /** Screenshot of this screen, 932x555. Drop the file in /public/systems
   *  and set the path here; until then the panel shows a sized placeholder. */
  image?: string;
};

const TABS: Tab[] = [
  {
    key: "backend",
    image: "/systems/backend.png",
    label: "จัดการหลังบ้าน",
    title: "ระบบบริหารหลังบ้านทุกเว็บด้วยเว็บเดียว (All in one backend management)",
    body: "หมดปัญหากับการดูแลหลายระบบ หลายหลังบ้าน หลายฐานข้อมูล ที่ต้องแยกทีม แยกบัญชี ด้วยระบบของเรา ทำให้ทุกเว็บไซต์ ทุกแบรนด์ หรือทุกโปรเจกต์ จะถูกรวบรวมไว้ในที่เดียว",
  },
  {
    key: "finance",
    image: "/systems/finance.png",
    label: "ระบบการเงิน",
    title: "ระบบการจัดการการเงิน (Financial Management)",
    body: "จัดการการเงินของคุณได้อย่างง่ายดาย ครบทุกฟังก์ชัน ทั้งรายรับ รายจ่าย รายงานผลแบบเรียลไทม์ พร้อมความปลอดภัยสูงสุด!",
  },
  {
    key: "affiliate",
    image: "/systems/affiliate.png",
    label: "ระบบแนะนำเพื่อน",
    title: "ระบบแนะนำเพื่อน (Affiliate Program)",
    body: "เพิ่มความสนุกพร้อมรายได้ ด้วยระบบแนะนำเพื่อน รับค่าคอมมิชชันได้ง่าย ๆ ในทุกการเชิญชวน ทั้งยอดเทิร์นโอเวอร์ และการแนะนำเพื่อนเองก็ได้ด้วย",
  },
  {
    key: "promo",
    image: "/systems/promo.png",
    label: "จัดการโปรโมชั่น",
    title: "ระบบจัดการโปรโมชั่น (Promotions Management)",
    body: "สร้างและปรับแต่งโปรโมชั่นได้ง่าย ๆ ทุกแคมเปญ จัดการได้ครบถ้วนและตอบโจทย์ทุกการตลาด ตั้งค่าได้หลากหลาย ตอบรับทุกรูปแบบการตลาด ไม่ตกแม้กระแสเทรนด์ต่าง ๆ ที่มาแรง",
  },
  {
    key: "staff",
    image: "/systems/staff.png",
    label: "จัดการพนักงาน",
    title: "ระบบจัดการพนักงาน (Employee Management)",
    body: "บริหารทีมงานได้อย่างมืออาชีพด้วยระบบจัดการพนักงานที่ครบวงจร พร้อมทั้งติดตามประสิทธิภาพการทำงานได้ง่ายดาย!",
  },
];

export default function SystemTabs() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section id="features" className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading
          eyebrow="เชื่อถือได้ พร้อมใช้ ขยายได้"
          title="ระบบครบวงจร เสถียร พร้อมใช้งานทันที"
          description="ระบบคุณภาพสูงที่ออกแบบมาเพื่อประสิทธิภาพสูงสุด และพร้อมขยายไปพร้อมกับธุรกิจของคุณ"
        />

        {/* Tabbed switcher replaces the original stack of five cards. */}
        <div className="mt-10 grid gap-4 lg:grid-cols-[300px_1fr]">
          {/* tab rail */}
          <div
            role="tablist"
            aria-label="ระบบทั้งหมด"
            className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
          >
            {TABS.map((t, i) => {
              const on = i === active;
              return (
                <button
                  key={t.key}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActive(i)}
                  className={`flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3.5 text-left text-[15px] transition-colors lg:shrink ${
                    on
                      ? "border-violet-soft bg-violet-tint font-semibold text-violet-deep"
                      : "border-line bg-surface text-ink-muted hover:border-violet-soft/60"
                  }`}
                >
                  <span
                    className={`font-display text-[12px] font-bold ${
                      on ? "text-orange" : "text-ink-faint"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="whitespace-nowrap lg:whitespace-normal">
                    {t.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* panel */}
          <div
            role="tabpanel"
            className="card rounded-card p-7 text-center lg:p-10 lg:text-left"
            key={tab.key}
          >
            <h3 className="text-[21px] font-semibold sm:text-[24px]">
              {tab.title}
            </h3>
            <p className="mx-auto mt-3 max-w-[620px] text-[15.5px] text-ink-muted lg:mx-0">
              {tab.body}
            </p>

            {/* Screenshot slot — 932x554 */}
            {tab.image ? (
              <Image
                src={tab.image}
                alt={tab.title}
                width={932}
                height={555}
                className="mt-6 h-auto w-full rounded-2xl border border-line"
              />
            ) : (
              <div className="mt-6 grid aspect-[932/555] w-full place-items-center rounded-2xl border-2 border-dashed border-line bg-tint text-center">
                <div>
                  <p className="font-display text-[13px] font-semibold uppercase tracking-[0.14em] text-ink-faint">
                    ภาพหน้าจอระบบ
                  </p>
                  <p className="mt-1.5 font-display text-[15px] font-bold text-violet-deep">
                    932 × 555 px
                  </p>
                  <p className="mt-1 text-[12.5px] text-ink-faint">
                    /systems/{tab.key}.png
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
