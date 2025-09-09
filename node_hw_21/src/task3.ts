// Задание 3
// Абстрактный класс Appliance
// Создайте абстрактный класс `Appliance` с абстрактными методами `turnOn()` и `turnOff()`.
// Затем создайте классы `WashingMachine` и `Refrigerator`,
// которые наследуют `Appliance` и реализуют методы `turnOn()` и `turnOff()`,
// выводя соответствующие сообщения.
// Создайте массив типа `Appliance[]`, добавьте в него объекты `WashingMachine` и `Refrigerator`,
// и вызовите методы `turnOn()` и `turnOff()` для каждого элемента.

abstract class Appliance {
  abstract turnOn(): void;
  abstract turnOff(): void;
}

class WashingMachine extends Appliance {
  turnOn(): void {
    console.log('Washing Machine is now ON.');
  }

  turnOff(): void {
    console.log('Washing Machine is now OFF.');
  }
}

class Refrigerator extends Appliance {
  turnOn(): void {
    console.log('Refrigerator is now ON.');
  }

  turnOff(): void {
    console.log('Refrigerator is now OFF.');
  }
}

const appliancesArray: Appliance[] = [new WashingMachine(), new Refrigerator()];

appliancesArray.forEach((appliance) => {
  appliance.turnOn();
  appliance.turnOff();
});
