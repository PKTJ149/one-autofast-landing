import SectionHeading from "@/components/SectionHeading";

const ITEMS = [
  {
    tag: "Mini Games",
    title: "มินิเกมปรับแต่งได้ไม่จำกัด",
    body: "สร้างมินิเกมของคุณเองด้วยฟีเจอร์ที่ออกแบบมาให้สนุกไม่รู้จบ ไม่ว่าจะเป็นเกมไพ่ กล่องสุ่ม ซองอั่งเปา หรือเกมที่คิดขึ้นมาใหม่ทั้งหมด ระบบรองรับทุกไอเดีย",
    visual: "cards",
  },
  {
    tag: "Fortune Wheel",
    title: "วงล้อเสี่ยงโชคที่ดึงคนกลับมาเล่นซ้ำ",
    body: "เพิ่มความตื่นเต้นให้ทุกการหมุน เหมาะทั้งเพื่อความบันเทิงและการแจกรางวัล สร้างประสบการณ์ที่ผู้ใช้จำได้และอยากกลับมาอีก",
    visual: "wheel",
  },
  {
    tag: "Missions",
    title: "ภารกิจสะสมรางวัล เพิ่มการกลับมาใช้งาน",
    body: "ให้ลูกค้าทำภารกิจ รับรางวัล และปลดล็อกสิทธิพิเศษ เพิ่มการมีส่วนร่วมและความภักดีต่อแพลตฟอร์มของคุณ",
    visual: "bars",
  },
  {
    tag: "Lottery",
    title: "ระบบหวยที่ดึงดูดและรักษาผู้ใช้",
    body: "ตั้งค่าง่าย ปลอดภัย รองรับการแทงได้ทุกรูปแบบ ใช้งานได้ครบทุกอุปกรณ์ ทำให้ผู้เล่นอยู่กับแพลตฟอร์มได้นานขึ้น",
    visual: "numbers",
  },
  {
    tag: "Reward Store",
    title: "ออกแบบร้านแลกของรางวัลของคุณเอง",
    body: "เปลี่ยนแต้มและไอเทมสะสมให้เป็นของรางวัลพิเศษ ให้ลูกค้าแลกได้อย่างอิสระ สร้างเศรษฐกิจภายในแพลตฟอร์มที่ยั่งยืน",
    visual: "grid",
  },
];

export default function Features() {
  return (
    <section className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading
          eyebrow="ฟีเจอร์ไม่มีที่สิ้นสุด"
          title="ฟีเจอร์เด่นที่ไม่ทำให้ลูกค้าเบื่อ"
          description="ด้วยฟีเจอร์ที่หลากหลาย คุณออกแบบโปรโมชั่นได้อย่างอิสระ ทั้งดูแลลูกค้าเดิม ดึงลูกค้าใหม่ และสร้างกลยุทธ์การตลาดที่ยั่งยืนในระยะยาว"
        />

        {/* Sticky stack — each card pins and the next one slides over it,
            replacing the plain vertical list of cards. */}
        <div className="mt-10">
          {ITEMS.map((item, i) => (
            <article
              key={item.tag}
              style={{ top: `${7 + i * 0.9}rem` }}
              className="card sticky mb-5 grid gap-8 rounded-card p-7 lg:grid-cols-[1fr_260px] lg:items-center lg:p-10"
            >
              <div>
                <span className="inline-flex items-center gap-2 rounded-pill bg-orange-tint px-3 py-1 font-display text-[11.5px] font-semibold uppercase tracking-[0.12em] text-orange-deep">
                  {String(i + 1).padStart(2, "0")} · {item.tag}
                </span>
                <h3 className="mt-4 text-[21px] font-semibold sm:text-[25px]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[620px] text-[15.5px] text-ink-muted">
                  {item.body}
                </p>
              </div>
              <Visual kind={item.visual} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Small abstract visuals — placeholders that still read as distinct features. */
function Visual({ kind }: { kind: string }) {
  const shell =
    "grid h-[168px] place-items-center rounded-2xl bg-tint p-5 overflow-hidden";

  if (kind === "cards")
    return (
      <div className={shell} aria-hidden>
        <div className="flex">
          {[-12, 0, 12].map((r, i) => (
            <span
              key={i}
              style={{ transform: `rotate(${r}deg)`, marginLeft: i ? -22 : 0 }}
              className="h-24 w-16 rounded-xl border border-line bg-surface shadow-sm"
            />
          ))}
        </div>
      </div>
    );

  if (kind === "wheel")
    return (
      <div className={shell} aria-hidden>
        <span
          className="h-28 w-28 rounded-full border-8 border-surface shadow-inner"
          style={{
            background:
              "conic-gradient(#7c3aed 0 25%, #ff6b2c 0 50%, #a78bfa 0 75%, #ffa06b 0)",
          }}
        />
      </div>
    );

  if (kind === "bars")
    return (
      <div className={shell} aria-hidden>
        <div className="flex w-full flex-col gap-2.5">
          {[100, 72, 46].map((w, i) => (
            <span key={i} className="h-3 rounded-pill bg-surface">
              <span
                style={{ width: `${w}%` }}
                className="block h-full rounded-pill bg-gradient-to-r from-violet to-orange"
              />
            </span>
          ))}
        </div>
      </div>
    );

  if (kind === "numbers")
    return (
      <div className={shell} aria-hidden>
        <div className="flex gap-2">
          {["7", "1", "4", "9"].map((n, i) => (
            <span
              key={i}
              className="grid h-12 w-10 place-items-center rounded-lg border border-line bg-surface font-display text-[19px] font-bold text-violet-deep"
            >
              {n}
            </span>
          ))}
        </div>
      </div>
    );

  return (
    <div className={shell} aria-hidden>
      <div className="grid grid-cols-3 gap-2">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className={`h-11 w-11 rounded-xl border border-line ${
              i % 3 === 1 ? "bg-orange-tint" : "bg-surface"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
