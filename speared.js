const maxValue = Math.max(20, 25, 40, 55, 70, 100);
// console.log(maxValue);

const numbers = [20, 30, 40, 55, 73, 87, 99]
const largest = Math.max(...numbers);
// console.log(largest);


const number = [54, 658, 843, 848, 63, 83]
const number2 = [...number];
number.push(555);
number2.push(666);
console.log(number);
console.log(number2)