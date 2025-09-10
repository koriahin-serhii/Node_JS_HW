// Задание 1
// Напишите стрелочную функцию `sumEvenNumbers`,
// которая принимает массив чисел и возвращает сумму всех четных чисел.

const sumEvenNumbers = (numbers: number[]) => {
  return numbers
    .filter((num) => num % 2 === 0)
    .reduce((acc, curr) => acc + curr, 0);
};
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));

// Задание 2
// Определите интерфейс `StringToBooleanFunction` для функции,
// которая принимает строку и возвращает `boolean` (например, проверяет, является ли строка пустой).
// Реализуйте такую функцию.

interface StringToBooleanFunction {
  (input: string): boolean;
}

const isEmptyString: StringToBooleanFunction = (input: string) => {
  return input.trim().length === 0;
};
console.log(isEmptyString(''));
console.log(isEmptyString('Hello'));

// Задание 3
// Создайте тип `CompareStrings` для функции, принимающей две строки и возвращающей `boolean`
// (например, для проверки равенства строк).
// Напишите функцию, соответствующую этому типу.

type CompareStrings = (str1: string, str2: string) => boolean;

const areStringsEqual: CompareStrings = (str1: string, str2: string) => {
  return str1 === str2;
};
console.log(areStringsEqual('test', 'test'));
console.log(areStringsEqual('test', 'Test'));

// Задание 4
// Напишите обобщенную функцию `getLastElement`,
// которая принимает массив любого типа и возвращает последний элемент этого массива.

const getLastElement = <T>(arr: T[]): T | undefined => {
  return arr.length > 0 ? arr[arr.length - 1] : undefined;
};
console.log(getLastElement([1, 2, 3, 4]));
console.log(getLastElement(['a', 'b', 'c']));
console.log(getLastElement([]));

// Задание 5
// Создайте обобщенную функцию `make Triple`,
// которая принимает три аргумента одного типа и возвращает массив из этих трёх элементов.

const makeTriple = <T>(a: T, b: T, c: T): T[] => {
  return [a, b, c];
};
console.log(makeTriple(1, 2, 3));
console.log(makeTriple('x', 'y', 'z'));
console.log(makeTriple(true, false, true));
