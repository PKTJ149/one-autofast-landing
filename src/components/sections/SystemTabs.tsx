"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

type Tab = {
  key: string;
  label: string;
  title: string;
  body: string;
  metrics: { label: string; value: string }[];
};

const TABS: Tab[] = [
  {
    key: "backend",
    label: "จัดการหลังบ้าน",
    title: "จัดการหลังบ้านครบในที่เดียว",
    body: "เลิกจัดการหลายระบบ หลายทีม และหลายฐานข้อมูล รวมทุกเว็บไซต์ ทุกแบรนด์ และทุกโปรเจกต์ไว้ในแพลตฟอร์มเดียว",
    metrics: [
      { label: "เว็บไซต์ที่เชื่อมต่อ", value: "18" },
      { label: "แบรนด์", value: "5" },
      { label: "อัปไทม์", value: "99.9%" },
    ],
  },
  {
    key: "finance",
    label: "ระบบการเงิน",
    title: "ระบบจัดการการเงินแบบเรียลไทม์",
    body: "ติดตามรายรับ รายจ่าย และออกรายงานได้ทันที ด้วยฟังก์ชันครบครันและมาตรฐานความปลอดภัยระดับสูงสุด",
    metrics: [
      { label: "ยอดฝากวันนี้", value: "฿2.10M" },
      { label: "ยอดถอนวันนี้", value: "฿1.44M" },
      { label: "กำไรสุทธิ", value: "+18%" },
    ],
  },
  {
    key: "affiliate",
    label: "ระบบพันธมิตร",
    title: "ระบบแนะนำเพื่อนที่ใช้งานง่าย",
    body: "เพิ่มรายได้ด้วยระบบพันธมิตร รับค่าคอมมิชชั่นจากทุกการแนะนำ ทั้งยอดเทิร์นโอเวอร์และสมาชิกใหม่",
    metrics: [
      { label: "พันธมิตรทั้งหมด", value: "1,204" },
      { label: "สมาชิกใหม่", value: "312" },
      { label: "คอมมิชชั่นจ่ายแล้ว", value: "฿486K" },
    ],
  },
  {
    key: "promo",
    label: "จัดการโปรโมชั่น",
    title: "สร้างและปรับแต่งโปรโมชั่นได้เอง",
    body: "จัดการแคมเปญได้อย่างอิสระ ปรับตั้งค่าได้หลากหลาย ตอบโจทย์ทุกความต้องการทางการตลาดตามเทรนด์ปัจจุบัน",
    metrics: [
      { label: "แคมเปญที่ใช้งาน", value: "27" },
      { label: "อัตราเข้าร่วม", value: "64%" },
      { label: "รูปแบบโปรโมชั่น", value: "40+" },
    ],
  },
  {
    key: "staff",
    label: "จัดการพนักงาน",
    title: "บริหารทีมอย่างมืออาชีพ",
    body: "ระบบจัดการพนักงานครบวงจร ติดตามผลงานรายบุคคล กำหนดสิทธิ์การเข้าถึง และเพิ่มประสิทธิภาพการทำงานได้ง่าย",
    metrics: [
      { label: "พนักงานในระบบ", value: "36" },
      { label: "ระดับสิทธิ์", value: "8" },
      { label: "งานที่ปิดวันนี้", value: "241" },
    ],
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
            className="card rounded-card p-7 lg:p-10"
            key={tab.key}
          >
            <h3 className="text-[21px] font-semibold sm:text-[24px]">
              {tab.title}
            </h3>
            <p className="mt-3 max-w-[620px] text-[15.5px] text-ink-muted">
              {tab.body}
            </p>

            <dl className="mt-8 grid gap-3 sm:grid-cols-3">
              {tab.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl bg-tint px-5 py-4"
                >
                  <dt className="text-[12.5px] text-ink-muted">{m.label}</dt>
                  <dd className="mt-1 font-display text-[24px] font-bold text-violet-deep">
                    {m.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* generic panel chrome so each tab reads as a real screen */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-line">
              <div className="flex items-center gap-2 border-b border-line bg-canvas px-4 py-2.5">
                <i className="h-2.5 w-2.5 rounded-full bg-orange/60" aria-hidden />
                <i className="h-2.5 w-2.5 rounded-full bg-violet/40" aria-hidden />
                <span className="ml-2 font-display text-[11.5px] tracking-[0.08em] text-ink-faint">
                  {tab.key}.autofasttrack.io
                </span>
              </div>
              <div className="flex h-32 items-end gap-2 px-5 py-4" aria-hidden>
                {[38, 62, 45, 80, 55, 71, 92, 60, 74].map((h, i) => (
                  <i
                    key={i}
                    style={{ height: `${h}%` }}
                    className="flex-1 rounded-t-md bg-gradient-to-b from-violet to-orange/20"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
