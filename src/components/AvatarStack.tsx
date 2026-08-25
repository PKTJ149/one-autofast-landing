import Image from "next/image";

/**
 * Social proof row: overlapping member photos followed by a short trust line.
 *
 * Source files are 39x39, so they are rendered at 32px to stay sharp on
 * retina screens. Swap or extend the list by editing PEOPLE.
 */
const PEOPLE = [
  "/avatars/avatar01.png",
  "/avatars/avatar02.png",
  "/avatars/avatar03.png",
  "/avatars/avatar04.png",
  "/avatars/avatar05.png",
];

export default function AvatarStack() {
  return (
    <div className="flex items-center gap-3.5">
      <ul className="flex -space-x-2">
        {PEOPLE.map((src) => (
          <li key={src}>
            <Image
              src={src}
              alt=""
              width={39}
              height={39}
              aria-hidden
              className="h-8 w-8 rounded-full object-cover ring-2 ring-canvas"
            />
          </li>
        ))}
      </ul>

      <p className="text-[14px] leading-snug">
        <span className="font-display font-bold">1,000 +</span>{" "}
        <span className="text-ink-muted">ผู้ใช้งานที่ไว้ใจเรา</span>
      </p>
    </div>
  );
}
