// Задание 1
// Модули для работы со строками
// Создайте файл `stringUtils.ts`, в котором определите функции:
// `capitalize`, которая делает первую букву строки заглавной.
// `reverseString`, которая переворачивает строку задом наперед.
// В файле `main.ts` импортируйте эти функции и протестируйте их на примерах строк.
export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
export function reverseString(str) {
    return str.split('').reverse().join('');
}
//# sourceMappingURL=stringUtils.js.map