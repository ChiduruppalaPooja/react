import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import AppRouter from './Routes';
import ThemeProvider from './theme';
import ReactErrorBoundary from './components/common/ReactErrorBoundary';

function App() {
  
  return (
    <div className="App">
      <ThemeProvider>
        <ReactErrorBoundary>
          <AppRouter />
        </ReactErrorBoundary>
     </ThemeProvider>
    </div>
  );
}

export default App;
