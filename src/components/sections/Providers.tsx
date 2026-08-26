"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

/** Logos come straight from the design hand-off, one folder per category. */
type Provider = { name: string; logo: string };
type Group = { key: string; label: string; note: string; items: Provider[] };

const GROUPS: Group[] = [
  {
    key: "sport",
    label: "กีฬา",
    note: "ครบทุกลีกดัง ทั้งฟุตบอล บาสเกตบอล และมวย",
    items: [
        { name: "3 Sing", logo: "/providers/sport/3sing.png" },
        { name: "CMD", logo: "/providers/sport/cmd.png" },
        { name: "LSM Sport", logo: "/providers/sport/lsmsport.png" },
        { name: "ONE-BX", logo: "/providers/sport/onebx.png" },
        { name: "ONE-BX All New", logo: "/providers/sport/onebxallnew.png" },
        { name: "SABA Sports", logo: "/providers/sport/sabasports.png" },
        { name: "Sbobet", logo: "/providers/sport/sbobet.png" },
        { name: "Sport LSM", logo: "/providers/sport/sportlsm.png" },
    ],
  },
  {
    key: "casino",
    label: "คาสิโน",
    note: "ถ่ายทอดสดจากสตูดิโอจริง ครบทุกเกมโต๊ะ",
    items: [
        { name: "AE Gaming", logo: "/providers/casino/ae-gaming.png" },
        { name: "Astar", logo: "/providers/casino/astar.png" },
        { name: "BG", logo: "/providers/casino/bg.png" },
        { name: "Casino Game", logo: "/providers/casino/casinogame.png" },
        { name: "Dream Gaming", logo: "/providers/casino/dreamgaming.png" },
        { name: "eBET", logo: "/providers/casino/ebet.png" },
        { name: "Evolution", logo: "/providers/casino/evolution.png" },
        { name: "KA Gaming", logo: "/providers/casino/kagaming.png" },
        { name: "Mango Play", logo: "/providers/casino/mangoplay.png" },
        { name: "Playtech ONE", logo: "/providers/casino/playtechone.png" },
        { name: "Pragmatic Play", logo: "/providers/casino/pragmaticplay.png" },
        { name: "Pretty Gaming", logo: "/providers/casino/prettygaming.png" },
        { name: "SA Gaming", logo: "/providers/casino/sa-gaming.png" },
        { name: "Sexy Baccarat", logo: "/providers/casino/sexybaccarat.png" },
        { name: "Skywind Group", logo: "/providers/casino/skywind-group.png" },
        { name: "Vivo Gaming", logo: "/providers/casino/vivogaming.png" },
        { name: "W Casino", logo: "/providers/casino/wcasino.png" },
        { name: "WM Casino", logo: "/providers/casino/wmcasino.png" },
        { name: "World Entertainment", logo: "/providers/casino/world-entertainment.png" },
        { name: "YB Live", logo: "/providers/casino/yblive.png" },
    ],
  },
  {
    key: "slot",
    label: "เกม & สล็อต",
    note: "ค่ายสล็อตยอดนิยม อัปเดตเกมใหม่ต่อเนื่อง",
    items: [
        { name: "10 1", logo: "/providers/slot/10-1.png" },
        { name: "FC Fachai", logo: "/providers/slot/fc-fachai.png" },
        { name: "ABI Game", logo: "/providers/slot/abigame.png" },
        { name: "Alize", logo: "/providers/slot/alize.png" },
        { name: "AllBet", logo: "/providers/slot/allbet.png" },
        { name: "Amigo", logo: "/providers/slot/amigo.png" },
        { name: "ANB Slot", logo: "/providers/slot/anbslot.png" },
        { name: "AP Advant Play", logo: "/providers/slot/apadvantplay.png" },
        { name: "BlackAnt", logo: "/providers/slot/blackant.png" },
        { name: "BNG", logo: "/providers/slot/bng.png" },
        { name: "BT Gaming", logo: "/providers/slot/btgaming.png" },
        { name: "Cherry Gaming", logo: "/providers/slot/cherrygaming.png" },
        { name: "Dragon Soft", logo: "/providers/slot/dragon-soft.png" },
        { name: "EpicWin", logo: "/providers/slot/epicwin.png" },
        { name: "Fastspin", logo: "/providers/slot/fastspin.png" },
        { name: "Funky Games", logo: "/providers/slot/funky-games.png" },
        { name: "Galaxsys", logo: "/providers/slot/galaxsys.png" },
        { name: "Gameplay Interactive", logo: "/providers/slot/gameplayinteractive.png" },
        { name: "Habanero", logo: "/providers/slot/habanero.png" },
        { name: "Hotdog", logo: "/providers/slot/hotdog.png" },
        { name: "JILI", logo: "/providers/slot/jili.png" },
        { name: "Joker", logo: "/providers/slot/joker.png" },
        { name: "Kingmaker", logo: "/providers/slot/kingmaker.png" },
        { name: "MegaWin", logo: "/providers/slot/megawin.png" },
        { name: "Microgaming", logo: "/providers/slot/microgaming.png" },
        { name: "MP Poke", logo: "/providers/slot/mp-poke.png" },
        { name: "Naga", logo: "/providers/slot/naga.png" },
        { name: "Next Spin", logo: "/providers/slot/nextspin.png" },
        { name: "Nolimit", logo: "/providers/slot/nolimit.png" },
        { name: "PG 1", logo: "/providers/slot/pg-1.png" },
        { name: "PG", logo: "/providers/slot/pg.png" },
        { name: "Play Star", logo: "/providers/slot/playstar.png" },
        { name: "RB7 Slot", logo: "/providers/slot/rb7slot.png" },
        { name: "Red Tiger", logo: "/providers/slot/red-tiger.png" },
        { name: "Relax", logo: "/providers/slot/relax.png" },
        { name: "Rich88", logo: "/providers/slot/rich88.png" },
        { name: "Simple Play", logo: "/providers/slot/simpleplay.png" },
        { name: "Spadegaming", logo: "/providers/slot/spadegaming.png" },
        { name: "Titan", logo: "/providers/slot/titan.png" },
        { name: "UU Slot", logo: "/providers/slot/uu-slot.png" },
        { name: "V Plus", logo: "/providers/slot/vplus.png" },
        { name: "Xpanse", logo: "/providers/slot/xpanse.png" },
        { name: "Xtreme Gaming", logo: "/providers/slot/xtreme-gasming.png" },
    ],
  },
  {
    key: "lotto",
    label: "หวย & คีโน",
    note: "รองรับทุกรูปแบบการแทง ทั้งไทยและต่างประเทศ",
    items: [
        { name: "F1 Lotto", logo: "/providers/lotto/f1lotto.png" },
        { name: "Lam Lotto", logo: "/providers/lotto/lamlotto.png" },
        { name: "Lotto Exit", logo: "/providers/lotto/lottoexit.png" },
        { name: "Lotto Plus", logo: "/providers/lotto/lottoplus.png" },
        { name: "LSM99 Lotto", logo: "/providers/lotto/lsm99lotto.png" },
        { name: "My Lotto", logo: "/providers/lotto/mylotto.png" },
        { name: "ONE Lotto", logo: "/providers/lotto/onelotto.png" },
        { name: "QQ Keno", logo: "/providers/lotto/qqkeno.png" },
    ],
  },
];

