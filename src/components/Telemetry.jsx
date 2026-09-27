import React from 'react';

export default function Telemetry({ comparisons, swaps, elapsedTime }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-sm sm:gap-space-md">
      <div className="bg-surface-container-lowest p-space-md border-2 border-outline shadow-brutal flex flex-col gap-1">
        <div className="flex items-center justify-between text-on-surface">
          <span className="font-label text-xs font-bold uppercase tracking-wider">Comparisons</span>
          <span className="material-symbols-outlined text-[18px] text-on-surface font-bold">compare_arrows</span>
        </div>
        <div className="flex items-baseline justify-between mt-1">
          <span className="font-headline font-bold text-2xl text-on-surface">{comparisons}</span>
          <span className="font-code-notation text-xs font-bold text-on-surface-variant">CMP</span>
        </div>
        <span className="font-code-notation text-[11px] text-on-surface-variant">Total element checks</span>
      </div>
      
      <div className="bg-surface-container-lowest p-space-md border-2 border-outline shadow-brutal flex flex-col gap-1">
        <div className="flex items-center justify-between text-on-surface">
          <span className="font-label text-xs font-bold uppercase tracking-wider">Array Swaps</span>
          <span className="material-symbols-outlined text-[18px] text-secondary font-bold">swap_horiz</span>
        </div>
        <div className="flex items-baseline justify-between mt-1">
          <span className="font-headline font-bold text-2xl text-secondary">{swaps}</span>
          <span className="font-code-notation text-xs font-bold text-on-surface-variant">SWP</span>
        </div>
        <span className="font-code-notation text-[11px] text-on-surface-variant">Displacements / writes</span>
      </div>
      
      <div className="bg-surface-container-lowest p-space-md border-2 border-outline shadow-brutal flex flex-col gap-1">
        <div className="flex items-center justify-between text-on-surface">
          <span className="font-label text-xs font-bold uppercase tracking-wider">Elapsed Time</span>
          <span className="material-symbols-outlined text-[18px] text-tertiary font-bold">timer</span>
        </div>
        <div className="flex items-baseline justify-between mt-1">
          <span className="font-code-notation font-bold text-2xl text-tertiary">{elapsedTime.toFixed(2)}s</span>
          <span className="font-code-notation text-xs font-bold text-on-surface-variant">SEC</span>
        </div>
        <span className="font-code-notation text-[11px] text-on-surface-variant">Real-world wall time</span>
      </div>
      
      <div className="bg-surface-container-lowest p-space-md border-2 border-outline shadow-brutal flex flex-col gap-1">
        <div className="flex items-center justify-between text-on-surface">
          <span className="font-label text-xs font-bold uppercase tracking-wider">Visualizer API</span>
          <span className="material-symbols-outlined text-[18px] text-on-surface font-bold">account_tree</span>
        </div>
        <div className="flex items-baseline justify-between mt-1">
          <span className="font-code-notation font-bold text-2xl text-on-surface">OK</span>
          <span className="font-code-notation text-xs font-bold text-secondary">Active</span>
        </div>
        <span className="font-code-notation text-[11px] text-on-surface-variant">Engine hooks hooked</span>
      </div>
    </div>
  );
}
