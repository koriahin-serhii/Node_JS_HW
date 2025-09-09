// Task 1
import { capitalize, reverseString } from './modules/stringUtils.js';

console.log(capitalize('hello'));
console.log(reverseString('world'));


// Task 2
import { Finance } from './modules/finance.js';

const loanCalculator = new Finance.LoanCalculator(100000, 5, 15);
console.log('Monthly Payment:', loanCalculator.calculateMonthlyPayment().toFixed(2));

const taxCalculator = new Finance.TaxCalculator(60000, 20);
console.log('Tax:', taxCalculator.calculateTax().toFixed(2));


//  Task 3
import { UserManagement } from './modules/userManagement.js';

const admin = new UserManagement.Admin.AdminUser('Bob', 'bob@example.com', true);
console.log('Admin User:', admin);
admin.setSuperAdminStatus(false);
console.log('Updated Admin User:', admin);


// Task 4
import { generateFibonacci, generatePrimeNumbers } from './modules/sequenceUtils.js';

console.log('Fibonacci up to 50:', generateFibonacci(50));
console.log('Prime numbers up to 50:', generatePrimeNumbers(50));