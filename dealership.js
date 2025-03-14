/*
const hasVowels = (word) => {
    const vowels = new Set(
        ["a", "e", "i", "o", "u", "y"]
    )
    word = word.toLowerCase()
    for (let i = 0; i < word.length; i++) {
        if (vowels.has(word[i])) {
            return true
        }
    }
    return false
}
console.log(hasVowels("f"));
*/

const testTemperature = (desiredTemp, actualTemp) => {
    if (desiredTemp > actualTemp) {
        console.log("Run heat")
    } else if (desiredTemp < actualTemp) {
        console.log("Run A/C")
    } else {
        console.log("Standby")
    }
}
testTemperature()

const cars = [
    {
        make: "Toyota",
        model: "Prius", 
        year: 2020, 
        hybrid: true
    },
    {
        make: "Toyota",
        model: "Prius", 
        year: 2021, 
        hybrid: true
    },
    {
        make: "Ford",
        model: "F-150", 
        year: 2015, 
        hybrid: false
    },
    {
        make: "Ferrari",
        model: "Enzo", 
        year: 2004, 
        hybrid: false
    }
]


const findCars = (cars, model) => {
    return cars.filter(car => car.model === model)
}

/* option 2
const findCars =(cars, model) => { 
    const carsOfThatModel = []
    for (const car of cars) {
        of (car.model === model) {
            carsOfThatModel.push(car)
        }
    }
    return carsOfThatModel
}
console.log(findCars(cars, "Enzo"))
*/

const addCar = (cars, make, model, isHybrid) => {
    const newCar = {
        make: make,
        model: model,
        year: 2021, 
        hybrid: isHybrid
    }
    cars.unshift(newCar)
}

addCar(cars, "Mini Cooper", "Countryman", false)
console.log(cars);

const checkIfHybridIsForSale = cars => {
    //return cars.some(car => car.hybrid)

    for (const car of cars) {
        if (car.hybrid) {
            return true
        } else {
            return false
        }
    }
}
console.log(checkIfHybridIsForSale(cars))