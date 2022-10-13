const meter = 3.281
const feet = 1/meter
const liter = 0.264
const gallon = 1/liter
const kilogram = 2.204
const pound = 1/kilogram

const lenTxt = document.getElementById("length")
const volTxt = document.getElementById("volume")
const massTxt = document.getElementById("mass")
const input = document.getElementById("input-value")
const inputBtn = document.getElementById("input-btn")

let inputValue = 0

inputBtn.addEventListener("click", function() {
    inputValue = Number(input.value)
    lenTxt.innerText = `${inputValue} meters = ${convert(inputValue, meter).toFixed(3)} feets | ${inputValue} feet = ${convert(inputValue, feet).toFixed(3)} meters`
    volTxt.innerText = `${inputValue} liters = ${convert(inputValue, liter).toFixed(3)} gallons | ${inputValue} gallons = ${convert(inputValue, gallon).toFixed(3)} liters`
    massTxt.innerText = `${inputValue} kilos = ${convert(inputValue, kilogram).toFixed(3)} pounds | ${inputValue} pounds = ${convert(inputValue, pound).toFixed(3)} kilos`
})

function convert (input,conversion) {
    return input*conversion
}