import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Visualizer from './components/Visualizer';
import Telemetry from './components/Telemetry';

function App() {
  // Dummy data for UI shell
  const [array, setArray] = useState(Array.from({ length: 50 }, () => Math.floor(Math.random() * 96) + 5));

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-background text-on-background font-inter overflow-hidden relative">
      {/* Background grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}></div>
      
      <Sidebar />
      <div className="flex-1 flex flex-col p-4 md:p-6 z-10 w-full md:w-[calc(100%-320px)] h-screen overflow-y-auto">
        <Visualizer array={array} />
        <Telemetry />
      </div>
    </div>
  );
}

export default App;
