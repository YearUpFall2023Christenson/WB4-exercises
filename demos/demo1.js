"use strict";


function displayPayStub(payStub) {
    console.log(payStub.employee.FirstName + " earned $" +
        payStub.grossPay.toFixed(2)) + "working for " + payStub.hoursWorked + " hours.";
        
}

function createPayStub(employee, hoursWorked) {
    let grossPay = 0;
    if (hoursWorked <= 40) {
        grossPay = employee.PayRate * hoursWorked;
    }
    else {
        grossPay = (40 *  employee.PayRate) +
            ((hoursWorked - 40) * 1.5 * employee.PayRate);
    }

    let payStub = {
        employee: employee,
        hoursWorked: hoursWorked,
        grossPay: grossPay
    };

    return payStub;
}

let emp1 = {
    Id: "1",
    FirstName: "Ezra",
    LastName: "Smith",
    PayRate: 38.46
}

let emp2 = {
    Id: "2",
    FirstName: "Elisha",
    LastName: "Jones",
    PayRate: 43.27
}

let emp3 = {
    Id: "3",
    FirstName: "Elijah",
    LastName: "Williams",
    PayRate: 27.5
}


let emp1PayStub = createPayStub(emp1, 35);
let emp2PayStub = createPayStub(emp2, 45);
let emp3PayStub = createPayStub(emp3, 40);

displayPayStub( emp1PayStub);
displayPayStub( emp2PayStub);
displayPayStub( emp3PayStub);


// displayPayStub( createPayStub(emp1, 35));
// displayPayStub( createPayStub(emp2, 45));
// displayPayStub( createPayStub(emp3, 40));




// let emp1PayStub = createPayStub("1", "Ezra", 38.46, 49);

// console.log(emp1PayStub.name + " earned $" +
//     emp1PayStub.grossPay.toFixed(2));

// let emp2PayStub =
//     createPayStub("2", "Elisha", 43.27, 42);
// console.log(emp2PayStub.name + " earned $" +
//     emp2PayStub.grossPay.toFixed(2));


