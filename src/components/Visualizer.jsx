import React from 'react';

export default function Visualizer({ array, activeIndices, algoKey, isRunning, isSorted }) {
  const n = array ? array.length : 0;
  
  let phase = "IDLE";
  if (isRunning) phase = "RUNNING";
  if (isSorted) phase = "SORTED";

  return (
    <div className="bg-surface-container-lowest border-2 border-outline shadow-brutal flex flex-col overflow-hidden relative">
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
            <span>STATUS: {phase}</span>
          </div>
        </div>
      </div>
      
      <div className="bg-surface-container px-space-md py-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-on-surface font-label text-xs font-bold uppercase tracking-wider border-b-2 border-outline">
        <div className="flex items-center gap-1.5"><span className="w-3 h-3 bg-[#0055ff] border border-outline shadow-brutal-sm"></span><span>Default</span></div>
        <div className="flex items-center gap-1.5"><span className="w-3 h-3 bg-[#ffcc00] border border-outline shadow-brutal-sm"></span><span>Comparing [i, j]</span></div>
        <div className="flex items-center gap-1.5"><span className="w-3 h-3 bg-[#e63b2e] border border-outline shadow-brutal-sm"></span><span>Swapping</span></div>
        <div className="flex items-center gap-1.5"><span className="w-3 h-3 bg-[#1a1a1a] border border-outline shadow-brutal-sm"></span><span>Pivot / Key</span></div>
        <div className="flex items-center gap-1.5"><span className="w-3 h-3 bg-[#10b981] border border-outline shadow-brutal-sm"></span><span>Sorted</span></div>
      </div>
      
      <div className="relative w-full h-[380px] sm:h-[440px] xl:h-[480px] bg-[#faf8f5] px-2 sm:px-space-md pb-4 pt-10 flex items-end justify-center select-none overflow-hidden">
        
        {activeIndices?.activeRange && (
          <div className="absolute bottom-0 top-8 bg-tertiary-container/30 border-x-2 border-tertiary pointer-events-none transition-all duration-150" 
            style={{
              left: `${Math.max(0, (activeIndices.activeRange[0] / n) * 100)}%`, 
              width: `${Math.min(100, ((activeIndices.activeRange[1] - activeIndices.activeRange[0] + 1) / n) * 100)}%`
            }}>
            <div className="w-full flex justify-between px-2 pt-1 font-code-notation text-[10px] font-bold text-tertiary uppercase">
              <span>[low: {activeIndices.activeRange[0]}]</span>
              <span>[high: {activeIndices.activeRange[1]}]</span>
            </div>
          </div>
        )}

        {activeIndices?.pivot !== undefined && (
          <div className="absolute top-2 transition-all duration-150 transform -translate-x-1/2 flex flex-col items-center pointer-events-none z-10" 
            style={{left: `${((activeIndices.pivot + 0.5) / n) * 100}%`}}>
            <span className="px-2 py-0.5 bg-primary text-on-primary font-headline font-bold text-[10px] uppercase tracking-wider border-2 border-outline shadow-brutal-sm">PIVOT</span>
            <span className="material-symbols-outlined text-[16px] text-primary -mt-1 font-bold">arrow_drop_down</span>
          </div>
        )}

        <div className="w-full h-full flex items-end justify-center gap-[2px] z-0">
          {array && array.map((val, idx) => {
            const heightPercent = Math.max(6, Math.min(100, (val / 100) * 100));
            
            let bgColor = 'bg-[#0055ff]';
            if (activeIndices?.sorted?.includes(idx)) bgColor = 'bg-[#10b981]';
            else if (activeIndices?.swapping?.includes(idx)) bgColor = 'bg-[#e63b2e]';
            else if (activeIndices?.comparing?.includes(idx)) bgColor = 'bg-[#ffcc00]';
            else if (activeIndices?.pivot === idx) bgColor = 'bg-[#1a1a1a]';
            
            return (
              <div
                key={idx}
                className={`flex-1 transition-all duration-75 relative group border-t-2 border-x border-outline ${bgColor}`}
                style={{ height: `${heightPercent}%` }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
