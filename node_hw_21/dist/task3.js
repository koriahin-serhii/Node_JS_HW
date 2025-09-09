"use strict";
// Задание 3
// Абстрактный класс Appliance
// Создайте абстрактный класс `Appliance` с абстрактными методами `turnOn()` и `turnOff()`.
// Затем создайте классы `WashingMachine` и `Refrigerator`,
// которые наследуют `Appliance` и реализуют методы `turnOn()` и `turnOff()`,
// выводя соответствующие сообщения.
// Создайте массив типа `Appliance[]`, добавьте в него объекты `WashingMachine` и `Refrigerator`,
// и вызовите методы `turnOn()` и `turnOff()` для каждого элемента.
class Appliance {
}
class WashingMachine extends Appliance {
    turnOn() {
        console.log('Washing Machine is now ON.');
    }
    turnOff() {
        console.log('Washing Machine is now OFF.');
    }
}
class Refrigerator extends Appliance {
    turnOn() {
        console.log('Refrigerator is now ON.');
    }
    turnOff() {
        console.log('Refrigerator is now OFF.');
    }
}
const appliancesArray = [new WashingMachine(), new Refrigerator()];
appliancesArray.forEach((appliance) => {
    appliance.turnOn();
    appliance.turnOff();
});
//# sourceMappingURL=task3.js.map