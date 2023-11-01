
function getMealCostLong(order){

    let totalcost = 0;

    for( let indexOfOrder = 0 ; indexOfOrder < order.length ; indexOfOrder++){
        let thisorderitem = order[indexOfOrder];
        let thisItemCost = thisorderitem.price;
        totalcost = totalcost + thisItemCost;
    }

    return totalcost;
}

function getMealCost(order){

    let totalcost = 0;

    for( let indexOfOrder = 0 ; indexOfOrder < order.length ; indexOfOrder++){
        totalcost += order[indexOfOrder].price;
    }

    return totalcost;
}

function getMealDescription(order){
    let description = "Your order contains: "

    let indexOfOrder = 0
    while(indexOfOrder < order.length){
        //do all the things with just one order line:
        let orderline = order[indexOfOrder];

        if(orderline.quantity > 1){
            description += `${orderline.quantity} ${orderline.item}s`;
        }
        else{
            description += orderline.item;
        }

        //todo:  figure out comma

        if(indexOfOrder != (order.length - 1)){
            description += ", ";
        }
        
       indexOfOrder++;
    }

    return description;
}




// "Your order contains:  2 Chicken Tacos, Guacamole, 2 Sweet Teas."

let myOrder = [
    { item: "Chicken Taco", price: 8.95, quantity: 2},
    { item: "Guacamole", price: 2.85 },
    { item: "Sweet Tea", price: 2.75, quantity: 2}
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

let myOrderDesc = getMealDescription(myOrder);
console.log(myOrderDesc);
