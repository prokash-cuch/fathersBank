// input fild all
function getInputFiled (inputId) {
    const commonInputText = document.getElementById(inputId);
    const commonInputValue = parseFloat (commonInputText.value) ;
    commonInputText.value = '' ;
    return commonInputValue ;
}
// update deposit dash board and withdraw dash board
function allDashBoardUpdate (dashId,amountInputValue){
    const amountTotalText = document.getElementById(dashId);
    const amountTotal = parseFloat(amountTotalText.innerText);
    const previousAmountTotal = amountTotal + amountInputValue ;
    amountTotalText.innerText = previousAmountTotal ;
}
// update balance dash board
function updateBalance(amountInputValue,isAdd){
    const balanceTotal = document.getElementById("balance");
    const previousBalance = getCurrentBalance ();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalance + amountInputValue  ;
    }
    else{
        balanceTotal.innerText =  previousBalance - amountInputValue  ;
    }

}
// current balance
function getCurrentBalance (){
    const balanceTotal = document.getElementById("balance");
    const balanceTotalAmount = parseFloat(balanceTotal.innerText);
    return balanceTotalAmount ;
}

// deposit button handler
document.getElementById("deposit-button").addEventListener('click',function(){
    //deposit input fild
    const depositInputValue = getInputFiled ("deposit-inputFild") ;
    if (depositInputValue > 0 ){
        // dash borad update
        allDashBoardUpdate ("deposit",depositInputValue);
        // update balance
        updateBalance(depositInputValue,true)
    }
    
})
// withdraw button handler
document.getElementById("withdraw-button").addEventListener('click',function(){
    // withdraw input fild
    const withdrawInputValue = getInputFiled ("withdraw-inputFild") ;
    // current balance
    const currentBalance = getCurrentBalance() ;
   if (withdrawInputValue > 0 && withdrawInputValue <= currentBalance){
    // dash borad update
    allDashBoardUpdate ("withdraw",withdrawInputValue);
    // update balance
    updateBalance(withdrawInputValue,false)
   }
})