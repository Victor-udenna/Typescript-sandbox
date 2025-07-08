type Dog = {
  name: string;
  age: number;
  breed: string;
  bark: () => void;
  gender: string;
};

type address = {
  city: string;
  country: string;
};
type person = {
  name: string;
  age: number;
  gender: string;
  address?: address;
};

let myGuy: person = {
  name: 'john',
  age: 30,
  gender: 'male'
};

const myDog: Dog = {
  name: 'bill',
  age: 3,
  breed: 'german shepherd',
  bark: () => console.log('woof'),
  gender: 'male'
};

interface Duck {
  quack: () => void;
}

function makeItQuack(duck: Duck) {
  duck.quack();
}

const rubberDuck = {
  quack: () => console.log('quack quack'),
  color: 'yellow'
};

makeItQuack(rubberDuck);


