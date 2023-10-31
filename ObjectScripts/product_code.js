"use strict";

// function parsePartCode(partcode){
//     let supplierCode;
//     let productNumber;
//     let size;

//     let posOfColon = partcode.indexOf(":");
//     let posOfDash = partcode.indexOf("-");

//     supplierCode = partcode.substring(0, posOfColon);
//     productNumber = partcode.substring(posOfColon + 1, posOfDash);
//     size = partcode.substring(posOfDash + 1);


//     let part = {
//         supplierCode: supplierCode,
//         productNumber: productNumber,
//         size: size
//     }

//     return part;

// }

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



let partCode1 = "XYZ:1234-L";
let part1 = parsePartCode(partCode1);
console.log("Supplier: " + part1.supplierCode +
" Product Number: " + part1.productNumber +
" Size: " + part1.size);