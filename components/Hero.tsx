import React from 'react';
import { IMAGES } from '@/data/timeline';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Abstract Background Effect */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url('${IMAGES.HERO_BG}')` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-block mb-4 px-3 py-1 border border-white/30 text-xs tracking-[0.2em] text-white/70 uppercase">
          Historical Archive
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight leading-tight">
          元朗721
        </h1>
        <p className="text-xl md:text-3xl font-light mb-8 text-gray-300">
          2019年7月21日無差別襲擊事件
        </p>
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-400 leading-relaxed font-light">
            這一夜，白衣人在元朗肆意襲擊市民，恐懼蔓延全城。這是香港歷史上無法磨滅的傷痕。我們紀錄，為了拒絕遺忘。
          </p>
        </div>
        
        <div className="mt-12 animate-bounce">
          <a href="#timeline" className="text-white/50 hover:text-white transition-colors">
            <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};