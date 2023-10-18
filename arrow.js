const add = () => {
    const a = 10;
    const b = 20;
    const total = a + b;
    const agv = total / 2
    return agv;
}
const avgValue = add();
console.log(avgValue);

// Another example

const multiply = (a, b) => a * b;
console.log("Multiply", multiply(10, 5))