// Задание 2
// Абстрактный класс Shape с цветом
// Создайте абстрактный класс `ColoredShape`,
// который наследует `Shape` (из задания 4 на уроке) и добавляет абстрактное поле `color`.
// Реализуйте классы `ColoredCircle` и `ColoredRectangle`,
// которые наследуют `ColoredShape`, задают `color` и реализуют метод `calculateArea()`.
// Выведите площадь и цвет для каждого объекта.

abstract class Shape {
  abstract name: string;
  abstract calculateArea(): number;
}

abstract class ColoredShape extends Shape {
  abstract color: string;
}

class ColoredCircle extends ColoredShape {
  name: string;
  color: string;
  radius: number;

  constructor(radius: number, color: string) {
    super();
    this.name = 'Circle';
    this.radius = radius;
    this.color = color;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class ColoredRectangle extends ColoredShape {
  name: string;
  width: number;
  height: number;
  color: string;

  constructor(width: number, height: number, color: string) {
    super();
    this.name = 'Rectangle';
    this.width = width;
    this.height = height;
    this.color = color;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

const shapesArray: ColoredShape[] = [
  new ColoredCircle(5, 'red'),
  new ColoredRectangle(4, 6, 'blue'),
];

shapesArray.forEach((shape) => {
  console.log(
    `${shape.name} - Color: ${shape.color}, Area: ${shape.calculateArea()}`
  );
});
