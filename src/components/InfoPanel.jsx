import React from 'react';

const algoMeta = {
  quick: {
    name: "Quick Sort (Lomuto Partition)",
    category: "Divide & Conquer",
    best: "O(n log n)", avg: "Θ(n log n)", worst: "O(n²)", space: "O(log n)", stable: "No", inPlace: "Yes",
    desc: "Quick Sort selects a pivot element and re-orders the array such that all elements with values less than the pivot come before it, and greater after it. Sub-arrays are recursively sorted in-place."
  },
  merge: {
    name: "Merge Sort (Out-of-place)", category: "Divide & Conquer",
    best: "O(n log n)", avg: "Θ(n log n)", worst: "O(n log n)", space: "O(n)", stable: "Yes", inPlace: "No",
    desc: "Merge Sort recursively divides the array into halves until singletons remain, then merges sorted halves back together in linear time, guaranteeing optimal O(n log n) comparisons in all cases."
  },
  heap: {
    name: "Heap Sort", category: "Comparison-based",
    best: "O(n log n)", avg: "Θ(n log n)", worst: "O(n log n)", space: "O(1)", stable: "No", inPlace: "Yes",
    desc: "Heap Sort constructs a binary max-heap from the array data and repeatedly extracts the root (maximum) element, swapping it to the end and sifting down the new root."
  },
  bubble: {
    name: "Bubble Sort", category: "Comparison-based",
    best: "O(n)", avg: "Θ(n²)", worst: "O(n²)", space: "O(1)", stable: "Yes", inPlace: "Yes",
    desc: "Bubble Sort steps through the list repeatedly, compares adjacent items, and swaps them if they are in the wrong order. Passes continue until no swaps are needed."
  },
  insertion: {
    name: "Insertion Sort", category: "Comparison-based",
    best: "O(n)", avg: "Θ(n²)", worst: "O(n²)", space: "O(1)", stable: "Yes", inPlace: "Yes",
    desc: "Insertion Sort iterates, consuming one input element each repetition, and growing a sorted output list by shifting larger elements to insert the current item into its correct slot."
  },
  selection: {
    name: "Selection Sort", category: "Comparison-based",
    best: "O(n²)", avg: "Θ(n²)", worst: "O(n²)", space: "O(1)", stable: "No", inPlace: "Yes",
    desc: "Selection Sort divides the input list into sorted and unsorted regions, repeatedly finding the minimum element from the unsorted segment and moving it to the end of the sorted segment."
  },
  shell: {
    name: "Shell Sort (Knuth Gaps)", category: "Comparison-based",
    best: "O(n log n)", avg: "Θ(n¹.³)", worst: "O(n²)", space: "O(1)", stable: "No", inPlace: "Yes",
    desc: "Shell Sort generalizes insertion sort by allowing the exchange of items that are far apart using a diminishing gap sequence, drastically cutting down shift distances."
  },
  comb: {
    name: "Comb Sort (Shrink Factor 1.3)", category: "Comparison-based",
    best: "O(n log n)", avg: "Θ(n²/2ᵖ)", worst: "O(n²)", space: "O(1)", stable: "No", inPlace: "Yes",
    desc: "Comb Sort improves on bubble sort by eliminating turtles (small values near the end of the list) using gaps larger than 1 that decrease by a shrink factor of 1.3 on each iteration."
  },
  radix: {
    name: "Radix Sort (LSD Base-10)", category: "Distribution-based",
    best: "O(nk)", avg: "Θ(nk)", worst: "O(nk)", space: "O(n + k)", stable: "Yes", inPlace: "No",
    desc: "Radix Sort avoids element comparisons altogether by distributing integers into buckets based on individual digits, starting from least significant digit (LSD) up to the most significant."
  },
  count: {
    name: "Counting Sort", category: "Non-comparison",
    best: "O(n + k)", avg: "Θ(n + k)", worst: "O(n + k)", space: "O(k)", stable: "Yes", inPlace: "No",
    desc: "Counting Sort tallies distinct key values into auxiliary frequency arrays and calculates positions directly through prefix sums, achieving linear execution time."
  }
};

