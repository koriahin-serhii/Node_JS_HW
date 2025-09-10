// Задание 2
// Асинхронная обработка данных из массива
// Напишите функцию, которая принимает массив строк.
// Каждая строка будет асинхронно обрабатываться
// (например, преобразовываться в верхний регистр с задержкой).
// Используйте `Promise.all` для выполнения всех операций параллельно и
// вывода всех результатов.

function processStringAsync(str: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(str.toUpperCase());
    }, 2000);
  });
}

async function processStrings(strings: string[]) {
  try {
    const promises = strings.map(processStringAsync);
    const results = await Promise.all(promises);
    console.log('Processed strings:', results);
  } catch (error) {
    console.error('Error processing strings:', error);
  }
}

const stringArray = ['hello', 'world', 'this', 'is', 'async', 'processing'];
processStrings(stringArray);
