// Task 1. Variables & Operators
const firstName = "Anna";
const age = 20;
const isStudent = true;

console.log("--- Variables and their types ---");
console.log(firstName, "->", typeof firstName);
console.log(age, "->", typeof age);
console.log(isStudent, "->", typeof isStudent);

let a = 15;
let b = 4;

console.log("--- Arithmetic (a = " + a + ", b = " + b + ") ---");
console.log("Addition:", a + b);              // 19
console.log("Subtraction:", a - b);           // 11
console.log("Multiplication:", a * b);        // 60
console.log("Division:", a / b);              // 3.75
console.log("Remainder:", a % b);             // 3
console.log("Exponentiation:", a ** b);       // 50625

const lastName = "Smith";

const fullName = firstName + " " + lastName;

const info = `${fullName}, age: ${age}`;

console.log("--- Concatenation ---");
console.log("Full name:", fullName);
console.log("Info:", info);
