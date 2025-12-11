import React from 'react';
import { testimonies } from '../data/timeline';

export const Testimony: React.FC = () => {
  return (
    <section id="testimony" className="py-24 bg-zinc-50 border-y border-gray-100">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-black mb-2">見證者之聲</h2>
          <p className="text-gray-500 text-sm">來自當晚在場人士的真實紀錄</p>
        </div>

        {/* Scroll Container with Snap */}
        <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory gap-6 no-scrollbar">
          {testimonies.map((item) => (
            <div 
              key={item.id} 
              className="flex-shrink-0 w-full md:w-[450px] snap-center"
            >
              <div className="bg-white p-8 h-full shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
                <div>
                  <svg className="w-8 h-8 text-gray-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9C9.55228 16 10 15.5523 10 15V9C10 8.44772 9.55228 8 9 8H5C4.44772 8 4 8.44772 4 9V18C4 19.6569 5.34315 21 7 21H14.017ZM21.017 21L21.017 18C21.017 16.8954 20.1216 16 19.017 16H16C16.5523 16 17 15.5523 17 15V9C17 8.44772 16.5523 8 16 8H12C11.4477 8 11 8.44772 11 9V18C11 19.6569 12.3431 21 14 21H21.017Z" />
                  </svg>
                  <blockquote className="text-lg text-gray-800 font-light leading-relaxed mb-6">
                    "{item.quote}"
                  </blockquote>
                </div>
                <div className="flex items-center border-t border-gray-100 pt-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-xs font-bold mr-3">
                    {item.role[0]}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-black">{item.name}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">{item.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Spacer to allow seeing the last card easily */}
          <div className="w-12 flex-shrink-0 md:hidden"></div>
        </div>
      </div>
    </section>
  );
};