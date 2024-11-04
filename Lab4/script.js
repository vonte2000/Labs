//Lab 4 pt 1
const firstName = "DeVonte"
const lastName = "Gooden"
const fullName = firstName + " " + lastName
console.log(fullName);

let population = 633366;
console.log(population);
console.log(population * 3);

let javaScriptIsCool = true;
let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

for (let i = 1; i < 6; i++) {
    console.log(i);
} 

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// pt 2: Heating & Cooling
let actualTemp = 74;
let desiredTemp = 75;

if (actualTemp < desiredTemp) {
    console.log("Run heat!")
} else if (actualTemp === desiredTemp) {
    console.log("Standby")
} else {
    console.log("Run A/C")
}

//extended
/*
let tempCelcius = Number;
let targetUnit = ["C", "F", "K"];

switch(targetUnit) {
    case "F":
        console.log((tempCelcius *(9/5)) + 32);
        break;
    case "K":
        console.log(tempCelcius + 273.15);
        break;
    default:
        console.log(tempCelcius);
}
*/ 

// pt 3
let name1 = "Ty";
let name2 = "Jo";
let name3 = "Tim";

if (name1.length > name2.length && name1.length > name3.length) {
    console.log(name1 + " has the longest name.")
} else if (name2.length > name1.length && name2.length > name3.length) {
    console.log(name2 + " has the longest name.")
} else if (name3.length > name1.length && name3.length > name2.length) {
    console.log(name3 + " has the longest name")
} else if (name1.length == name2.length && name1.length > name3.length) {
    console.log(name1 + " and " + name2 + " tie for the longest name.")
} else if (name1.length == name3.length && name1.length > name2.length) {
    console.log(name1 + " and " + name3 + " tie for the longest name.")
} else if (name2.length == name3.length && name2.length > name1.length) {
    console.log(name2 + " and " + name3 + " tie for the longest name.")
} else {
    console.log("All names, " + name1 + " " + name2 + " " + name3 + " are the same length.")
}