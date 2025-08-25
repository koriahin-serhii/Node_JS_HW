// Task 1

function greetUser(userName: string): void {
  console.log(`Hello, ${userName}!`);
}

greetUser('Bob');

// Task 2

interface Person {
  name: string;
  age: number;
  city: string;
}

function printPersonInfo(person: Person): void {
  console.log(`Name: ${person.name}, age: ${person.age}, city: ${person.city}`);
}

const person1: Person = { name: 'John', age: 30, city: 'Madrid' };

printPersonInfo(person1);

// Task 3

function squareNumber(num: number): number {
  return num * num;
}

console.log(squareNumber(4));

//  Task 4

function isEven(num: number): boolean {
  return num % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(7));

// Task 5

interface Student {
  name: string;
  grade: number;
}

function printStudentInfo(student: Student): void {
  console.log(`Student: ${student.name}, grade: ${student.grade}`);
}
const student1: Student = { name: 'Billy', grade: 12 };

printStudentInfo(student1);

// Task 6

function logMessage(str: string): void {
  console.log(str);
}

logMessage('Test string');