export default function InfoPanel({ algoKey }) {
  const meta = algoMeta[algoKey] || algoMeta.quick;

  return (
    <div className="w-full bg-surface-container-lowest border-2 border-outline shadow-brutal overflow-hidden mb-8">
      <button className="w-full px-space-lg py-4 flex items-center justify-between bg-surface-container text-left hover:bg-primary-container transition-colors border-b-2 border-outline" type="button">
        <div className="flex items-center gap-space-sm">
          <span className="material-symbols-outlined text-secondary text-[22px] font-bold">school</span>
          <div>
            <h2 className="font-headline font-bold text-base uppercase tracking-tight text-on-surface">Algorithm Specifications &amp; Complexity Analysis — {meta.name}</h2>
            <p className="font-code-notation text-xs text-on-surface-variant mt-0.5">{meta.category} • Precision Instrumentation</p>
          </div>
        </div>
        <div className="flex items-center gap-space-xs text-on-surface font-label text-xs font-bold uppercase tracking-wider">
          <span>Collapse Details</span>
          <span className="material-symbols-outlined text-[20px] transition-transform duration-200 font-bold">expand_less</span>
        </div>
      </button>

      <div className="p-space-lg flex flex-col gap-space-md">
        <p className="font-body text-sm text-on-surface leading-relaxed max-w-4xl">
          {meta.desc}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-sm pt-space-xs">
          <div className="bg-surface-container-low p-space-sm border-2 border-outline shadow-brutal-sm flex flex-col gap-1">
            <span className="font-label text-[11px] font-bold uppercase tracking-wider text-on-surface">Best Time</span>
            <div className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 bg-primary-container text-on-surface font-code-notation text-xs font-bold border border-outline">{meta.best}</span>
            </div>
          </div>

          <div className="bg-surface-container-low p-space-sm border-2 border-outline shadow-brutal-sm flex flex-col gap-1">
            <span className="font-label text-[11px] font-bold uppercase tracking-wider text-on-surface">Average Time</span>
            <div className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 bg-tertiary text-on-tertiary font-code-notation text-xs font-bold border border-outline">{meta.avg}</span>
            </div>
          </div>

          <div className="bg-surface-container-low p-space-sm border-2 border-outline shadow-brutal-sm flex flex-col gap-1">
            <span className="font-label text-[11px] font-bold uppercase tracking-wider text-on-surface">Worst Time</span>
            <div className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 bg-secondary text-white font-code-notation text-xs font-bold border border-outline">{meta.worst}</span>
            </div>
          </div>

          <div className="bg-surface-container-low p-space-sm border-2 border-outline shadow-brutal-sm flex flex-col gap-1">
            <span className="font-label text-[11px] font-bold uppercase tracking-wider text-on-surface">Space Complexity</span>
            <div className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 bg-surface-container-highest text-on-surface font-code-notation text-xs font-bold border border-outline">{meta.space}</span>
            </div>
          </div>

          <div className="bg-surface-container-low p-space-sm border-2 border-outline shadow-brutal-sm flex flex-col gap-1">
            <span className="font-label text-[11px] font-bold uppercase tracking-wider text-on-surface">Stable Sort</span>
            <div className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 bg-surface text-on-surface font-code-notation text-xs font-bold border border-outline">{meta.stable}</span>
            </div>
          </div>

          <div className="bg-surface-container-low p-space-sm border-2 border-outline shadow-brutal-sm flex flex-col gap-1">
            <span className="font-label text-[11px] font-bold uppercase tracking-wider text-on-surface">In-Place</span>
            <div className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 bg-primary text-on-primary font-code-notation text-xs font-bold border border-outline">{meta.inPlace}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
