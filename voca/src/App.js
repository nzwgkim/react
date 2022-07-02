import './App.css';
import Day from './component/Day';
import DayList from './component/DayList';
import Header from './component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmptyPage from './component/EmptyPage';
import { useEffect } from 'react';

const heavyWork=()=>{
  console.log('엄청 무거운 작업');
  return ['홍길동','성춘향'];
};

function App() {
  const [names, setNames] = useState(()=>{
    return heavyWork();
  });
  const [input, setInput] = useState('');
  const handleUpload = () =>{
    setNames((prevState)=>{
      return [input, ...prevState];
    };
  }
  useEffect(()=>{},[names]);  // dependancy array

  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="*" element={<EmptyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}