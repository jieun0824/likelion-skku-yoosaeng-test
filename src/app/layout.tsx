import type { Metadata } from "next";
import {
  Nanum_Gothic,
  Diphylleia,
  Noto_Sans_KR,
  Bagel_Fat_One,
} from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { cls } from "@/lib/utils";
import Script from "next/script";
import KakaoScript from "@/lib/KaKaoScript";

const inter = Noto_Sans_KR({ weight: ["400", "700"], subsets: ["latin"] });
const diphylleia = Diphylleia({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-diphylleia",
});
const Bagel = Bagel_Fat_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bagel",
});
export const metadata: Metadata = {
  title: "유생 테스트",
  description: "내가 유생이었다면?",
};

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cls(inter.className, diphylleia.variable, Bagel.variable)}
      >
        {children}
      </body>
      <KakaoScript />
    </html>
  );
}