/* An "all" tab derived from the others, so it can never drift out of sync. */
const ALL: Group = {
  key: "all",
  label: "ทั้งหมด",
  note: "ทุกค่ายที่เชื่อมต่อกับระบบ ครบทั้งกีฬา คาสิโน เกมสล็อต และหวย",
  items: GROUPS.flatMap((g) => g.items),
};

const TABS: Group[] = [ALL, ...GROUPS];

const PREVIEW = 12;

export default function Providers() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const group = TABS[active];
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
          <div className="relative overflow-hidden rounded-card bg-gradient-to-br from-violet-deep to-violet p-7 text-center text-white lg:text-left">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-12 h-48 w-48 rounded-full bg-orange/40 blur-2xl"
            />
            <div className="relative z-10">
              <p className="font-display text-[14px] font-semibold uppercase tracking-[0.14em] text-white/70">
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
            <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
              {TABS.map((g, i) => {
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
                  key={p.logo}
                  className="flex min-h-[104px] flex-col items-center justify-center gap-2 rounded-xl border border-line bg-canvas px-3 py-3 transition-colors hover:border-violet-soft hover:bg-violet-tint"
                >
                  {/* Decorative: the name sits right below as real text. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.logo}
                    alt=""
                    width={216}
                    height={80}
                    loading="lazy"
                    className="max-h-9 w-auto max-w-full object-contain"
                  />
                  <span className="w-full truncate text-center text-[12.5px] font-medium text-ink-muted">
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
