import './App.css';
import React from 'react'
import { Bake } from './async/bake';
import  Fruits from './async/fruits';

function App() {

  return (
    <div>
      <Bake />
      <Fruits />   
    </div>
  );
}

export default App;