// const Hello = ()=>{
//     <p>Hello</p>
// };

// export default Hello;

import World from './World';
import styles from './Hello.module.css';
import { useState } from 'react';

export default function Hello(){
    // let name = 'Mike';
    const [name,setName] = useState('Mike');  
    // useState는 배열을 반환한다. 
    // [ state 변수명, state를 바꿔주는 함수]


    function changeName(){
        setName(name === 'Mike'?'Jane':'Mike');
    }
    function showName(){
        console.log('Mike');
    }
    function showAge(){
        console.log(30);
    }
     // 두개 이상의 tag를 표현하고자 할때는 <> </> 빈 tag 혹은 <div> </div> div tag로 감싸야 한다.
    return (
        <div>  
            <World />
            <div className={styles.box}> from Hello</div>
            <button onClick={showName}>Show Name</button>
            <button onClick={()=>{
                    showAge();
                }
            }>Show age</button>
            <input type='text' onChange={(e)=>{
                console.log(e.target.value);
            }}></input>

            <div>
                <button onClick={changeName}>{name}</button>
            </div>
        </div>
    )
        
};