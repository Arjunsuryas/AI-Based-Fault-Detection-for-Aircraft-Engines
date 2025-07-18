import React from 'react';
import { useEngineData } from './hooks/useEngineData';
import { Dashboard } from './components/Dashboard';
import { LoadingSpinner } from './components/LoadingSpinner';

function App() {
  const { engines, faults, historicalData, isLoading } = useEngineData();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Dashboard engines={engines} faults={faults} />
  );
}

export default App;
