/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-field")
const convertBtnEl = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-conversion-display")
const volumeEl = document.getElementById("volume-conversion-display")
const massEl = document.getElementById("mass-conversion-display")

convertBtnEl.addEventListener("click", function() {
    const number = inputEl.value;
    
    const valueInFeetFromMeter = (number * 3.281).toFixed(2)
    const valueInMeterFromFeet = (number / 3.281).toFixed(2)
    
    const valueInLiterFromGallon = (number * 0.264).toFixed(2)
    const valueInGallonFromLiter = (number / 0.264).toFixed(2)
    
    const valueInKiloFromPound = (number * 2.204).toFixed(2)
    const valueInPoundFromKilo = (number / 2.204).toFixed(2)
    
    lengthEl.textContent = `${number} meters = ${valueInFeetFromMeter} feet 
                                | 
                            ${number} feet = ${valueInMeterFromFeet} meters`
                            
    volumeEl.textContent = `${number} liters = ${valueInGallonFromLiter} gallons 
                                | 
                            ${number} gallons = ${valueInLiterFromGallon} liters`
    
    massEl.textContent = `${number} kilos = ${valueInPoundFromKilo} pounds 
                                | 
                            ${number} pounds = ${valueInKiloFromPound} kilos`
})


