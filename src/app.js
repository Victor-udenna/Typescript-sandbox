"use strict";
const menu = [
    { name: 'magarita', price: 100 },
    { name: 'pizza', price: 200 },
    { name: 'burger', price: 300 },
    { name: 'sushi', price: 400 }
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
addNewPizza({ name: 'Chicken Bacon Ranch', price: 12 });
addNewPizza({ name: 'BBQ Chicken', price: 12 });
addNewPizza({ name: 'Spicy Sausage', price: 11 });
console.log(orderQueue, 'order');
console.log(menu);
console.log(placeOrder('sushi'), cashInRegister);
console.log(completeOrder(1), 'Completed Order');
