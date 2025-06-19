import type { Metadata } from "next";
import "@/styles";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "모이면 완성되는 마음의 종이, 돌돌",
  description:
    "돌돌은 모두가 함께 만드는 온라인 롤링페이퍼입니다. 생일, 졸업, 이별, 감사의 순간을 따뜻하게 기억하세요.",
  icons: {
    icon: "/favicon/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          {children}
          <div id="modal-root"></div>
        </Providers>
      </body>
    </html>
  );
}
