// const Hello = ()=>{
//     <p>Hello</p>
// };

// export default Hello;

import World from './World';
import styles from './Hello.module.css';
import { useState } from 'react';
import { UserName } from './UserName';

export default function Hello(props){
    // let name = 'Mike';
    const [name,setName] = useState(props.name);
    const [age,setAge] = useState(props.age);
    const [msg,setMsg] = useState(props.age>19?'성인':'미성년');
    
    console.log(age);
    // useState는 배열을 반환한다. 
    // [ state 변수명, state를 바꿔주는 함수]


     // 두개 이상의 tag를 표현하고자 할때는 <> </> 빈 tag 혹은 <div> </div> div tag로 감싸야 한다.
    return (
        <div>  
            <World />
            <div className={styles.box}> from Hello</div>
            <div><h2>{name}({age}):{msg}</h2></div>
            <UserName name={name} />

            <div>
                <button onClick={()=>{
                    setName(name === 'Mike'?'Jane':'Mike');
                    setAge(age+1);
                    setMsg(age>19?'성인':'아동');
                }}>Click here</button>
            </div>
        </div>
    )
        
};