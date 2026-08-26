"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const LINKS = [
  { label: "เกี่ยวกับเรา", href: "#about" },
  { label: "ฟีเจอร์", href: "#features" },
  { label: "ธีม", href: "#themes" },
  { label: "ผลิตภัณฑ์", href: "#products" },
  { label: "แพ็กเกจ", href: "#packages" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-canvas/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1180px] items-center gap-8 px-6 py-4 lg:px-10">
        {/* wordmark */}
        <a href="#top" className="flex shrink-0 items-center">
                    <Image
            src="/logo.png"
            alt="Auto Fast Track"
            width={934}
            height={136}
            priority
            className="h-6 w-auto sm:h-8"
          />
        </a>

        {/* desktop links */}
        <ul className="ml-auto hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-3.5 py-2 text-[14px] text-ink-muted transition-colors hover:bg-violet-tint hover:text-violet-deep"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <button className="hidden rounded-lg border border-line px-3 py-1.5 font-display text-[12px] tracking-[0.08em] text-ink-muted transition-colors hover:border-violet-soft hover:text-violet-deep sm:block">
            TH
          </button>
          <a
            href="#contact"
            className="whitespace-nowrap rounded-xl bg-cta px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_0_18px_rgba(255,114,33,0.45),0_10px_26px_-10px_rgba(255,114,33,0.9)] transition-all hover:scale-[1.03] hover:shadow-[0_0_26px_rgba(255,114,33,0.7),0_14px_32px_-10px_rgba(255,114,33,1)]"
          >
            ติดต่อเรา
          </a>

          {/* mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="เปิดเมนู"
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-lg border border-line lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 h-px w-full bg-ink transition-all ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-full bg-ink transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-full bg-ink transition-all ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* mobile drawer */}
      <div
        className={`overflow-hidden border-t border-line bg-surface/95 backdrop-blur-xl transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        <ul className="px-6 py-3">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-line-soft py-3 text-[15px] text-ink-muted"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
