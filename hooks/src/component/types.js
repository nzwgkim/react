

export default function Types() {
    // {   // hoisting for function
    //     printNo();        // no
    //     printNoAgain();   // no
    //     answer('love', printYes, printNo);  // yes
    //     calc('add', 3,4);
    //     calc('sub', 3,4);
    //     calc('prod', 3,4);        
    // }


    // {   // 3. property value shorthand
    //     const person1 = { name:'bob', age:29};
    //     const person2 = new Person('tom',31);
    //     // Constructor function
    //     function Person(name, age){
    //         // this  = {};
    //         this.name = name;
    //         this.age = age;
    //         // return this;
    //     }
    //     console.log(person1);   // {name: 'bob', age: 29}
    //     console.log(person2);   // Person {name: 'tom', age: 31}
    //     console.log('name' in person1); // true
    //     console.log('age' in person2);  // true
    // }
       
    // {   // class
    //     class Animal {
    //         speak() {
    //           return this;
    //         }
    //         static eat() {
    //           return this;
    //         }
    //       }
          
    //       let obj = new Animal();
    //       console.log(obj);         // the Animal object
    //       console.log(obj.speak()); // the Animal object
    //       let speak = obj.speak;
    //       console.log(speak()); // undefined
          
    //       console.log(Animal.eat()); // class Animal
    //       let eat = Animal.eat;
    //       console.log(eat()); // undefined
    // }

    //     showName('Woody');
    //     printAll('Mike', 'Jon', 'Roaan');

    // {   // That's why typescript is required.
    //     let text = 'hello';
    //     console.log(text.charAt(0));     // h
    //     console.log(`value = ${text}, type = ${typeof text}`);   // value = hello, type = string
    //     text = 1;
    //     console.log(`value = ${text}, type = ${typeof text}`);   // value = 1, type = number
    //     text = '4' + 6;
    //     console.log(`value = ${text}, type = ${typeof text}`);   // value = 46, type = string
    //     text = '4' - 6;
    //     console.log(`value = ${text}, type = ${typeof text}`);   // value = -2, type = number 
    //     text = '4a' - 6;
    //     console.log(`value = ${text}, type = ${typeof text}`);   // value = NaN, type = number
    //     text = '4' * '6';
    //     console.log(`value = ${text}, type = ${typeof text}`);   // value = 24, type = number
    //     console.log(text.charAt(0)); // Uncaught TypeError: text.charAt is not a function
    // }
 
    //     const elli = {name:'elli',age:20};
    //     elli.age = 30;

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

class Person{
    age;
    name;
    #money;
}


