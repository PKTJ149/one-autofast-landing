import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

/* Artwork is 1015x644 with a transparent background, so it sits directly on
   the card without a tinted frame. */
const ITEMS = [
  {
    tag: "Mini Games",
    title: "มินิเกมปรับแต่งได้ไม่จำกัด",
    body: "สร้างมินิเกมของคุณเองด้วยฟีเจอร์ที่ออกแบบมาให้สนุกไม่รู้จบ ไม่ว่าจะเป็นเกมไพ่ กล่องสุ่ม ซองอั่งเปา หรือเกมที่คิดขึ้นมาใหม่ทั้งหมด ระบบรองรับทุกไอเดีย",
    image: "/features/minigame.png",
  },
  {
    tag: "Fortune Wheel",
    title: "วงล้อเสี่ยงโชคที่ดึงคนกลับมาเล่นซ้ำ",
    body: "เพิ่มความตื่นเต้นให้ทุกการหมุน เหมาะทั้งเพื่อความบันเทิงและการแจกรางวัล สร้างประสบการณ์ที่ผู้ใช้จำได้และอยากกลับมาอีก",
    image: "/features/wheel.png",
  },
  {
    tag: "Missions",
    title: "ภารกิจสะสมรางวัล เพิ่มการกลับมาใช้งาน",
    body: "ให้ลูกค้าทำภารกิจ รับรางวัล และปลดล็อกสิทธิพิเศษ เพิ่มการมีส่วนร่วมและความภักดีต่อแพลตฟอร์มของคุณ",
    image: "/features/mission.png",
  },
  {
    tag: "Lottery",
    title: "ระบบหวยที่ดึงดูดและรักษาผู้ใช้",
    body: "ตั้งค่าง่าย ปลอดภัย รองรับการแทงได้ทุกรูปแบบ ใช้งานได้ครบทุกอุปกรณ์ ทำให้ผู้เล่นอยู่กับแพลตฟอร์มได้นานขึ้น",
    image: "/features/lotto.png",
  },
  {
    tag: "Reward Store",
    title: "ออกแบบร้านแลกของรางวัลของคุณเอง",
    body: "เปลี่ยนแต้มและไอเทมสะสมให้เป็นของรางวัลพิเศษ ให้ลูกค้าแลกได้อย่างอิสระ สร้างเศรษฐกิจภายในแพลตฟอร์มที่ยั่งยืน",
    image: "/features/exchange-shop.png",
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
              className="card sticky mb-5 grid gap-8 rounded-card p-7 lg:grid-cols-[1fr_420px] lg:items-center lg:p-10"
            >
              <div className="text-center lg:text-left">
                <span className="inline-flex items-center gap-2 rounded-pill bg-orange-tint px-3.5 py-1.5 font-display text-[14px] font-semibold uppercase tracking-[0.12em] text-orange-deep">
                  {String(i + 1).padStart(2, "0")} · {item.tag}
                </span>
                <h3 className="mt-4 text-[21px] font-semibold sm:text-[25px]">
                  {item.title}
                </h3>
                <p className="mx-auto mt-3 max-w-[560px] text-[15.5px] text-ink-muted lg:mx-0">
                  {item.body}
                </p>
              </div>

              <Image
                src={item.image}
                alt={item.title}
                width={1015}
                height={644}
                className="h-auto w-full"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
