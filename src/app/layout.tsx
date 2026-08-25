import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai, Space_Grotesk } from "next/font/google";
import "./globals.css";

/* Thai + Latin body face. IBM Plex Sans Thai is loopless and geometric, which
   sits closer to a modern tech brand than the neutral Noto default. */
const plexThai = IBM_Plex_Sans_Thai({
  variable: "--font-thai",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/* Latin-only display face, reserved for numerals, labels and metrics. */
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Auto Fast Track — ระบบหลังบ้านครบวงจรในที่เดียว",
  description:
    "จัดการทุกเว็บไซต์ในระบบหลังบ้านเดียว ทำงานเร็วขึ้น ลดจำนวนพนักงาน และควบคุมได้เต็มที่ ไม่ว่าคุณจะมีกี่เว็บก็ตาม",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      className={`${plexThai.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {/* Fixed backdrop for the whole page — does not scroll. */}
        <div className="page-bg" aria-hidden />
        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
