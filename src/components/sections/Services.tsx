"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

/* Product banners, 672x225. */
const BANNERS = [
  "/products/product01.png",
  "/products/product02.png",
  "/products/product03.png",
  "/products/product04.png",
  "/products/product05.png",
];

const INTERVAL = 3500;

export default function Services() {
  /* Two banners fit side by side from the lg breakpoint up, one below it. */
  const [perView, setPerView] = useState(1);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const apply = () => setPerView(mq.matches ? 2 : 1);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const maxIndex = Math.max(0, BANNERS.length - perView);
  /* Derive the shown position instead of correcting state in an effect —
     perView can shrink and leave the stored index out of range. */
  const current = Math.min(index, maxIndex);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setIndex((i) => (Math.min(i, maxIndex) >= maxIndex ? 0 : i + 1));
    }, INTERVAL);
    return () => window.clearInterval(id);
  }, [paused, maxIndex]);

  return (
    <section className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading
          align="stacked"
          eyebrow="เสถียร เร็ว พร้อมขับเคลื่อน"
          title="บริการทั้งหมดของ Auto Fast Track"
          description="ระบบที่พร้อมรองรับการเติบโตของธุรกิจคุณตั้งแต่วันแรก ไม่ต้องรอพัฒนาเพิ่ม"
        />

        {/* Auto-advancing banner carousel */}
        <div
          className="mt-10 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${current * (100 / perView)}%)` }}
          >
            {BANNERS.map((src, i) => (
              <div
                key={src}
                style={{ flex: `0 0 ${100 / perView}%` }}
                className="px-2"
              >
                <Image
                  src={src}
                  alt={`แบนเนอร์ผลิตภัณฑ์ ${i + 1}`}
                  width={672}
                  height={225}
                  className="h-auto w-full rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* position dots */}
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`ไปยังแบนเนอร์ชุดที่ ${i + 1}`}
              aria-current={i === current}
              className={`h-2 rounded-pill transition-all ${
                i === current ? "w-7 bg-violet" : "w-2 bg-line hover:bg-violet-soft"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
