// Задание 4
// Абстрактный класс Account
// Создайте абстрактный класс `Account` с абстрактными методами `deposit(amount: number)`
// и `withdraw(amount: number)`.
// Реализуйте классы `SavingsAccount` и `CheckingAccount`, которые наследуют `Account`.
// В классе `SavingsAccount` добавьте логику для начисления процентов на остаток.
// В классе `CheckingAccount` реализуйте снятие средств с учетом комиссии.
// Проверьте работу методов на объектах обоих классов.

abstract class Account {
  protected balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;

  getBalance(): number {
    return this.balance;
  }
}

class SavingsAccount extends Account {
  private interestRate: number;

  constructor(initialBalance: number, interestRate: number) {
    super(initialBalance);
    this.interestRate = interestRate;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log('Недостаточно средств');
    }
  }

  addInterest(): void {
    this.balance += (this.balance * this.interestRate) / 100;
  }
}

class CheckingAccount extends Account {
  private fee: number;

  constructor(initialBalance: number, fee: number) {
    super(initialBalance);
    this.fee = fee;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    const total = amount + this.fee;
    if (total <= this.balance) {
      this.balance -= total;
    } else {
      console.log('Недостаточно средств с учетом комиссии');
    }
  }
}

// Проверка работы
const savings = new SavingsAccount(1000, 5);
savings.deposit(500);
savings.addInterest();
savings.withdraw(200);
console.log('SavingsAccount balance:', savings.getBalance());

const checking = new CheckingAccount(1000, 10);
checking.deposit(300);
checking.withdraw(200);
console.log('CheckingAccount balance:', checking.getBalance());
