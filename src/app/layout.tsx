import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: "딩코딩코 팬 페이지 | DingcoDingco Fan Page",
  description: "코딩을 재미있게! 딩코딩코 유튜브 채널 팬 페이지입니다.",
  keywords: ["딩코딩코", "코딩", "프로그래밍", "유튜브", "개발", "튜토리얼"],
  authors: [{ name: "딩코딩코 팬" }],
  openGraph: {
    title: "딩코딩코 팬 페이지",
    description: "코딩을 재미있게! 딩코딩코 유튜브 채널 팬 페이지입니다.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
