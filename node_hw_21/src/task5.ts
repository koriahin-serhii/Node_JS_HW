// Задание 5
// Абстрактный класс Media
// Создайте абстрактный класс `Media` с абстрактным методом `play()`.
// Затем создайте классы `Audio` и `Video`, которые наследуют `Media`
// и реализуют метод `play()` по-своему (например, `Audio` выводит "Playing audio",
// а `Video` — "Playing video").
// Создайте массив типа `Media[]`, включающий объекты `Audio` и `Video`,
// и вызовите метод `play()` для каждого элемента массива.

abstract class Media {
  abstract play(): void;
}

class Audio extends Media {
  play(): void {
    console.log('Playing audio');
  }
}

class Video extends Media {
  play(): void {
    console.log('Playing video');
  }
}

const mediaArray: Media[] = [new Audio(), new Video()];

mediaArray.forEach((media) => media.play());
