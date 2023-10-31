"use strict";


let contact1 = {
    name: "Ezra Smith",
    address: "123 Main St.",
    city: "Anytown",
    state: "NY",
    zip: "12345"
}

let contact2 = {
    name: "Elisha Jones",
    address: "456 Main St.",
    city: "Othertown",
    state: "NY",
    zip: "12343"
}

let employee1 = {
    name: "Ezra Smith",
    payRate: 38.46
}

let product1 = {
    name: "Widget",
    price: 9.99
}

function printContact(contact){
    console.log(contact.name);
    console.log(contact.address);
    console.log(contact.city + ", " + contact.state + " " + contact.zip);
}


printContact(contact1);
printContact(contact2);
printContact(employee1);
printContact(product1);

