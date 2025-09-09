"use strict";
// Задание 4
// Абстрактный класс Account
// Создайте абстрактный класс `Account` с абстрактными методами `deposit(amount: number)`
// и `withdraw(amount: number)`.
// Реализуйте классы `SavingsAccount` и `CheckingAccount`, которые наследуют `Account`.
// В классе `SavingsAccount` добавьте логику для начисления процентов на остаток.
// В классе `CheckingAccount` реализуйте снятие средств с учетом комиссии.
// Проверьте работу методов на объектах обоих классов.
class Account {
    balance;
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    getBalance() {
        return this.balance;
    }
}
class SavingsAccount extends Account {
    interestRate;
    constructor(initialBalance, interestRate) {
        super(initialBalance);
        this.interestRate = interestRate;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log('Недостаточно средств');
        }
    }
    addInterest() {
        this.balance += (this.balance * this.interestRate) / 100;
    }
}
class CheckingAccount extends Account {
    fee;
    constructor(initialBalance, fee) {
        super(initialBalance);
        this.fee = fee;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        const total = amount + this.fee;
        if (total <= this.balance) {
            this.balance -= total;
        }
        else {
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
//# sourceMappingURL=task4.js.map