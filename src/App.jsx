import React, { useState, useEffect, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import Visualizer from './components/Visualizer';
import Telemetry from './components/Telemetry';
import InfoPanel from './components/InfoPanel';
import { useSortPlayer } from './hooks/useSortPlayer';
import { algorithms } from './algorithms';

function generateArrayData(size, preset) {
  const arr = [];
  if (preset === 'random') {
    for (let i = 0; i < size; i++) arr.push(Math.floor(Math.random() * 88) + 12);
  } else if (preset === 'nearlySorted') {
    for (let i = 0; i < size; i++) arr.push(Math.floor((i / size) * 88) + 12);
    const swaps = Math.max(2, Math.floor(size * 0.1));
    for (let s = 0; s < swaps; s++) {
      const idxA = Math.floor(Math.random() * size);
      const idxB = Math.floor(Math.random() * size);
      const tmp = arr[idxA];
      arr[idxA] = arr[idxB];
      arr[idxB] = tmp;
    }
  } else if (preset === 'reversed') {
    for (let i = 0; i < size; i++) arr.push(Math.floor(((size - i) / size) * 88) + 12);
  } else if (preset === 'fewUnique') {
    const distinct = [20, 42, 65, 88, 98];
    for (let i = 0; i < size; i++) arr.push(distinct[i % distinct.length]);
    for (let i = size - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  return arr;
}

function App() {
  const [size, setSize] = useState(64);
  const [speedStr, setSpeedStr] = useState("25");
  const [preset, setPreset] = useState('random');
  const [algoKey, setAlgoKey] = useState('quick');
  const [initialArray, setInitialArray] = useState(() => generateArrayData(64, 'random'));

  const handleGenerate = useCallback(() => {
    const newArr = generateArrayData(size, preset);
    setInitialArray(newArr);
    reset(newArr);
  }, [size, preset]);

  // Handle manual size changes
  useEffect(() => {
    handleGenerate();
  }, [size, preset, handleGenerate]);

  const player = useSortPlayer(initialArray, algorithms[algoKey], speedStr);
  const { array, activeIndices, comparisons, swaps, elapsedTime, isRunning, isSorted, play, reset } = player;

  return (
    <div className="bg-background font-body text-body-md text-on-surface antialiased min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-surface border-b-2 border-outline">
        <div className="w-full px-space-lg h-full flex items-center justify-between">
          <div className="flex items-center gap-space-md">
            <div className="flex items-center gap-space-sm">
              <span className="font-headline font-bold text-lg text-on-surface tracking-tight uppercase">SortFlow</span>
              <span className="font-code-notation text-[11px] font-bold text-on-surface bg-primary-container px-2 py-0.5 border border-outline shadow-brutal-sm rounded-DEFAULT uppercase">Bauhaus VZ</span>
            </div>
            <div className="hidden sm:flex items-center gap-space-xs pl-space-sm border-l-2 border-outline ml-2">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-secondary border border-outline animate-pulse"></span>
              <span className="font-label text-xs font-bold text-on-surface uppercase tracking-wider">
                System: {isRunning ? 'Running' : (isSorted ? 'Done' : 'Ready')}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="pt-16 flex w-full">
        <Sidebar 
          size={size} setSize={setSize}
          speed={speedStr} setSpeed={setSpeedStr}
          preset={preset} setPreset={setPreset}
          algoKey={algoKey} setAlgoKey={setAlgoKey}
          onGenerate={handleGenerate}
          onStart={play}
          onStop={() => reset(initialArray)}
          isRunning={isRunning}
        />
        <main className="flex-1 w-full xl:pl-80 bg-background min-h-[calc(100vh-4rem)]">
          <div className="w-full p-space-md lg:p-space-lg flex flex-col gap-space-lg">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
              <div className="xl:col-span-12 2xl:col-span-12 flex flex-col gap-space-md">
                <Visualizer array={array} activeIndices={activeIndices} algoKey={algoKey} isRunning={isRunning} isSorted={isSorted} />
                <Telemetry comparisons={comparisons} swaps={swaps} elapsedTime={elapsedTime} algoKey={algoKey} />
                <InfoPanel algoKey={algoKey} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
