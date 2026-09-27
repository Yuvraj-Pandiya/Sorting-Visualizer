import React from 'react';

export default function Visualizer({ array }) {
  return (
    <div className="bg-surface-container-lowest border-2 border-outline shadow-brutal flex flex-col overflow-hidden relative">
      {/* Viewport Header Strip */}
      <div className="bg-surface-container-high px-space-md py-3 flex flex-wrap items-center justify-between gap-space-sm border-b-2 border-outline">
        <div className="flex items-center gap-space-sm">
          <span className="w-3 h-3 bg-secondary border border-outline"></span>
          <div className="flex flex-col">
            <span className="font-headline font-bold text-base uppercase tracking-tight text-on-surface">Visualizer Window</span>
            <span className="font-code-notation text-xs font-medium text-on-surface-variant">Viewport Canvas #01 // Pure Geometry</span>
          </div>
        </div>
        <div className="flex items-center gap-space-md">
          <div className="flex items-center gap-1.5 px-space-sm py-1 bg-primary-container border-2 border-outline text-on-surface font-code-notation text-xs font-bold shadow-brutal-sm">
            <span className="material-symbols-outlined text-[15px] font-bold">insights</span>
            <span>STATUS: IDLE</span>
          </div>
        </div>
      </div>
      
      {/* Color Legend Bar */}
      <div className="bg-surface-container px-space-md py-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-on-surface font-label text-xs font-bold uppercase tracking-wider border-b-2 border-outline">
        <div className="flex items-center gap-1.5"><span className="w-3 h-3 bg-[#0055ff] border border-outline shadow-brutal-sm"></span><span>Default</span></div>
        <div className="flex items-center gap-1.5"><span className="w-3 h-3 bg-[#ffcc00] border border-outline shadow-brutal-sm"></span><span>Comparing [i, j]</span></div>
        <div className="flex items-center gap-1.5"><span className="w-3 h-3 bg-[#e63b2e] border border-outline shadow-brutal-sm"></span><span>Swapping</span></div>
        <div className="flex items-center gap-1.5"><span className="w-3 h-3 bg-[#1a1a1a] border border-outline shadow-brutal-sm"></span><span>Pivot / Key</span></div>
        <div className="flex items-center gap-1.5"><span className="w-3 h-3 bg-[#10b981] border border-outline shadow-brutal-sm"></span><span>Sorted</span></div>
      </div>
      
      {/* Dynamic Stage Canvas Area */}
      <div className="relative w-full h-[380px] sm:h-[440px] xl:h-[480px] bg-[#faf8f5] px-2 sm:px-space-md pb-4 pt-10 flex items-end justify-center select-none overflow-hidden">
        {/* Dynamic Bar Container */}
        <div className="w-full h-full flex items-end justify-center gap-[2px] z-0">
          {array && array.map((val, idx) => {
            const heightPercent = Math.max(6, Math.min(100, (val / 100) * 100));
            return (
              <div
                key={idx}
                className="flex-1 transition-all duration-75 relative group border-t-2 border-x border-outline bg-[#0055ff]"
                style={{ height: `${heightPercent}%` }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
