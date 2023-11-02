"use strict";

console.log("--------- OLD ------------")
let kids = ["Natalie", "Brittany", "Zachary"];

for(let i = 0; i < kids.length; i++){
    let kid = kids[i];
    console.log(kid);
}

console.log("------  NEW ------------")

for (let kid of kids) {
    console.log(kid);
}


//////////////////////////