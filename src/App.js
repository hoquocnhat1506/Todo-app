import React from 'react';
import './App.css';
import BoxList from './components/BoxList';
import BoxInput from './components/BoxInput';


function App() {
  return (
    <div className="App">
      <h1>#todo</h1>
      <BoxList />
      <BoxInput />
    </div>
  );
}

export default App;
