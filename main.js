const totalPerPersonText = document.getElementById('billAmount');
const totalNumberOfPersonText = document.getElementById('numberOfPerson');
const calculateButton = document.getElementById('calculateButton');
const tipAmount = document.getElementById('tip-amount');
const totalPerPerson = document.getElementById('total-per');

calculateButton.addEventListener('click', () => {
    let totalSum = Number(totalPerPersonText.value); 

    let chooseRadio = document.querySelector('input[name="tip"]:checked');
    let tipPercent = Number(chooseRadio.value.slice(0,1) ) / 100;

    let totalTip = Math.round((totalSum * tipPercent * 100) / 100); 
    let totalAmountDue = Math.round((totalTip + totalSum) /  Number(totalNumberOfPersonText.value) * 100) / 100;

    // totalPerPerson.innerText = formatPrice(totalAmountDue);
    // tipAmount.innerText = formatPrice(totalTip);
   
    totalPerPerson.innerText = totalAmountDue;
    tipAmount.innerText = totalTip;
})

// const formatPrice = (price) => {
//     let reVal = price.toString();
//     let parts = reVal.split('.');

//     if(parts[1].length === 0 ){
//         reVal += "0";
//     }
//     if(parts[0].length === 1){
//         reVal = "0"  + reVal;
//     }
//     return reVal;
// }
