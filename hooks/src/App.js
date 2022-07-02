import './App.css';
import React, {useState, useEffect} from 'react';
import Timer from './component/Timer';

function App() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div className="App">
      
      <button onClick={()=>setShowTimer(!showTimer)}> Toggle </button>
      {showTimer && <Timer />}
    </div>
  );
}

export default App;
