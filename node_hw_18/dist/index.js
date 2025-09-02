"use strict";
// Задание 1
// Объединение и пересечение типов
// Создайте два типа: `Admin` и `User`.
// Тип `Admin` должен включать поля `name` (строка) и `permissions` (массив строк),
// а тип `User` должен включать поля `name` (строка) и `email` (строка).
// Создайте тип `AdminUser`, который объединяет свойства обоих типов, и создайте объект этого типа.
const adminUser = {
    name: 'Bob',
    email: 'bob@example.com',
    permissions: ['read', 'write'],
};
function printCarInfo(car) {
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
function calculateDiscount(product, discount) {
    return product.price - product.price * discount;
}
const product = { name: 'Laptop', price: 1000 };
const discountedPrice = calculateDiscount(product, 0.1);
console.log(`Discounted Price: ${discountedPrice}`);
const employees = [
    { name: 'Alice', salary: 50000 },
    { name: 'Bob', salary: 60000 },
    { name: 'Charlie', salary: 70000 },
];
function getEmployeeSalaries(employeeList) {
    return employeeList.map(employee => employee.salary);
}
const salaries = getEmployeeSalaries(employees);
console.log(`Employee Salaries: ${salaries}`);
const student = {
    firstName: 'John',
    lastName: 'Doe',
    grade: 90,
};
function printStudentInfo(student) {
    console.log(`Student Name: ${student.firstName} ${student.lastName}`);
    console.log(`Student Grade: ${student.grade}`);
}
printStudentInfo(student);
const concatStrings = (str1, str2) => {
    return str1 + str2;
};
console.log(concatStrings('Hello, ', 'world!'));
//# sourceMappingURL=index.js.map