"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

type Theme = {
  key: string;
  name: string;
  desc: string;
  bg: string;
  panel: string;
  text: string;
  sub: string;
  accent: string;
  accent2: string;
};

const THEMES: Theme[] = [
  {
    key: "midnight",
    name: "Midnight",
    desc: "เข้ม สุขุม ดูพรีเมียม",
    bg: "#0d0b1a",
    panel: "#171332",
    text: "#ffffff",
    sub: "#9a93c4",
    accent: "#7c3aed",
    accent2: "#22d3ee",
  },
  {
    key: "sunset",
    name: "Sunset",
    desc: "อบอุ่น เร้าใจ กระตุ้นการกด",
    bg: "#1a0f0a",
    panel: "#2a1710",
    text: "#fff6f0",
    sub: "#d3a58c",
    accent: "#ff6b2c",
    accent2: "#ffc46b",
  },
  {
    key: "luxe",
    name: "Luxe Gold",
    desc: "หรูหรา ระดับ VIP",
    bg: "#100f0c",
    panel: "#1c1a13",
    text: "#fdf6e3",
    sub: "#b9ad86",
    accent: "#d4af37",
    accent2: "#8a6f1f",
  },
  {
    key: "ocean",
    name: "Ocean",
    desc: "สะอาดตา ดูน่าเชื่อถือ",
    bg: "#04121c",
    panel: "#0b2233",
    text: "#eaf7ff",
    sub: "#8fb6cc",
    accent: "#0ea5e9",
    accent2: "#34d399",
  },
  {
    key: "daylight",
    name: "Daylight",
    desc: "โทนสว่าง อ่านง่ายทุกวัย",
    bg: "#f4f2fb",
    panel: "#ffffff",
    text: "#17102e",
    sub: "#6b6386",
    accent: "#7c3aed",
    accent2: "#ff6b2c",
  },
];

export default function Themes() {
  const [active, setActive] = useState(0);
  const t = THEMES[active];

  return (
    <section id="themes" className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading
          eyebrow="ปรับแต่งเว็บให้ดึงดูดลูกค้า"
          title="โดดเด่นด้วยธีมที่ออกแบบมาอย่างดี"
          description="เลือกดีไซน์ที่เข้ากับแบรนด์ของคุณ ไม่ว่าจะเรียบหรู ทันสมัย หรือสดใส ยกระดับภาพลักษณ์ แตกต่างจากคู่แข่ง และสร้างความเชื่อมั่นให้ลูกค้า"
        />

        {/* Live theme switcher — replaces the static gallery of screenshots. */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[260px_1fr]">
          <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {THEMES.map((th, i) => {
              const on = i === active;
              return (
                <button
                  key={th.key}
                  onClick={() => setActive(i)}
                  aria-pressed={on}
                  className={`flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors ${
                    on
                      ? "border-violet-soft bg-violet-tint"
                      : "border-line bg-surface hover:border-violet-soft/60"
                  }`}
                >
                  <span
                    aria-hidden
                    className="h-8 w-8 shrink-0 rounded-lg border border-black/10"
                    style={{
                      background: `linear-gradient(135deg, ${th.accent}, ${th.accent2})`,
                    }}
                  />
                  <span>
                    <span
                      className={`block font-display text-[14px] font-semibold ${
                        on ? "text-violet-deep" : "text-ink"
                      }`}
                    >
                      {th.name}
                    </span>
                    <span className="block whitespace-nowrap text-[12px] text-ink-faint lg:whitespace-normal">
                      {th.desc}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* preview */}
          <div className="card overflow-hidden rounded-card">
            <div className="flex items-center gap-2 border-b border-line bg-canvas px-4 py-2.5">
              <i className="h-2.5 w-2.5 rounded-full bg-orange/60" aria-hidden />
              <i className="h-2.5 w-2.5 rounded-full bg-violet/40" aria-hidden />
              <span className="ml-2 font-display text-[11.5px] tracking-[0.08em] text-ink-faint">
                preview · {t.name.toLowerCase()}
              </span>
            </div>

            <div
              className="p-6 transition-colors duration-500 sm:p-8"
              style={{ background: t.bg, color: t.text }}
            >
              {/* fake site header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="h-6 w-6 rounded-md"
                    style={{
                      background: `linear-gradient(135deg, ${t.accent}, ${t.accent2})`,
                    }}
                  />
                  <span className="text-[13px] font-semibold">YOUR BRAND</span>
                </div>
                <span
                  className="rounded-lg px-3.5 py-1.5 text-[12px] font-semibold text-white"
                  style={{ background: t.accent }}
                >
                  สมัครสมาชิก
                </span>
              </div>

              {/* fake hero */}
              <div className="mt-7 grid gap-5 sm:grid-cols-[1.2fr_1fr] sm:items-center">
                <div>
                  <p
                    className="text-[11px] tracking-[0.14em]"
                    style={{ color: t.sub }}
                  >
                    WELCOME BONUS
                  </p>
                  <p className="mt-2 text-[24px] font-bold leading-snug sm:text-[28px]">
                    รับโบนัสแรกเข้า
                    <span style={{ color: t.accent2 }}> 100%</span>
                  </p>
                  <p className="mt-2 text-[13px]" style={{ color: t.sub }}>
                    ฝากขั้นต่ำ 100 บาท ถอนได้ไม่จำกัดต่อวัน
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(6)].map((_, i) => (
                    <span
                      key={i}
                      className="h-14 rounded-xl"
                      style={{
                        background: t.panel,
                        borderTop: `2px solid ${i % 2 ? t.accent2 : t.accent}`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* fake stat row */}
              <div className="mt-6 grid grid-cols-3 gap-2">
                {[
                  ["ยอดฝากวันนี้", "฿2.1M"],
                  ["ผู้เล่นออนไลน์", "1,284"],
                  ["เกมทั้งหมด", "900+"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-xl px-3 py-2.5"
                    style={{ background: t.panel }}
                  >
                    <p className="text-[10.5px]" style={{ color: t.sub }}>
                      {label}
                    </p>
                    <p className="mt-0.5 font-display text-[15px] font-bold">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
