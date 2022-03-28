import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import ThemeBtn from './component/ThemeBtn';
import ProgressContextProvider from './contexts/ProgressContext';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div>
      <ThemeContextProvider>
        <ProgressContextProvider>
          <Navbar />
          <ThemeBtn/>
        </ProgressContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
