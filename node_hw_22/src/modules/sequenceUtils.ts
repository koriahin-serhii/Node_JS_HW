// Задание 4
// Модули для работы с числовыми последовательностями
// Создайте файл `sequenceUtils.ts`, в котором определите функции:
// `generateFibonacci`, которая генерирует последовательность Фибоначчи до указанного числа.
// `generatePrimeNumbers`, которая генерирует простые числа до указанного числа.
// В файле `main.ts` импортируйте эти функции и протестируйте их на примерах.

export function generateFibonacci(limit: number): number[] {
  if (limit < 0) return [];

  const sequence: number[] = [0, 1];
  while (true) {
    const next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    if (next > limit) break;
    sequence.push(next);
  }

  return sequence;
}

export function generatePrimeNumbers(limit: number): number[] {
  const primes: number[] = [];
  for (let num = 2; num <= limit; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(num);
  }
  return primes;
}
