import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Timeline } from '@/components/Timeline';
import { Testimony } from '@/components/Testimony';
import { Verdict } from '@/components/Verdict';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Timeline />
        <Testimony />
        <Verdict />
      </main>
      <footer className="bg-black text-gray-400 py-12 text-center text-sm border-t border-gray-900">
        <div className="container mx-auto px-4">
          <p className="font-serif tracking-wider mb-2">© {new Date().getFullYear()} 元朗721 歷史記憶</p>
          <p className="text-xs text-gray-600">
            毋忘歷史，鑑古知今。本網站為歷史記錄用途，內容基於公開資料整理。
          </p>
        </div>
      </footer>
    </>
  );
}