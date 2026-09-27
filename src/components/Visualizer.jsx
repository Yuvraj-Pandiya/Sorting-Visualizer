import React from 'react';

export default function Visualizer({ array }) {
  // We'll calculate the bar width based on container, but flex makes it easy.
  return (
    <div className="flex-1 bg-[#1e293b]/50 rounded-xl border border-white/5 backdrop-blur-md flex flex-col relative overflow-hidden p-6 mb-4">
      {/* Legend */}
      <div className="absolute top-4 right-4 flex gap-4 text-[10px] font-jetbrains uppercase tracking-wider">
        <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-gradient-to-t from-[#6366f1] to-[#38bdf8]"></div> Default</div>
        <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#f59e0b] shadow-[0_0_5px_rgba(245,158,11,0.5)]"></div> Comparing</div>
        <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#ef4444] shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div> Swapping</div>
        <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#8b5cf6] shadow-[0_0_5px_rgba(139,92,246,0.5)]"></div> Pivot/Key</div>
        <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_5px_rgba(16,185,129,0.5)]"></div> Sorted</div>
      </div>

      <div className="flex-1 flex items-end justify-center gap-[1px] mt-8">
        {array && array.map((val, idx) => {
          // For now, render default styling
          return (
            <div
              key={idx}
              style={{
                height: `${val}%`,
                flex: 1,
                background: 'linear-gradient(to top, #6366f1, #38bdf8)'
              }}
              className="rounded-t-[2px] opacity-90 transition-all duration-75"
            ></div>
          );
        })}
      </div>
    </div>
  );
}
