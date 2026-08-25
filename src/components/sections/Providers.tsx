"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

/**
 * `logo` is an optional path under /public (e.g. "/logos/pg.png").
 * When it is missing the tile falls back to a monogram, so real logo files can
 * be dropped in one at a time without touching the layout.
 */
type Provider = { name: string; logo?: string };
type Group = { key: string; label: string; note: string; items: Provider[] };

const GROUPS: Group[] = [
  {
    key: "sport",
    label: "กีฬา",
    note: "ครบทุกลีกดัง ทั้งฟุตบอล บาสเกตบอล และมวย",
    items: [
      { name: "LSM99 Sport" },
      { name: "Sbobet" },
      { name: "SABA Sport" },
      { name: "3 Sing" },
      { name: "Muay Puk Yok" },
    ],
  },
  {
    key: "casino",
    label: "คาสิโน",
    note: "ถ่ายทอดสดจากสตูดิโอจริง ครบทุกเกมโต๊ะ",
    items: [
      { name: "Evolution" },
      { name: "Sexy Baccarat" },
      { name: "Pretty Gaming" },
      { name: "SA Baccarat" },
      { name: "DG Gaming" },
      { name: "WM Casino" },
      { name: "ALLBET" },
      { name: "Playtech Casino" },
      { name: "XG Casino" },
      { name: "World Entertainment" },
      { name: "Pragmatic Play" },
      { name: "Skywind" },
      { name: "Big Gaming" },
      { name: "W Casino" },
      { name: "YeeBet" },
    ],
  },
  {
    key: "slot",
    label: "เกม & สล็อต",
    note: "ค่ายสล็อตยอดนิยม อัปเดตเกมใหม่ต่อเนื่อง",
    items: [
      { name: "PG" },
      { name: "JILI" },
      { name: "Joker Gaming" },
      { name: "Pragmatic Play" },
      { name: "NAGA GAMES" },
      { name: "Spadegaming" },
      { name: "MICRO GAMING" },
      { name: "HABANERO" },
      { name: "Relax Gaming" },
      { name: "KA Gaming" },
      { name: "Evoplay" },
      { name: "YGG Drasil" },
      { name: "RICH88" },
      { name: "Fast Spin" },
      { name: "MegaWin" },
      { name: "PLAYTECH" },
      { name: "Next Spin" },
      { name: "SIMPLE PLAY" },
      { name: "KINGMAKER" },
      { name: "Play Star" },
    ],
  },
  {
    key: "lotto",
    label: "หวย & คีโน",
    note: "รองรับทุกรูปแบบการแทง ทั้งไทยและต่างประเทศ",
    items: [
      { name: "LSM LOTTO" },
      { name: "LOTTO EXIT" },
      { name: "จับยี่กี" },
      { name: "หวยรัฐบาลไทย" },
      { name: "GPI GAMING" },
      { name: "QQ KENO" },
    ],
  },
];

const PREVIEW = 12;

export default function Providers() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const group = GROUPS[active];
  const items = expanded ? group.items : group.items.slice(0, PREVIEW);
  const total = GROUPS.reduce((n, g) => n + g.items.length, 0);

  return (
    <section id="packages" className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading
          eyebrow="ค่ายเกมที่รองรับ"
          title="รวมทุกค่ายดังไว้ในระบบเดียว"
          description="ครอบคลุมทั้งกีฬา คาสิโน เกมสล็อต และหวย เลือกดูได้ตามหมวดที่คุณสนใจ และเพิ่มค่ายใหม่ได้ตลอดเวลา"
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-[300px_1fr]">
          {/* category summary */}
          <div className="relative overflow-hidden rounded-card bg-gradient-to-br from-violet-deep to-violet p-7 text-white">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-12 h-48 w-48 rounded-full bg-orange/40 blur-2xl"
            />
            <div className="relative z-10">
              <p className="font-display text-[11.5px] font-semibold uppercase tracking-[0.14em] text-white/70">
                หมวด{group.label}
              </p>
              <p className="mt-4 font-display text-[64px] font-bold leading-none">
                {group.items.length}
                <span className="ml-2 text-[20px] font-medium">ค่าย</span>
              </p>
              <p className="mt-4 text-[14px] leading-[1.8] text-white/75">
                {group.note}
              </p>
              <p className="mt-6 border-t border-white/20 pt-4 font-display text-[13px] text-white/70">
                รวมทุกหมวด {total} ค่ายในระบบเดียว
              </p>
            </div>
          </div>

          {/* provider grid */}
          <div className="card rounded-card p-6 sm:p-7">
            <div className="flex flex-wrap gap-2">
              {GROUPS.map((g, i) => {
                const on = i === active;
                return (
                  <button
                    key={g.key}
                    onClick={() => {
                      setActive(i);
                      setExpanded(false);
                    }}
                    aria-pressed={on}
                    className={`rounded-pill border px-4 py-2 text-[14px] transition-colors ${
                      on
                        ? "border-violet bg-violet text-white"
                        : "border-line text-ink-muted hover:border-violet-soft"
                    }`}
                  >
                    {g.label}
                  </button>
                );
              })}
            </div>

            <ul className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {items.map((p) => (
                <li
                  key={p.name}
                  className="flex items-center gap-3 rounded-xl border border-line bg-canvas px-3.5 py-3 transition-colors hover:border-violet-soft hover:bg-violet-tint"
                >
                  <ProviderLogo provider={p} />
                  <span className="truncate text-[14px] font-medium">
                    {p.name}
                  </span>
                </li>
              ))}
            </ul>

            {group.items.length > PREVIEW && (
              <button
                onClick={() => setExpanded((v) => !v)}
                className="mt-5 w-full rounded-xl border border-line py-3 text-[14px] font-medium text-ink-muted transition-colors hover:border-violet-soft hover:text-violet-deep"
              >
                {expanded
                  ? "ย่อรายการ"
                  : `ดูทั้งหมด ${group.items.length} ค่าย`}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProviderLogo({ provider }: { provider: Provider }) {
  if (provider.logo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={provider.logo}
        alt={provider.name}
        width={36}
        height={36}
        className="h-9 w-9 shrink-0 rounded-lg object-contain"
      />
    );
  }

  /* Fallback monogram — first letter of each of the first two words. */
  const initials = provider.name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <span
      aria-hidden
      className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line bg-surface font-display text-[13px] font-bold text-violet-deep"
    >
      {initials}
    </span>
  );
}
