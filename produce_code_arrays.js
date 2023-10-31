"use strict";

//takes a partcode (string), and returns a part (object);
function parsePartCode(partcode){
    
    let posOfColon = partcode.indexOf(":");
    let posOfDash = partcode.indexOf("-");

    let part = {
        supplierCode:partcode.substring(0, posOfColon),
        productNumber: partcode.substring(posOfColon + 1, posOfDash),
        size: partcode.substring(posOfDash + 1)
    }

    return part;

}

//takes a part object, and displays it.
function displayPart(part){
    console.log("Supplier: " + part.supplierCode +
    " Product Number: " + part.productNumber +
    " Size: " + part.size);
}


let allOfThePartcodes = [
    "ACME:12345-M",  //0
    "TYME:23345-Sm", //1
    "ACCM:132s5-L",  //2
    "ACME:12345-S",  //3
    "GENX:6523-XL",  //4
]  // length of this array is 5

function displayAllPartCodesAsPart(partcodes){
    for (let i = 0 ; i < partcodes.length ; i++){
        let thispartcode = partcodes[i];
        let thispart = parsePartCode(thispartcode);
        displayPart(thispart)
    }
}



// function displayAllPartCodesAsPart(partcodes){
//     for (let i = 0 ; i < partcodes.length ; i++){
//         displayPart(parsePartCode(partcodes[i]));
//     }
// }

displayAllPartCodesAsPart(allOfThePartcodes);

//let upperBoundPartCodes = allOfThePartcodes.length;
// for (let addressOfPartCode = 0 ; addressOfPartCode < upperBoundPartCodes; addressOfPartCode++){
//     let thepartcode = allOfThePartcodes[addressOfPartCode];
//     let part = parsePartCode(thepartcode);
//     displayPart(part);
// }

// let partcode1 = "ACME:12345-M"
// let part1 = parsePartCode(partcode1);
// displayPart(part1);