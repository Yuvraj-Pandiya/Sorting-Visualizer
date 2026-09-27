# Sorting Algorithm Visualizer — Bauhaus Edition

![Screenshot Placeholder](https://via.placeholder.com/1200x600.png?text=Sorting+Visualizer+Screenshot)

**Live Demo:** [https://yuvraj-pandiya.github.io/Sorting-Visualizer/](https://yuvraj-pandiya.github.io/Sorting-Visualizer/)

An interactive, high-performance Sorting Algorithm Visualizer built with React and Tailwind CSS. It features a unique Neo-Brutalist Bauhaus design and provides deep insights into the internal workings of 10 different sorting algorithms through a generator-based playback engine.

## Features
- **10 Algorithms Supported:** 
  - *Comparison-based:* Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, Heap Sort, Shell Sort, Comb Sort
  - *Non-comparison-based:* Radix Sort, Counting Sort
- **Generator-Based Playback Engine:** Yields atomic steps (compare, swap, overwrite, pivot, range) allowing precise step-by-step animation without blocking the main thread.
- **Dynamic Speed & Array Size:** Adjust sorting speed and dataset size mid-run.
- **Live Telemetry:** Tracks comparisons, array swaps/writes, and elapsed wall time dynamically.
- **Neo-Brutalist Bauhaus Design:** A striking visual aesthetic inspired by modern UI design systems.
- **Programmatic Verification:** Verifies the array is correctly sorted upon completion.

## Tech Stack
- React 18
- Vite
- Tailwind CSS v3
- 100% Static HTML/JS (Deployed on GitHub Pages)

## Local Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:5173` in your browser.

## Deployment (GitHub Pages)

This project is configured to automatically build and deploy to GitHub Pages via GitHub Actions whenever changes are pushed to the `main` branch. 

**IMPORTANT: Enable GitHub Pages in your repository settings:**
1. Go to your repository on GitHub.
2. Navigate to **Settings → Pages**.
3. Under **Source**, select **GitHub Actions**.
4. The `.github/workflows/deploy.yml` workflow will handle the rest.
