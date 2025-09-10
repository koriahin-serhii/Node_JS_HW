"use strict";
// Task 1
function calculateTotal(price, quantity, discount = 0) {
    const total = price * quantity;
    const discountedTotal = total - discount;
    return discountedTotal;
}
console.log(calculateTotal(25, 3));
console.log(calculateTotal(25, 3, 10));
// Task 2
let id;
function displayId(id) {
    if (typeof id === 'string') {
        console.log('ID: ', id.toUpperCase());
    }
    else {
        console.log('ID: ', id * 10);
    }
}
id = 'Hello world!';
displayId(id);
id = 123;
displayId(id);
const orders = [
    { orderId: 'A001', amount: 250, status: 'pending' },
    { orderId: 'A002', amount: 450, status: 'shipped' },
    { orderId: 'A003', amount: 150, status: 'delivered' },
    { orderId: 'A004', amount: 350, status: 'pending' },
    { orderId: 'A005', amount: 550, status: 'shipped' },
];
function filterOrdersByStatus(orders, status) {
    return orders.filter((order) => order.status === status);
}
console.log(filterOrdersByStatus(orders, 'pending'));
console.log(filterOrdersByStatus(orders, 'shipped'));
function updateStock(inventory, productInfo) {
    const [name, , stock] = productInfo;
    inventory[name] = (inventory[name] || 0) + stock;
    return inventory;
}
const inventory = {
    apple: 50,
    banana: 30,
};
const productInfo = ['banana', 1.2, 100];
console.log(updateStock(inventory, productInfo));
console.log(updateStock(inventory, ['orange', 0.8, 200]));
console.log(updateStock(inventory, ['orange', 0.8, 500]));
//# sourceMappingURL=task.js.map