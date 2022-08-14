async function getApple (){
    await setTimeout(()=>{},1000);
    return '🍎';
}
async function getBanana (){
    await setTimeout(()=>{},1500);
    return '🍌';
}
async function pickFruits_1(){
    console.log('pickFruits_1');
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `pickFruits_1: ${apple} + ${banana}`; 
} 

async function pickFruits_2(){
    console.log('pickFruits_2');
    const apple = await getApple();
    const banana = await getBanana();
    
    return `pickFruits_2: ${apple} + ${banana}`;
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
    pickFruits_1().then(console.log);
    pickFruits_2().then(console.log);
    // pickFruitsAll().then(console.log);
    // pickFruitsOne().then(console.log);
}