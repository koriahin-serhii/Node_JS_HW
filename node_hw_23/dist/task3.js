"use strict";
// Задание 3
// Обработка ошибки в параллельных промисах
// Напишите функцию, которая вызывает три промиса параллельно с помощью `Promise.all`.
// Один из промисов должен намеренно завершиться с ошибкой через `reject`.
// Обработайте эту ошибку с использованием `try/catch`
// и выведите соответствующее сообщение.
function promiseSuccess(id, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Promise ${id} resolved`);
        }, delay);
    });
}
function promiseFailure(id, delay) {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error(`Promise ${id} rejected`));
        }, delay);
    });
}
async function handlePromises() {
    try {
        const results = await Promise.all([
            promiseSuccess(1, 1000),
            promiseFailure(2, 1500),
            promiseSuccess(3, 2000),
        ]);
        console.log('All promises resolved:', results);
    }
    catch (error) {
        console.error('Error occurred:', error.message);
    }
}
handlePromises();
//# sourceMappingURL=task3.js.map