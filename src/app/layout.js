"use-client";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
export const metadata = {
  metadataBase: new URL("https://dream-home-decor-hub.vercel.app"),

  title: {
    default: "Dream Home Decor Hub",
    template: "%s | Dream Home Decor Hub",
  },
  verification: {
    google: "FOJGUb-TrxE78ZYvdJNUnYi8OqKm3aMTgEU4RHBKU6I",
  },
  description:
    "Find cozy home decor ideas, bedroom inspiration, living room styling, and modern decorating tips.",

  keywords: [
    "home decor",
    "bedroom decor",
    "living room decor",
    "interior design",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} bg-[#F8F6F2] text-[#1E1E1E]`}
      >
        {children}
      </body>
    </html>
  );
}