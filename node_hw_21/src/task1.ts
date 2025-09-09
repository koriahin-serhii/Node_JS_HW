abstract class Animal {
  abstract makeSound(): void;
}

class Dog extends Animal {
  makeSound(): void {
    console.log('Bark!');
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log('Meow!');
  }
}

const animalsArray: Animal[] = [new Dog(), new Cat()];

animalsArray.forEach((animal) => animal.makeSound());
