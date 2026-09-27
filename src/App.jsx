import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import Visualizer from './components/Visualizer';
import Telemetry from './components/Telemetry';
import InfoPanel from './components/InfoPanel';

function App() {
  const [array, setArray] = useState([]);
  
  useEffect(() => {
    setArray(Array.from({ length: 64 }, () => Math.floor(Math.random() * 88) + 12));
  }, []);

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
              <span className="font-label text-xs font-bold text-on-surface uppercase tracking-wider">System: Ready</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="pt-16 flex w-full">
        <Sidebar />
        <main className="flex-1 w-full xl:pl-80 bg-background min-h-[calc(100vh-4rem)]">
          <div className="w-full p-space-md lg:p-space-lg flex flex-col gap-space-lg">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
              {/* Controls will go here or in sidebar for mobile? The HTML put controls in sidebar for Desktop. Let's assume Sidebar component handles the left panel. */}
              {/* Main Stage */}
              <div className="xl:col-span-12 2xl:col-span-12 flex flex-col gap-space-md">
                <Visualizer array={array} />
                <Telemetry />
                <InfoPanel />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
