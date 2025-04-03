let bill = 0
let tipPercentage = 0
let numberOfPeople = 0
let buttonSelected = null

let billInput = document.querySelector("#bill")
billInput.addEventListener("input", reciveBillValue)

let numberOfPeopleInput = document.querySelector("#people")
numberOfPeopleInput.addEventListener("input", reciveNumberOfPeopleValue )

function reciveBillValue(){
 bill = billInput.valueAsNumber
 caculate()
}

function reciveNumberOfPeopleValue() {
 numberOfPeople = numberOfPeopleInput.valueAsNumber
 caculate()
}

function reciveTipPercentageValue (value){
  tipPercentage = value / 100
  
  
  buttonSelected = document.querySelector("")
}

function caculate() {
    if (bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0){
        console.log ("É possível calcular")
    }
    else {
        console.log("Não é possível calcular")  
    }
    
}