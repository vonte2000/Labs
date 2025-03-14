const actualTemp = 60
const desiredTemp = 75
const checkTemp = (actualTemp) => {
    if (actualTemp < desiredTemp) {
        console.log("Run heat")
    } else if (actualTemp > desiredTemp) {
        console.log("Run AC")
    } else {
        console.log("Standby")
    }
}
checkTemp(75)

//etended challenge
const convertTemp = (value, unit) => {
    let result;
    switch (unit) {
        case "C": // C to F
            result = (value * 9) / 5 + 32;
            result = `${result}°F`;
            break;
        case "F": // F to C
            result = ((value - 32) * 5) / 9;
            result = `${result}°C`;
            break;
        case "K": //K to C
            result = value - 273.15;
            result = `${result}°C`;
            break;
        default:
            result = "Invalid unit";
        }
        
        return result;
    }
    console.log(convertTemp(20, "K"));