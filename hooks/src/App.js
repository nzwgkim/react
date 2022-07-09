import './App.css';
import {useState, useReducer} from 'react'

const ACTION_TYPE = {
  deposit: 'deposit',
  withdraw:'withdraw',
};

const reducer = (state, action)=>{
  console.log("[reducer]", state, action);
  switch (action.type) {
    case ACTION_TYPE.deposit:
      return state+action.payload;
    case ACTION_TYPE.withdraw:
      return state-action.payload;
    default:
      return state;
  }
};

function App() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer,0);

  return (
    <div>
      <p> Satement: {money} </p>
      <input
        type='number'
        value={number}
        step='1000' 
        onChange={(e)=>setNumber(parseInt(e.target.value))} 
      />;
      <button 
        onClick={()=>{
          if(number>0)
            dispatch({type:ACTION_TYPE.deposit, payload:number} )}}
      >
        DEPOSIT
      </button>
      <button 
        onClick={()=>{
          if(number>0)
            dispatch({type:ACTION_TYPE.withdraw, payload:number} )}}
      >
        WITHDRAW
      </button> 
    </div>
  );
}

export default App;
