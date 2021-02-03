// global scope
let bonus = 20;

function sum(first, second) {
    // local scope
    let result = first + second + bonus;
    return result;
}
const output = sum(3, 7);
console.log(output);