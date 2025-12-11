import React from 'react';
import { timelineEvents } from '@/data/timeline';

export const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-24 bg-white relative scroll-mt-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-black mb-4">事發經過</h2>
          <div className="w-16 h-1 bg-black mx-auto"></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2"></div>

          {timelineEvents.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={event.id} className={`relative flex items-start mb-20 md:mb-32 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Mobile: Time Display (above content) */}
                <div className="md:hidden absolute left-12 -top-6 text-sm font-mono font-bold text-gray-400">
                  {event.time}
                </div>

                {/* Content Side */}
                <div className={`flex-1 ml-12 md:ml-0 ${isEven ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                  
                  <div className="flex flex-col gap-4">
                    {/* Event Title & Desc */}
                    <div>
                       <h3 className="text-2xl font-bold text-black mb-3">{event.title}</h3>
                       <p className="text-gray-600 leading-relaxed text-sm md:text-base text-justify md:text-inherit">
                         {event.description}
                       </p>
                    </div>

                    {/* Image Attachment */}
                    {event.imageUrl && (
                      <div className={`w-full h-48 md:h-72 overflow-hidden rounded shadow-sm border border-gray-100 mt-2 ${isEven ? 'md:ml-auto' : 'md:mr-auto'}`}>
                        {/* Note: Using standard img tag for external images without next.config.js domain allowlist */}
                        <img 
                          src={event.imageUrl} 
                          alt={event.title} 
                          loading="lazy"
                          className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                        />
                      </div>
                    )}

                    {/* YouTube Embed with Fallback Message for Error Handling */}
                    {event.youtubeId && (
                      <div className="mt-2 w-full flex flex-col gap-1">
                        <div className="aspect-video rounded overflow-hidden shadow-sm bg-black border border-gray-800 relative">
                           <iframe 
                            width="100%" 
                            height="100%" 
                            src={`https://www.youtube.com/embed/${event.youtubeId}`} 
                            title={`${event.title} video`}
                            className="w-full h-full relative z-10"
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            loading="lazy"
                          ></iframe>
                        </div>
                        {/* Error Cause Explanation: Displayed to help users if video fails */}
                        <p className={`text-[10px] text-gray-400 mt-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                           ⚠️ 如影片無法播放（顯示全黑或拒絕連線），通常是因為您的瀏覽器阻擋了第三方 Cookie 或 YouTube 的嵌入限制。<br/>
                           <a 
                             href={`https://www.youtube.com/watch?v=${event.youtubeId}`} 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="underline hover:text-black transition-colors"
                           >
                             點擊此處直接前往 YouTube 觀看原始片段
                           </a>
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Center Node */}
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-black border-4 border-white rounded-full flex items-center justify-center transform md:-translate-x-1/2 z-10 shadow-lg mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* Desktop: Time Side */}
                <div className={`hidden md:block flex-1 ${isEven ? 'text-left pl-16' : 'text-right pr-16'}`}>
                  <span className="sticky top-32 text-4xl font-mono font-bold text-gray-200 tracking-wider">
                    {event.time}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};