import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const inputRef = useRef();
  useEffect(()=>{
    inputRef.current.focus();
    // console.log(inputRef); 
  },[]);

  const login = ()=>{
    // alert('Welcome ${inputRef.current.value}!');
    console.log(inputRef.current);
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type='text' placeholder='username' />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default App;
