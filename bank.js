const depositSubmitBtn = document.getElementById('depositSubmit-btn').addEventListener('click',function(){
    const depositInput = document.getElementById('deposit-input');
    const newdeposit = depositInput.value;
    depositInput.value ='';
    const newDepositAmount = parseFloat(newdeposit);

    const previousDeposit = document.getElementById('deposit');
    const previousDepositText = previousDeposit.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    const DepositTotal = newDepositAmount + previousDepositAmount;
    previousDeposit.innerText = DepositTotal; 

    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText =  totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);

    const balace = totalBalanceAmount + newDepositAmount;
    totalBalance.innerText = balace;
 })

document.getElementById('withdrawSubmitBtn').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const NewwithdrawAmount = parseFloat(withdrawInputText);
    withdrawInput.value = '';

    const PreWithdraw = document.getElementById('withdraw');
    const PreWithdrawText = PreWithdraw.innerText;
    const preWithdrawAmount = parseFloat(PreWithdrawText);

    const totalWithdraw = preWithdrawAmount + NewwithdrawAmount;
    PreWithdraw.innerText = totalWithdraw;
    
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText =  totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);

    const balace = totalBalanceAmount - NewwithdrawAmount;
    totalBalance.innerText = balace;


})