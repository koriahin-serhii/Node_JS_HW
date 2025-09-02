// Задание 1
// Объединение и пересечение типов
// Создайте два типа: `Admin` и `User`.
// Тип `Admin` должен включать поля `name` (строка) и `permissions` (массив строк),
// а тип `User` должен включать поля `name` (строка) и `email` (строка).
// Создайте тип `AdminUser`, который объединяет свойства обоих типов, и создайте объект этого типа.

type Admin = {
  name: string;
  permissions: string[];
};

type User = {
  name: string;
  email: string;
};

type AdminUser = Admin & User;

const adminUser: AdminUser = {
  name: 'Bob',
  email: 'bob@example.com',
  permissions: ['read', 'write'],
};

// Задание 2
// Вложенные объекты и опциональные поля
// Создайте объект `Car` с полями `make` (строка), `model` (строка),
// и вложенным объектом `engine`, который имеет поля `type` (строка) и `horsepower` (число).
// Добавьте опциональное поле `year` (число) для года выпуска машины.
// Напишите функцию, которая выводит информацию о машине.

type Engine = {
  type: string;
  horsepower: number;
};

type Car = {
  make: string;
  model: string;
  engine: Engine;
  year?: number;
};

function printCarInfo(car: Car) {
  console.log(`Car Make: ${car.make}`);
  console.log(`Car Model: ${car.model}`);
  console.log(`Engine Type: ${car.engine.type}`);
  console.log(`Engine Horsepower: ${car.engine.horsepower}`);
  if (car.year) {
    console.log(`Car Year: ${car.year}`);
  }
}

printCarInfo({
  make: 'Toyota',
  model: 'Camry',
  engine: {
    type: 'V6',
    horsepower: 301,
  },
  year: 2020,
});

// Задание 3
// Интерфейс для функции с объектом
// Создайте интерфейс для функции `calculateDiscount`, которая принимает объект `Product` с полями `name` (строка) и `price` (число), а также параметр `discount` (число).
// Функция должна возвращать новую цену продукта с учетом скидки.

interface Product {
  name: string;
  price: number;
}

function calculateDiscount(product: Product, discount: number): number {
  return product.price - product.price * discount;
}
const product: Product = { name: 'Laptop', price: 1000 };
const discountedPrice = calculateDiscount(product, 0.1);
console.log(`Discounted Price: ${discountedPrice}`);


// Задание 4
// Массив объектов и функции
// Создайте интерфейс `Employee`, который включает поля `name` (строка) и `salary` (число).
// Создайте массив объектов `Employee`, 
// затем напишите функцию, которая принимает этот массив и 
// возвращает массив зарплат всех сотрудников.

interface Employee {
  name: string;
  salary: number;
}

const employees: Employee[] = [
  { name: 'Alice', salary: 50000 },
  { name: 'Bob', salary: 60000 },
  { name: 'Charlie', salary: 70000 },
];

function getEmployeeSalaries(employeeList: Employee[]): number[] {
  return employeeList.map(employee => employee.salary);
}

const salaries = getEmployeeSalaries(employees);
console.log(`Employee Salaries: ${salaries}`);


// Задание 5
// Наследование интерфейсов и работа с объектами
// Создайте интерфейс `Person` с полями `firstName` (строка) и `lastName` (строка).
// Создайте интерфейс `Student`, который наследует `Person` и добавляет поле `grade` (число).
// Создайте объект `student` этого типа и напишите функцию, 
// которая выводит полное имя студента и его оценку.

interface Person {
  firstName: string;
  lastName: string;
}

interface Student extends Person {
  grade: number;
}

const student: Student = {
  firstName: 'John',
  lastName: 'Doe',
  grade: 90,
};

function printStudentInfo(student: Student) {
  console.log(`Student Name: ${student.firstName} ${student.lastName}`);
  console.log(`Student Grade: ${student.grade}`);
}

printStudentInfo(student);


// Задание 6
// Интерфейс для функции с несколькими параметрами
// Создайте интерфейс для функции `concatStrings`, 
// которая принимает два параметра: `str1` и `str2` (оба строки) и возвращает их объединение.
// Реализуйте эту функцию и протестируйте её.

interface ConcatStrings {
  (str1: string, str2: string): string;
}

const concatStrings: ConcatStrings = (str1, str2) => {
  return str1 + str2;
};

console.log(concatStrings('Hello, ', 'world!'));