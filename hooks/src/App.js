import './App.css';
import React from 'react'

function App() {

  // // 1. Promise
  // // When new Promise is created, the excutor runs automatically. 
  // // 2초 가량의 시간이 소요된 이후, ellie라는 결과물을 성공적으로 return하는 promise
  // const promise = new Promise((resolve, reject)=>{
  //   // doing some heavy work such as network communication, reading files
  //   console.log('Doing somthing... ');
  //   setTimeout(()=>{      
  //     // resolve('ellie');
  //     reject(new Error('no Network'));// Error: JS가 제공하는 object 
  //   },10000);
  // });


  // // 2. Consumers: then, catch를 통해 결과를 받아올 수 있음 finally는 무조건 실행
  // promise //
  //   .then(value => { console.log('value= ', value); })
  //   .catch(error => console.log('Catched:', error))
  //   .finally(() => console.log('Finally...'));

// // 3. promise chaining
//   const fetchPromise = new Promise((resolve, reject) => {
//     console.log('fetchPromise start...');
//     setTimeout(() => resolve(1), 1000);
//   })

//   fetchPromise//
//     .then(num => num * 2)
//     .then(num => num * 5)
//     .then(num => new Promise((resolve, reject) => setTimeout(() => resolve(num - 1), 1000)))
//     .then(num => console.log(num));


    // 4. error handling
  const getHen = () =>
    new Promise((resolve, reject) => setTimeout(() => { resolve('🍗') }, 1000));
  // getHen().then(msg => console.log(msg));

  const getEgg = (hen) =>
    new Promise((resolve, reject) => setTimeout(() => {
      resolve(`${hen} produces an egg!`)
      //reject(`No more ${hen}`)
    }, 1000));
  // getEgg('A-->').then(msg => console.log(msg)).catch(console.log);
  // getEgg('B-->').then(msg => console.log(msg)).catch(console.log);
  // getEgg('C-->').then(msg => console.log(msg)).catch(console.log);
  // getEgg('D-->').then(msg => console.log(msg)).catch(console.log);

  const cook = (material) =>
    new Promise((resolve, reject) => setTimeout(() => { resolve(`${material} Cooked!`) }, 1000));
  // cook('An egg-->').then(msg => console.log(msg));


  getHen()//
    .then(getEgg).catch(()=>{ return '🍔'})
    .then(cook)
    .then(console.log)
    .catch(console.log);



  return (
    <div>
   
    </div>
  );
}

export default App;