// Task 1
function calculateTotal(
  price: number,
  quantity: number,
  discount: number = 0
): number {
  const total = price * quantity;
  const discountedTotal = total - discount;
  return discountedTotal;
}

console.log(calculateTotal(25, 3));
console.log(calculateTotal(25, 3, 10));

// Task 2
let id: string | number;

function displayId(id: string | number): void {
  if (typeof id === 'string') {
    console.log('ID: ', id.toUpperCase());
  } else {
    console.log('ID: ', id * 10);
  }
}

id = 'Hello world!';
displayId(id);
id = 123;
displayId(id);

// Task 3
type OrderStatus = 'pending' | 'shipped' | 'delivered';

interface Order {
  orderId: string;
  amount: number;
  status: OrderStatus;
}

const orders: Order[] = [
  { orderId: 'A001', amount: 250, status: 'pending' },
  { orderId: 'A002', amount: 450, status: 'shipped' },
  { orderId: 'A003', amount: 150, status: 'delivered' },
  { orderId: 'A004', amount: 350, status: 'pending' },
  { orderId: 'A005', amount: 550, status: 'shipped' },
];

function filterOrdersByStatus(orders: Order[], status: OrderStatus): Order[] {
  return orders.filter((order) => order.status === status);
}

console.log(filterOrdersByStatus(orders, 'pending'));
console.log(filterOrdersByStatus(orders, 'shipped'));

// Task 4
type ProductInfo = [string, number, number];
function updateStock(
  inventory: { [key: string]: number },
  productInfo: ProductInfo
): { [key: string]: number } {
  const [name, , stock] = productInfo;
  inventory[name] = stock;
  return inventory;
}
const inventory = {
  apple: 50,
  banana: 30,
};
const productInfo: ProductInfo = ['banana', 1.2, 100];
console.log(updateStock(inventory, productInfo));
console.log(updateStock(inventory, ['orange', 0.8, 200]));
