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