export default function Types() {
    printNo();        // no
    printNoAgain();   // no
    answer('love', printYes, printNo);  // yes
    calc('add', 3,4);
    calc('sub', 3,4);
    calc('prod', 3,4);
       



    //     showName('Woody');
    //     printAll('Mike', 'Jon', 'Roaan');

    //     let text = 'hello';
    //     console.log(text.charAt(0));
    //     console.log(`value = ${text}, type = ${typeof text}`);
    //     text = 1;
    //     console.log(`value = ${text}, type = ${typeof text}`);
    //     text = '4' + 6;
    //     console.log(`value = ${text}, type = ${typeof text}`);
    //     text = '4' - 6;
    //     console.log(`value = ${text}, type = ${typeof text}`);    
    //     text = '4a' - 6;
    //     console.log(`value = ${text}, type = ${typeof text}`);
    //     text = '4' * '6';
    //     console.log(`value = ${text}, type = ${typeof text}`);
    //     console.log(text.charAt(0));

    //     const elli = {name:'elli',age:20};
    //     elli.age = 30;
    // // h
    // // value = hello, type = string
    // // value = 1, type = number
    // // value = 46, type = string
    // // value = -2, type = number
    // // value = NaN, type = number
    // // value = 24, type = number

}

function showName(msg, from = 'Busan') {
    const name = msg;
    const home = from;
    console.log(`${name} from ${home}`);    // Woody from Busan
}

function printAll(...arg) {
    for (let i = 0; i < arg.length; i++) {
        console.log(arg[i]);
    }
    for (const i of arg) {
        console.log(i);
    }
    arg.forEach(i => console.log(i));
}



const printYes = function printY() {
    console.log('yes');
}
const printNo = () => { // anonymous function
    console.log('no');
}
const printNoAgain = printNo;

function answer(myword, sayYes, sayNo){
    if (myword == 'love') {
        sayYes();
    } else {
        sayNo();
    }
}

const plusing = (a,b)=>a+b;
const minusing = (a,b)=>a-b;

function calc(cmd, a, b)
{
    let oper;
    switch(cmd){
        case 'add':
            oper = plusing(a,b);
            break;
        case 'sub':
            oper = minusing(a,b);
            break;
        default:
            oper = 'None';
            break;
    }
    console.log(`${oper}`);
}