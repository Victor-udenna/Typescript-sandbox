"use strict";
const menu = [
    { id: 1, name: 'magarita', price: 100 },
    { id: 2, name: 'pizza', price: 200 },
    { id: 3, name: 'burger', price: 300 },
    { id: 4, name: 'sushi', price: 400 }
];
let cashInRegister = 100;
let nextOrderId = 1;
let orderQueue = [];
const addNewPizza = (pizzaObj) => {
    menu.push(pizzaObj);
};
const placeOrder = (pizzaName) => {
    const selectedPizza = menu.find((pizza) => pizza.name === pizzaName);
    if (!selectedPizza) {
        console.log(`Menu item "${selectedPizza}" not found`);
        return undefined;
    }
    cashInRegister += selectedPizza.price;
    const newOrder = {
        orderId: nextOrderId++,
        selectedOrder: selectedPizza,
        status: 'ordered'
    };
    orderQueue.push(newOrder);
    return newOrder;
};
const completeOrder = (orderId) => {
    const order = orderQueue.find((order) => order.orderId === orderId);
    if (!order) {
        console.log('Order not found');
        return undefined;
    }
    order.status = 'completed';
    return order;
};
addNewPizza({ id: 5, name: 'Chicken Bacon Ranch', price: 12 });
addNewPizza({ id: 6, name: 'BBQ Chicken', price: 12 });
addNewPizza({ id: 7, name: 'Spicy Sausage', price: 11 });
const getPizzaDetails = (identifier) => {
    if (typeof identifier === 'string') {
        return menu.find((pizza) => pizza.name.toLowerCase() === identifier.toLowerCase());
    }
    else if (typeof identifier === 'number') {
        return menu.find((pizza) => pizza.id === identifier);
    }
};
console.log('retrieved pizza', getPizzaDetails('pizza'));
