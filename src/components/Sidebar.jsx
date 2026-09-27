import React from 'react';

export default function Sidebar() {
  return (
    <aside className="hidden xl:block fixed left-0 top-16 bottom-0 w-80 bg-surface border-r-2 border-outline z-40 overflow-y-auto">
      <div className="p-space-lg flex flex-col gap-space-lg h-full">
        {/* Main Control Panel */}
        <div className="bg-surface-container-lowest p-space-md border-2 border-outline shadow-brutal flex flex-col gap-space-md">
          <div className="flex items-center justify-between border-b-2 border-outline pb-2.5">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[20px] text-on-surface font-bold">tune</span>
              <span className="font-headline font-bold text-sm uppercase tracking-wider text-on-surface">Configuration</span>
            </div>
          </div>
          
          {/* Algorithm Selector */}
          <div className="flex flex-col gap-1.5">
            <label className="flex items-center justify-between font-label text-xs font-bold uppercase tracking-wider text-on-surface">
              <span>Algorithm</span>
            </label>
            <div className="relative">
              <select className="w-full appearance-none bg-surface-container text-on-surface font-headline font-semibold text-xs px-3 py-2.5 border-2 border-outline shadow-brutal-sm focus:outline-none focus:bg-surface-container-lowest cursor-pointer transition-all">
                <optgroup className="bg-surface text-on-surface font-bold" label="Comparison-based">
                  <option value="bubble">Bubble Sort</option>
                  <option value="selection">Selection Sort</option>
                  <option value="insertion">Insertion Sort</option>
                  <option value="merge">Merge Sort</option>
                  <option value="quick">Quick Sort</option>
                  <option value="heap">Heap Sort</option>
                  <option value="shell">Shell Sort</option>
                  <option value="comb">Comb Sort</option>
                </optgroup>
                <optgroup className="bg-surface text-on-surface font-bold" label="Non-comparison-based">
                  <option value="radix">Radix Sort</option>
                  <option value="count">Count Sort</option>
                </optgroup>
              </select>
              <span className="material-symbols-outlined text-[20px] text-on-surface pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 font-bold">expand_more</span>
            </div>
          </div>

          {/* Array Size Slider */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between font-label text-xs font-bold uppercase tracking-wider">
              <span className="text-on-surface">Array Size</span>
              <span className="px-2 py-0.5 border-2 border-outline bg-surface-container text-on-surface font-code-notation text-xs font-bold shadow-brutal-sm">64 items</span>
            </div>
            <div className="relative flex items-center pt-1">
              <input type="range" min="10" max="200" defaultValue="64" className="w-full h-2.5 bg-surface-container-high border-2 border-outline appearance-none cursor-pointer accent-primary focus:outline-none" />
            </div>
          </div>

          {/* Speed Slider */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between font-label text-xs font-bold uppercase tracking-wider">
              <span className="text-on-surface">Delay (Speed)</span>
              <span className="px-2 py-0.5 border-2 border-outline bg-primary-container text-on-surface font-code-notation text-xs font-bold shadow-brutal-sm">25 ms</span>
            </div>
            <div className="relative flex items-center pt-1">
              <input type="range" min="2" max="150" defaultValue="25" className="w-full h-2.5 bg-surface-container-high border-2 border-outline appearance-none cursor-pointer accent-secondary focus:outline-none" />
            </div>
          </div>

          {/* Array Preset */}
          <div className="flex flex-col gap-1.5">
            <label className="font-label text-xs font-bold uppercase tracking-wider text-on-surface">Generation Preset</label>
            <div className="flex flex-col gap-space-xs">
              <div className="relative w-full">
                <select className="w-full appearance-none bg-surface-container text-on-surface font-headline font-semibold text-xs px-3 py-2 border-2 border-outline shadow-brutal-sm focus:outline-none cursor-pointer">
                  <option value="random">Random</option>
                  <option value="nearlySorted">Nearly Sorted</option>
                  <option value="reversed">Reversed</option>
                  <option value="fewUnique">Few Unique</option>
                </select>
                <span className="material-symbols-outlined text-[18px] text-on-surface pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 font-bold">expand_more</span>
              </div>
              <button className="w-full flex items-center justify-center gap-space-xs px-space-sm py-2 bg-surface-container-low hover:bg-surface-bright text-on-surface font-label text-xs font-bold uppercase tracking-wider border-2 border-outline shadow-brutal-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all">
                <span className="material-symbols-outlined text-[16px] text-tertiary font-bold">casino</span>
                <span>Regenerate Array</span>
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto pt-space-xs flex flex-col gap-2">
          <button className="w-full flex items-center justify-center gap-space-xs px-space-md py-3 bg-primary-container text-on-surface hover:bg-yellow-400 font-headline font-bold text-sm uppercase tracking-wider border-2 border-outline shadow-brutal transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-brutal-sm">
            <span className="material-symbols-outlined text-[22px] font-bold" style={{fontVariationSettings: "'FILL' 1"}}>play_arrow</span>
            <span>Start Sorting</span>
          </button>
          <button className="w-full flex items-center justify-center gap-space-xs px-space-md py-2.5 bg-secondary text-white hover:bg-red-700 font-headline font-bold text-xs uppercase tracking-wider border-2 border-outline shadow-brutal transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-brutal-sm">
            <span className="material-symbols-outlined text-[18px] font-bold">stop_circle</span>
            <span>Stop / Reset</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
