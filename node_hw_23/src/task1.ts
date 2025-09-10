// Задание 1
// Обработка цепочки промисов с `async/await`
// Создайте несколько функций, которые возвращают промисы
// с разным временем выполнения.
// Напишите функцию, которая вызывает эти промисы поочерёдно, используя `await`,
// и обрабатывает результаты каждой операции.
// Убедитесь, что цепочка промисов выполняется последовательно.

function fetchData1(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data from fetchData1');
    }, 1000);
  });
}

function fetchData2(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data from fetchData2');
    }, 2000);
  });
}

function fetchData3(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data from fetchData3');
    }, 1500);
  });
}

async function mainFetchData() {
  try {
    const result3 = await fetchData3();
    console.log(result3);

    const result1 = await fetchData1();
    console.log(result1);

    const result2 = await fetchData2();
    console.log(result2);
  } catch (error) {
    console.error('Error processing data:', error);
  }
}

mainFetchData();
