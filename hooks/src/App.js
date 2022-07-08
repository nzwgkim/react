import './App.css';
import {useState,useMemo} from 'react'

const hardCalculator=(number)=>{
  // consuming long time
  console.log('hard calculate number=',number);
  return number+10000;
}
const easyCalculator=(number)=>{
  // consuming short time
  console.log('easy calculate number=',number);
  return number+1;
}

function App() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  const hardSum = useMemo(()=>hardCalculator(hardNumber),[hardNumber]);
  const easySum = useMemo(()=>easyCalculator(easyNumber),[easyNumber]);
    
  return (
    <div>
      <h2> Hard Calculation</h2> 
      <input 
        type='number' 
        value={hardNumber}
        onChange={(e)=>{
          console.log(e.target.value);
          setHardNumber(parseInt(e.target.value));
        }} />
      <p> Hard Sum = {hardSum} </p>

      <h2> Easy Calculation</h2> 
      <input 
        type='number' 
        value={easyNumber} 
        onChange={(e)=>{
          setEasyNumber(parseInt(e.target.value));
        }} />      
      <p> Easy Sum = {easySum} </p>
    </div>
  );
}

export default App;
