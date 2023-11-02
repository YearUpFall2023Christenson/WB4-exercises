let numbers = [100, 1, 27,83, 441 , 24, 41,  6129 , 60];



function displayItems(items){
    for(let i = 0; i < items.length ; i++){
    console.log(items[i])
    }
}

console.log("Not sorted");
displayItems(numbers);

console.log("sorted?");
numbers.sort();

displayItems(numbers);

console.log("sorted!");


numbers.sort(compareAscendingOrder);
numbers.sort(function(a,b){ return b - a;});



displayItems(numbers);


function compareAscendingOrder(a, b){
    return b - a;
    // if( a < b ) {return -1};
    // if( a == b) {return 0};
    // if( a > b) {return 1};
}