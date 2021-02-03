const numbers = [3, 4, 5, 6, 7];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// by map function 
// function square(element) {
//     return element * element;
// }
// const square = x => x * x;

// const result = numbers.map(square);
const result = numbers.map(x => x * x);
// const result = numbers.map(function(element) {
//     return element * element;
// })

// console.log(result);
// filter function

const bigger = numbers.filter(x => x > 5);

const bigger2 = numbers.find(x => x > 3);
console.log(bigger2);