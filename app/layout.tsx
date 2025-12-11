import type { Metadata } from 'next';
import { Noto_Sans_TC, Noto_Serif_TC } from 'next/font/google';
import './globals.css';

const notoSans = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto-sans',
  preload: true,
});

const notoSerif = Noto_Serif_TC({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-serif',
  preload: true,
});

export const metadata: Metadata = {
  title: '元朗721 歷史記憶 | 2019年7月21日無差別襲擊事件',
  description: '記錄2019年7月21日元朗無差別襲擊事件的歷史檔案。包含時間線、見證與判決紀錄。',
  keywords: ['元朗721', '反修例', '歷史記錄', '香港', 'Yuen Long Attack'],
  openGraph: {
    title: '元朗721 歷史記憶',
    description: '毋忘歷史，鑑古知今。',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-HK" className={`${notoSans.variable} ${notoSerif.variable}`}>
      <head>
        {/* 
          Security Note: In a production Vercel deployment, configure 'vercel.json' 
          to add headers like X-Content-Type-Options: nosniff and Content-Security-Policy.
        */}
      </head>
      <body className="font-sans min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}