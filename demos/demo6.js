function getMealCost(order){

    let totalcost = 0;

    for( let i = 0 ; i < order.length ; i++){
        let thisorderitem = order[i];
        let thisItemCost = thisorderitem.price;
        totalcost = totalcost + thisItemCost;
    }

    return totalcost;
}

function getMealCost(order){
    let totalcost = 0;
    for( let i = 0 ; i < order.length ; i++){
        let thisorderitem = order[i];
        let thisItemCost = thisorderitem.price;
        totalcost += thisItemCost;
    }
    return totalcost;
}

function getMealCost(order){
    let totalcost = 0;
    for( let i = 0 ; i < order.length ; i++){
        let thisItemCost = order[i].price;
        totalcost += thisItemCost;
    }
    return totalcost;
}


function getMealCost(order){

    let totalcost = 0;

    for( let i = 0 ; i < order.length ; i++){
        totalcost += order[i].price;
    }

    return totalcost;
}

