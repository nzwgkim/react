import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [count, setCount] = useState(1);
  const handleCountUpdate = ()=>{
    setCount(count+1);
  };

  // For evry rendering, called... 
  useEffect(()=>{
    console.log("Rendering...");
  });

  return (
    <div className="App">
      <button onClick={handleCountUpdate} > Update </button>
      <span> count: {count} </span>
    </div>
  );
}

export default App;
