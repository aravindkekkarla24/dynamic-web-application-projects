function tipCalculation(){
    const inputBillAmountEl = document.getElementById("billAmount")
    const inputTipPercentageEl = document.getElementById("tipPercentage")

    const inputBillAmountValue = inputBillAmountEl.value
    const inputTipPercentageValue = inputTipPercentageEl.value

    const tip = (inputTipPercentageValue/100)*inputBillAmountValue
    const total = parseInt(inputBillAmountValue) + parseInt(tip)

    const tipAmount = document.getElementById("tip")
    const totalBillAmount = document.getElementById("totalBill")

    tipAmount.textContent = tip
    totalBillAmount.textContent = total


    if (inputBillAmountValue == ""){
        alert("Enter Bill Amount")
    }else if(inputTipPercentageValue ==""){
        alert("Enter Tip Percentage")
    }


    inputBillAmountEl.value = " "
    inputTipPercentageEl.value = " "

   


    
}