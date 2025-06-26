import "@/styles";

import type { Metadata } from "next";
import Providers from "./providers";

const BASE_URL = "https://doldol.wha1eson.co.kr";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: "모이면 완성되는 마음의 종이, 돌돌",
  description:
    "돌돌은 모두가 함께 만드는 온라인 롤링페이퍼입니다. 생일, 졸업, 이별, 감사의 순간을 따뜻하게 기억하세요.",
  icons: {
    icon: "/favicon/favicon.ico",
  },
  openGraph: {
    title: "돌돌: 모이면 완성되는 마음의 종이",
    url: BASE_URL,
    siteName: "돌돌",
    images: [
      {
        url: "https://i.ibb.co/MDQCjxbJ/symbol-incase-small.png",
        width: 1200,
        height: 630,
        alt: "돌돌 온라인 롤링페이퍼 메인 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
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
