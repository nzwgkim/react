async function getApple (){
    await setTimeout(()=>{},1000);
    return '🍎';
}
async function getBanana (){
    await setTimeout(()=>{},1500);
    return '🍌';
}
async function pickFruits(){
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`; 
} 

function pickFruitsAll()
{
    return Promise.all([getApple(), getBanana()]).then(fruits=>{
        console.log(`pickFruitsAll: ${fruits}`);
        return fruits.join('---');
    })
}

function pickFruitsOne(){
    console.log('pickFruitsOne:');
    return Promise.race([getApple(), getBanana()]);
}


export default function Fruits(){
    pickFruits().then(console.log);
    pickFruitsAll().then(console.log);    
    pickFruitsOne().then(console.log);
}