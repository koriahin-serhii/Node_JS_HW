"use strict";
// Task 1
function greetUser(userName) {
    console.log(`Hello, ${userName}!`);
}
greetUser('Bob');
function printPersonInfo(person) {
    console.log(`Name: ${person.name}, age: ${person.age}, city: ${person.city}`);
}
const person1 = { name: 'John', age: 30, city: 'Madrid' };
printPersonInfo(person1);
// Task 3
function squareNumber(num) {
    return num * num;
}
console.log(squareNumber(4));
//  Task 4
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(7));
function printStudentInfo(student) {
    console.log(`Student: ${student.name}, grade: ${student.grade}`);
}
const student1 = { name: 'Billy', grade: 12 };
printStudentInfo(student1);
// Task 6
function logMessage(str) {
    console.log(str);
}
logMessage('Test string');
//# sourceMappingURL=index.js.map