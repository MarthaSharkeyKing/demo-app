import React from 'react';
import Counter from './features/counter';
import PhotoViewer from './features/photoViewer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <PhotoViewer />
      </header>
    </div>
  );
}

export default App;
