
function getMealCost(order){

    let totalcost = 0;

    for( let i = 0 ; i < order.length ; i++){
        let thisorderitem = order[i];
        let thisItemCost = thisorderitem.price;
        totalcost = totalcost + thisItemCost;
    }

    return totalcost;
}



let myOrder = [
    { item: "Chicken Tacos", price: 8.95 },
    { item: "Guacamole", price: 2.85 },
    { item: "Sweet Tea", price: 2.75 }
];


let yourOrder = [
    { item: "Hamburger", price: 6.95 },
    { item: "Fries", price: 2.25 },
    { item: "Sweet Tea", price: 2.75 },
    { item: "Fried Apple Pie", price: 4.95 }
];


let costOfYourOrder = getMealCost(yourOrder);
console.log("your order costs: " + costOfYourOrder);


let costofMattsOrder = getMealCost([
    { item: "Diet Coke", price: 3.95},
    { item: "Brat /w Sour Crout", price: 8.50}
]);

