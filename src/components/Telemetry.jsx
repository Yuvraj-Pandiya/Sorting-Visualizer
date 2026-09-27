import React from 'react';

export default function Telemetry() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 shrink-0">
      <div className="bg-[#1e293b]/65 backdrop-blur-md rounded-lg p-4 border border-white/5 flex flex-col justify-between">
        <span className="text-xs font-jetbrains text-on-surface-variant uppercase tracking-wider mb-2">Comparisons</span>
        <span className="text-2xl font-jetbrains text-white">0</span>
      </div>
      <div className="bg-[#1e293b]/65 backdrop-blur-md rounded-lg p-4 border border-white/5 flex flex-col justify-between">
        <span className="text-xs font-jetbrains text-on-surface-variant uppercase tracking-wider mb-2">Swaps / Writes</span>
        <span className="text-2xl font-jetbrains text-white">0</span>
      </div>
      <div className="bg-[#1e293b]/65 backdrop-blur-md rounded-lg p-4 border border-white/5 flex flex-col justify-between">
        <span className="text-xs font-jetbrains text-on-surface-variant uppercase tracking-wider mb-2">Elapsed Time</span>
        <span className="text-2xl font-jetbrains text-white">0.00s</span>
      </div>
      
      {/* Complexity Info */}
      <div className="bg-[#1e293b]/65 backdrop-blur-md rounded-lg p-3 border border-white/5 flex flex-col gap-1.5 overflow-hidden">
        <div className="flex justify-between items-center text-[10px] font-jetbrains text-on-surface-variant uppercase">
          <span>Time (W)</span>
          <span className="text-[#f59e0b] px-1.5 py-0.5 bg-white/5 rounded">O(n²)</span>
        </div>
        <div className="flex justify-between items-center text-[10px] font-jetbrains text-on-surface-variant uppercase">
          <span>Space</span>
          <span className="text-[#10b981] px-1.5 py-0.5 bg-white/5 rounded">O(1)</span>
        </div>
        <div className="flex justify-between items-center text-[10px] font-jetbrains text-on-surface-variant uppercase mt-1">
          <span>Properties</span>
          <span className="text-white text-[9px] tracking-wide">Stable, In-place</span>
        </div>
      </div>
    </div>
  );
}
