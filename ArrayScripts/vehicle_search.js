let vehicles = [
    {
        color: "Silver",
        type: "Minivan",
        registrationState: "CA",
        licenseNo: "ABC-101",
        registrationExpires: new Date("3-10-2022"),
        capacity: 7
    },
    {
        color: "Red",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "A1D-2NC",
        registrationExpires: new Date("8-31-2023"),
        capacity: 3
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "A22-X00",
        registrationExpires: new Date("9-31-2023"),
        capacity: 6
    },
    {
        color: "Red",
        type: "Car",
        registrationState: "CA",
        licenseNo: "ABC-222",
        registrationExpires: new Date("12-10-2023"),
        capacity: 5
    },
    {
        color: "Black",
        type: "SUV",
        registrationState: "CA",
        licenseNo: "EEE-222",
        registrationExpires: new Date("12-10-2021"),
        capacity: 7
    },
    {
        color: "Red",
        type: "SUV",
        registrationState: "TX",
        licenseNo: "ZZ2-101",
        registrationExpires: new Date("12-30-2022"),
        capacity: 5
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "CAC-7YT",
        registrationExpires: new Date("1-31-2024"),
        capacity: 5
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "CA",
        licenseNo: "123-ABC",
        registrationExpires: new Date("3-31-2023"),
        capacity: 5
    }
];

console.log("** ALL VEHICLES")
displayVehicles(vehicles);
////////////////////////////////

console.log("*** RED VEHICLES")
let redvehicles = [] ;
for(let i = 0 ; i < vehicles.length ; i++){
    if(vehicles[i].color == "Red"){
        redvehicles.push(vehicles[i]);
    }
}
displayVehicles(redvehicles);

//////////////////////
console.log("Expired Plates")
let expiredPlates = [];
for(let i = 0 ; i < vehicles.length ; i++){
    if(vehicles[i].registrationExpires < new Date()){
        expiredPlates.push(vehicles[i]);
    }
}
displayVehicles(expiredPlates);

//////////////////////////
console.log("*** VEHICLES TO HOLD 6 PEOPLE")
let vehiclewith6 = [] ;
for(let i = 0 ; i < vehicles.length ; i++){
    if(vehicles[i].capacity >= 6){
        vehiclewith6.push(vehicles[i]);
    }
}
displayVehicles(vehiclewith6);



function displayVehicles(vehicles){
    for( let i = 0; i < vehicles.length; i++){
        console.log( (i + 1) + " "  + getVehicleDescription(vehicles[i]));
    }
    console.log()
}

function getVehicleDescription(vehicle){
    let description;
    // set the description here...
    description = `${vehicle.color} ${vehicle.type} - ${vehicle.registrationState} ${vehicle.licenseNo} ${vehicle.registrationExpires.getFullYear()}-${vehicle.registrationExpires.getMonth() + 1 }-${vehicle.registrationExpires.getDate()}`;

    return description;
}