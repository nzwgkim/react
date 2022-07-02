import React, {useEffect} from "react";

const Timer=(props)=>{
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log('timer working');
        },1000);

        return ()=>{
            clearInterval(timer);
            console.log('clear...');
        };
    },[]);
    return (
        <div> Watch Timer</div>
    );
};


export default Timer
