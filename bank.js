const depositSubmitBtn = document.getElementById('depositSubmit-btn').addEventListener('click',function(){
    const depositInput = document.getElementById('deposit-input');
    const newdeposit = depositInput.value;
    const newDepositAmount = parseFloat(newdeposit);
    const previousDeposit = document.getElementById('deposit');
    const previousDepositText = previousDeposit.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    // depositContainer.innerText = deposit;
    const newDepositTotal = newDepositAmount + previousDepositAmount;
    previousDeposit.innerText = newDepositTotal; 
 })










//  const withdrawSubmitBtn = document.getElementById('withdrawSubmitBtn').addEventListener('click',function(){
//     const withdrawInput = document.getElementById('withdraw-input');
//     const withdraw = withdrawInput.value;
//     const withdrawContainer = document.getElementById('withdraw');
//     withdrawContainer.innerText = withdraw;
//  })