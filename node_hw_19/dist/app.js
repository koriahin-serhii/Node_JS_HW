"use strict";
// Задание 1
// Напишите стрелочную функцию `sumEvenNumbers`,
// которая принимает массив чисел и возвращает сумму всех четных чисел.
const sumEvenNumbers = (numbers) => {
    return numbers
        .filter((num) => num % 2 === 0)
        .reduce((acc, curr) => acc + curr, 0);
};
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));
const isEmptyString = (input) => {
    return input.trim().length === 0;
};
console.log(isEmptyString(''));
console.log(isEmptyString('Hello'));
const areStringsEqual = (str1, str2) => {
    return str1 === str2;
};
console.log(areStringsEqual('test', 'test'));
console.log(areStringsEqual('test', 'Test'));
// Задание 4
// Напишите обобщенную функцию `getLastElement`,
// которая принимает массив любого типа и возвращает последний элемент этого массива.
const getLastElement = (arr) => {
    return arr.length > 0 ? arr[arr.length - 1] : undefined;
};
console.log(getLastElement([1, 2, 3, 4]));
console.log(getLastElement(['a', 'b', 'c']));
console.log(getLastElement([]));
// Задание 5
// Создайте обобщенную функцию `make Triple`,
// которая принимает три аргумента одного типа и возвращает массив из этих трёх элементов.
const makeTriple = (a, b, c) => {
    return [a, b, c];
};
console.log(makeTriple(1, 2, 3));
console.log(makeTriple('x', 'y', 'z'));
console.log(makeTriple(true, false, true));
//# sourceMappingURL=app.js.map