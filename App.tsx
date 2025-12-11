import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { Testimony } from './components/Testimony';
import { Verdict } from './components/Verdict';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Timeline />
        <Testimony />
        <Verdict />
      </main>
      <footer className="bg-black text-gray-400 py-8 text-center text-sm">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} 元朗721 歷史記憶. 毋忘歷史，鑑古知今。</p>
          <p className="mt-2 text-xs text-gray-600">本網站為歷史記錄用途，內容基於公開資料整理。</p>
        </div>
      </footer>
    </div>
  );
};

export default App;