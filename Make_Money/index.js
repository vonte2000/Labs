const body = document.getElementById("body")
const money = document.getElementById("money")
let counter = 0

const makeMoney = () => {
    //checks value for number input
    //checks which coil/select input chosen
    //creates new div(s) with appropriate class based on previous criteria
    const newPenny = document.createElement("div")
    newPenny.classList.add("penny")

    const newNickel = document.createElement("div")
    newNickel.classList.add("nickel")

    const newDime = document.createElement("div")
    newDime.classList.add("dime")

    const newQuarter = document.createElement("div")
    newQuarter.classList.add("quarter")
}