function calcAmount() {
let price = 990;
let amountInput = document.querySelector("input[name='amount-input']");
let showAmount = document.querySelector("span.show-amount");
let amountNumber = parseInt(amountInput.value);

if (amountNumber > 10) {alert("Maximum purchase 10")}
else if (amountNumber < 1) {alert("Minimum purchase 1")}
else {let amount = parseInt(amountInput.value) * price;
showAmount.innerHTML = amount;}
}

let menuAmountInput = document.querySelector("input[name='menuAmount']");
if (menuAmountInput < 1) {nemuAmountInput = 0;} 