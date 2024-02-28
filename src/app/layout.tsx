import type { Metadata } from "next";
import { Nanum_Gothic } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const inter = Nanum_Gothic({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "유생 테스트",
  description: "내가 유생이었다면?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
