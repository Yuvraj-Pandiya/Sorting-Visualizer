import React from 'react';

export default function InfoPanel() {
  return (
    <div className="w-full bg-surface-container-lowest border-2 border-outline shadow-brutal overflow-hidden">
      <button className="w-full px-space-lg py-4 flex items-center justify-between bg-surface-container text-left hover:bg-primary-container transition-colors border-b-2 border-outline" type="button">
        <div className="flex items-center gap-space-sm">
          <span className="material-symbols-outlined text-secondary text-[22px] font-bold">school</span>
          <div>
            <h2 className="font-headline font-bold text-base uppercase tracking-tight text-on-surface">Algorithm Specifications &amp; Complexity Analysis</h2>
            <p className="font-code-notation text-xs text-on-surface-variant mt-0.5">Divide &amp; Conquer • Precision Instrumentation</p>
          </div>
        </div>
        <div className="flex items-center gap-space-xs text-on-surface font-label text-xs font-bold uppercase tracking-wider">
          <span>Collapse Details</span>
          <span className="material-symbols-outlined text-[20px] transition-transform duration-200 font-bold">expand_less</span>
        </div>
      </button>

      <div className="p-space-lg flex flex-col gap-space-md">
        <p className="font-body text-sm text-on-surface leading-relaxed max-w-4xl">
          Quick Sort selects a pivot element and re-orders the array such that all elements with values less than the pivot come before it, and greater after it. Sub-arrays are recursively sorted in-place using Lomuto's standard right-pivot partitioning.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-sm pt-space-xs">
          <div className="bg-surface-container-low p-space-sm border-2 border-outline shadow-brutal-sm flex flex-col gap-1">
            <span className="font-label text-[11px] font-bold uppercase tracking-wider text-on-surface">Best Time</span>
            <div className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 bg-primary-container text-on-surface font-code-notation text-xs font-bold border border-outline">O(n log n)</span>
            </div>
            <span className="font-code-notation text-[10px] text-on-surface-variant">Balanced partitions</span>
          </div>

          <div className="bg-surface-container-low p-space-sm border-2 border-outline shadow-brutal-sm flex flex-col gap-1">
            <span className="font-label text-[11px] font-bold uppercase tracking-wider text-on-surface">Average Time</span>
            <div className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 bg-tertiary text-on-tertiary font-code-notation text-xs font-bold border border-outline">Θ(n log n)</span>
            </div>
            <span className="font-code-notation text-[10px] text-on-surface-variant">Random distribution</span>
          </div>

          <div className="bg-surface-container-low p-space-sm border-2 border-outline shadow-brutal-sm flex flex-col gap-1">
            <span className="font-label text-[11px] font-bold uppercase tracking-wider text-on-surface">Worst Time</span>
            <div className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 bg-secondary text-white font-code-notation text-xs font-bold border border-outline">O(n²)</span>
            </div>
            <span className="font-code-notation text-[10px] text-on-surface-variant">Sorted w/ fixed pivot</span>
          </div>

          <div className="bg-surface-container-low p-space-sm border-2 border-outline shadow-brutal-sm flex flex-col gap-1">
            <span className="font-label text-[11px] font-bold uppercase tracking-wider text-on-surface">Space Complexity</span>
            <div className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 bg-surface-container-highest text-on-surface font-code-notation text-xs font-bold border border-outline">O(log n)</span>
            </div>
            <span className="font-code-notation text-[10px] text-on-surface-variant">Recursion call stack</span>
          </div>

          <div className="bg-surface-container-low p-space-sm border-2 border-outline shadow-brutal-sm flex flex-col gap-1">
            <span className="font-label text-[11px] font-bold uppercase tracking-wider text-on-surface">Stable Sort</span>
            <div className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 bg-surface text-on-surface font-code-notation text-xs font-bold border border-outline">No</span>
            </div>
            <span className="font-code-notation text-[10px] text-on-surface-variant">Relative order alters</span>
          </div>

          <div className="bg-surface-container-low p-space-sm border-2 border-outline shadow-brutal-sm flex flex-col gap-1">
            <span className="font-label text-[11px] font-bold uppercase tracking-wider text-on-surface">In-Place</span>
            <div className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 bg-primary text-on-primary font-code-notation text-xs font-bold border border-outline">Yes</span>
            </div>
            <span className="font-code-notation text-[10px] text-on-surface-variant">Aux &lt;= O(log n)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
