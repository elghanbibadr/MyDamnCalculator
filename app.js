const inputBill=document.querySelector('#bill-input');
const tipBtns=document.querySelectorAll('.btn--primary');
const numberOfPeople=document.querySelector('#numbersOfPeople-input');
const tipAmount=document.querySelector('.tipPerPerson');
const total=document.querySelector('.totalPerPerson');
const reset=document.querySelector('.reset-btn');
// specifie the clicked button
tipBtns.forEach(btn=>{
   btn.addEventListener('click',(e)=>{
    tipBtns.forEach(btn=>btn.style.backgroundColor='hsl(183, 100%, 15%)')
      e.target.style.backgroundColor='hsl(172, 67%, 45%)';
     tipAmount.textContent=((parseInt(e.target.textContent)/100)*inputBill.value);
     updateAmountValue();
   });

});

     inputBill.addEventListener('input',updateAmountValue);
     numberOfPeople.addEventListener('input',updateAmountValue)
 // update amount value
  function updateAmountValue(){
     if (numberOfPeople.value==0) return;
   
      Math.round(total.textContent=(inputBill.value/numberOfPeople.value)+ parseInt(tipAmount.textContent)); 
   }
   // reset

  reset.addEventListener('click',()=>{
   window.location.reload();
  })