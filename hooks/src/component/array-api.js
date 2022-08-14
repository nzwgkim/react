'use strict';
export default function Arrays(){
    console.clear();
    {   // 1.declaration
// const foods=['🍕', '🍔', '🍟'];
// foods.forEach(i=>{console.log(i)});
// // push: add an item to the end
// foods.push('🌭', '🍿');
// console.log(foods);         // (5) ['🍕', '🍔', '🍟', '🌭', '🍿']
// // pop: remove an item from the end
// foods.pop();
// foods.pop();
// console.log(foods);         // (3) ['🍕', '🍔', '🍟']
// // unshift: add an item to the beginning
// foods.unshift('🍖','🥩');
// console.log(foods);         // (5) ['🍖', '🥩', '🍕', '🍔', '🍟']
// // shift: remove an item from the beginning
// foods.shift();
// console.log(foods);         // (4) ['🥩', '🍕', '🍔', '🍟']
// // note! unshift and shift are much slower than pop and push.

// // slice: remove an item by index position.
// foods.splice(1,2); 
// console.log(foods);         // (2) ['🥩', '🍟']

// //combine two arrays
// const friuts = ['🍊','🍓','🍅'];
// const dinner = foods.concat(friuts);
// console.log(dinner);        // (5) ['🥩', '🍟', '🍊', '🍓', '🍅']
// console.log(dinner.indexOf('🍊'));      // 2
// console.log(dinner.includes('🍊'));     // true
    }
    {
// make a string
const fruits = ['banana', 'apple', 'cherry'];
const resString = fruits.join();
console.log(resString);             // banana,apple,cherry
// make an array
const resArray = resString.split(',');
console.log(resArray);              // (3) ['banana', 'apple', 'cherry']
// sort by descendant
const arrNum = [2,1,5,3,4];
arrNum.reverse();
console.log(arrNum);                // (5) [4, 3, 5, 1, 2]
// 04. make new array without the first two elements
const sliceArr = arrNum.slice(2,5); 
console.log(sliceArr);              // (3) [5, 1, 2]
console.log(arrNum);                // (5) [4, 3, 5, 1, 2]

class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];

  // Q5. find a student with the score 90
{
    const res = students.find(student => student.score === 90);
    console.log(res);
}

// Q6. make an array of enrolled students
{
    const enr = students.filter(student => student.enrolled );
    console.log(enr);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const res = students.map(student => student.score);
    console.log(res);
}

// Q8. check if there is a student with the score lower than 50
{
    const resSome = students.some(student => student.score < 50 );
    console.log(`some:${resSome}`);
    const resEvery = students.every(student => student.score >= 50 );
    console.log(`resEvery:${resEvery}`);
}

// Q9. compute students' average score
{
    const res = students.reduce((prev,curr)=>prev+curr.score,0);
    console.log(res/students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const res = students
    .map(student=>student.score)
    .filter(score=>score>70)
    .join();
    console.log(res);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const res = students
    .map(student=>student.score)
    .sort((a,b)=>a-b)
    .join();
    console.log(res);
}
    }
}