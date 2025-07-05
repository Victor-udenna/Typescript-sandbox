"use strict";
let myGuy = {
    name: 'john',
    age: 30,
    gender: 'male'
};
const myDog = {
    name: 'bill',
    age: 3,
    breed: 'german shepherd',
    bark: () => console.log('woof'),
    gender: 'male'
};
function makeItQuack(duck) {
    duck.quack();
}
const rubberDuck = {
    quack: () => console.log('quack quack'),
    color: 'yellow'
};
makeItQuack(rubberDuck);
