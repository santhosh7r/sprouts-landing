import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Sprouts International Pre School — Chennai & Bengaluru | Play Group · Pre-KG · LKG · UKG",
  description:
    "Sprouts International Pre School is a premium early-childhood learning center in Chennai & Bengaluru offering Play Group, Pre-KG, LKG, UKG & Day Care (8 AM–8 PM). Play-based learning, certified educators and a safe, beautifully designed campus.",
  keywords: ["preschool", "play school", "early childhood", "LKG", "UKG", "nursery", "playgroup", "day care", "kindergarten", "premium preschool"],
  openGraph: {
    title: "Sprouts International Pre School — Chennai & Bengaluru",
    description: "Luxury, play-based early education. Play Group · Pre-KG · LKG · UKG · Day Care.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
