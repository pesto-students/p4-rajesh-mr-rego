import React from 'react';
import './App.css';

import { Canvas, Navbar } from './components';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Canvas />
      </div>
    </div>
  );
}

export default App;
