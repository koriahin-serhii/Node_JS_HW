"use strict";
// Задание 2
// Абстрактный класс Shape с цветом
// Создайте абстрактный класс `ColoredShape`,
// который наследует `Shape` (из задания 4 на уроке) и добавляет абстрактное поле `color`.
// Реализуйте классы `ColoredCircle` и `ColoredRectangle`,
// которые наследуют `ColoredShape`, задают `color` и реализуют метод `calculateArea()`.
// Выведите площадь и цвет для каждого объекта.
class Shape {
}
class ColoredShape extends Shape {
}
class ColoredCircle extends ColoredShape {
    name;
    color;
    radius;
    constructor(radius, color) {
        super();
        this.name = 'Circle';
        this.radius = radius;
        this.color = color;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class ColoredRectangle extends ColoredShape {
    name;
    width;
    height;
    color;
    constructor(width, height, color) {
        super();
        this.name = 'Rectangle';
        this.width = width;
        this.height = height;
        this.color = color;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
const shapesArray = [
    new ColoredCircle(5, 'red'),
    new ColoredRectangle(4, 6, 'blue'),
];
shapesArray.forEach((shape) => {
    console.log(`${shape.name} - Color: ${shape.color}, Area: ${shape.calculateArea()}`);
});
//# sourceMappingURL=task2.js.map