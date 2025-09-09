"use strict";
class Animal {
}
class Dog extends Animal {
    makeSound() {
        console.log('Bark!');
    }
}
class Cat extends Animal {
    makeSound() {
        console.log('Meow!');
    }
}
const animalsArray = [new Dog(), new Cat()];
animalsArray.forEach((animal) => animal.makeSound());
//# sourceMappingURL=task1.js.map