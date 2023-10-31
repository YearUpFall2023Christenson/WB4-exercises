"use strict";

let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
    ];

let total = 0;

for( let i = 0; i < lunch.length ; i++){
    total += lunch[i].price;
}

console.log("Food Total: " + total);

let tax = total * 0.08;

console.log("Tax:        " + tax);

let tip = total * 0.18;

console.log("Tip:        " + tip);

console.log("Grand Total: " + (total + tax + tip) );

