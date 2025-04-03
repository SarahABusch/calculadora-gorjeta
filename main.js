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
  
  removeClassButtonSelected()

  document.querySelector("#custom-tip").value = ""

  buttonSelected = document.querySelector(`#button-$(value)`)
  buttonSelected.classList.add("button-selected")
  caculate()
}

function reciveCustomTipPercentageValue (){
    tipPercentage = document.querySelector("#custom-tip").valueAsNumber / 100
    removeClassButtonSelected()
    caculate()
}

function removeClassButtonSelected(){
    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected")
        buttonSelected = null 
    }
}

function caculate() {
    if (bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0){
       let tipAmountStrong = querySelector(". amount strong")
       let tipAmountPerson = bill * tipPercentage / numberOfPeople
       tipAmountStrong.innerText = `$${tipAmountPerson.toFixed(2)}`

       let totalStrong = document.querySelector(". total strong")
       let totalPerson = (bill / numberOfPeople) + tipAmountPerson

       totalStrong.innerText = `$${totalPerson.toFixed(2)}`
    }
    
    
}