// const Hello = ()=>{
//     <p>Hello</p>
// };

// export default Hello;

import World from './World';
import styles from './Hello.module.css';

export default function Hello(){
    function showName(){
        console.log('Mike');
    }
    function showAge(){
        console.log(30);
    }
     // 두개 이상의 tag를 표현하고자 할때는 <> </> 빈 tag 혹은 <div> </div> div tag로 감싸야 한다.
    return (
        <div>  
            <h1 style={{
                color:'#f05',
                borderRight:"30px solid #000",
                marginBottom:'50px',
                opacity:1,
            }}>Hello</h1>
            <World />
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
        </div>
    )
        
};