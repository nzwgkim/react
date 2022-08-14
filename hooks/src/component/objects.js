

export default function Objects(){
    console.clear(); 
    {   // clone: 복사
        const fruit1 = {color:'red', size:'big'};
        const fruit2 = {color:'white'};

        const frults = Object.assign({}, fruit1, fruit2);
        console.log(frults);    // {color: 'white', size: 'big'}
    }
}

