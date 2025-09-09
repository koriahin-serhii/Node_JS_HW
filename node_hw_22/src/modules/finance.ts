// Задание 2
// Пространства имен для финансовых операций
// Создайте файл `finance.ts`, в котором определите пространство имен `Finance`.
// Внутри него создайте классы:
// `LoanCalculator`, который рассчитывает ежемесячные платежи по кредиту по формуле аннуитета.
// `TaxCalculator`, который рассчитывает налог на доход.
// Используйте эти классы в файле `main.ts` для расчета платежей по кредиту и
// налога на примерных данных.

export namespace Finance {
  export class LoanCalculator {
    constructor(
      public principal: number,
      public annualRate: number,
      public years: number
    ) {}

    calculateMonthlyPayment(): number {
      const monthlyRate = this.annualRate / 12 / 100;
      const numberOfPayments = this.years * 12;
      return (
        (this.principal * monthlyRate) /
        (1 - Math.pow(1 + monthlyRate, -numberOfPayments))
      );
    }
  }

  export class TaxCalculator {
    constructor(public income: number, public taxRate: number) {}

    calculateTax(): number {
      return (this.income * this.taxRate) / 100;
    }
  }
}
