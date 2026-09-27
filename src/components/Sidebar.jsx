import React from 'react';

export default function Sidebar() {
  return (
    <div className="w-full md:w-[320px] bg-[#0f172a]/65 backdrop-blur-[16px] border-b md:border-b-0 md:border-r border-white/10 p-6 flex flex-col gap-6 z-20 shrink-0 h-auto md:h-screen overflow-y-auto">
      <div>
        <h1 className="text-xl font-bold tracking-tight mb-1 text-primary">Algorithmic Prism</h1>
        <p className="text-sm text-on-surface-variant">Interactive Sorting Visualizer</p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Controls group */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-jetbrains font-medium text-on-surface-variant uppercase tracking-widest">Algorithm</label>
          <select className="bg-[#1e293b]/85 border border-white/10 rounded-lg p-2.5 text-sm outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-all">
            <optgroup label="Comparison-based">
              <option value="bubble">Bubble Sort</option>
              <option value="selection">Selection Sort</option>
              <option value="insertion">Insertion Sort</option>
              <option value="merge">Merge Sort</option>
              <option value="quick">Quick Sort</option>
              <option value="heap">Heap Sort</option>
              <option value="shell">Shell Sort</option>
              <option value="comb">Comb Sort</option>
            </optgroup>
            <optgroup label="Non-comparison-based">
              <option value="radix">Radix Sort</option>
              <option value="count">Count Sort</option>
            </optgroup>
          </select>
        </div>

        {/* Array Generation */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-jetbrains font-medium text-on-surface-variant uppercase tracking-widest">Dataset</label>
          <select className="bg-[#1e293b]/85 border border-white/10 rounded-lg p-2.5 text-sm outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-all">
            <option value="random">Random</option>
            <option value="nearly-sorted">Nearly Sorted</option>
            <option value="reversed">Reversed</option>
            <option value="few-unique">Few Unique</option>
          </select>
          <button className="mt-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg py-2 text-sm transition-colors text-on-surface">
            Generate New Array
          </button>
        </div>

        {/* Sliders */}
        <div className="flex flex-col gap-5 mt-2">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label className="text-xs font-jetbrains font-medium text-on-surface-variant uppercase tracking-widest">Array Size</label>
              <span className="text-xs font-jetbrains text-tertiary">50</span>
            </div>
            <input type="range" min="10" max="200" defaultValue="50" className="w-full h-1 bg-white/10 rounded-full appearance-none accent-tertiary outline-none" />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label className="text-xs font-jetbrains font-medium text-on-surface-variant uppercase tracking-widest">Speed</label>
              <span className="text-xs font-jetbrains text-tertiary">50%</span>
            </div>
            <input type="range" min="1" max="100" defaultValue="50" className="w-full h-1 bg-white/10 rounded-full appearance-none accent-tertiary outline-none" />
          </div>
        </div>
      </div>

      <div className="mt-auto pt-6 flex flex-col gap-3">
        <button className="w-full bg-gradient-to-r from-primary to-[#059669] hover:from-[#059669] hover:to-[#047857] text-[#022c22] font-semibold rounded-lg py-3 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all">
          Start Sort
        </button>
        <button className="w-full bg-transparent border border-error/40 hover:bg-error/15 text-error rounded-lg py-3 font-medium transition-all">
          Stop / Reset
        </button>
      </div>
    </div>
  );
}
