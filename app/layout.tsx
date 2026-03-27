import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OTO Reach - نضاعف إنتاجية الشركات 10x",
  description: "نساعدك على تشغيل بزنسك بدون الحاجة للعمل 10 ساعات يوميًا، عبر بناء نظام تشغيلي واضح ودمج الذكاء الاصطناعي وأتمتة العمليات",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-oto-darker antialiased">
        {children}
      </body>
    </html>
  );
}
