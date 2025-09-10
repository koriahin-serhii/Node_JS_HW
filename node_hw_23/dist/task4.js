"use strict";
// Задание 4
// Асинхронная функция с динамическим временем выполнения
// Напишите асинхронную функцию, которая принимает массив чисел.
// Для каждого числа создайте промис, который будет завершаться 
// через количество миллисекунд, равное значению числа.
// Используйте `Promise.all` для ожидания завершения всех 
// промисов и вывода результатов в консоль.
function createDelayPromise(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Resolved after ${ms} ms`);
        }, ms);
    });
}
async function processDelays(delays) {
    try {
        const promises = delays.map(createDelayPromise);
        const results = await Promise.all(promises);
        console.log('All promises resolved:', results);
    }
    catch (error) {
        console.error('Error processing delays:', error);
    }
}
const delayArray = [1000, 2000, 1500, 3000, 2500];
processDelays(delayArray);
//# sourceMappingURL=task4.js.map