let cart = document.getElementById("totalCart");
let inputPrice = document.getElementById("inputPrice");
let enterButton = document.getElementById("enterButton");
let totalToSpend = document.getElementById("totalToSpend")
let clearButton = document.getElementById("clearButton");

let checkout = Number(0); 
enterButton.onclick = function(){
    let temp = inputPrice.value; 
    let total =+ Number(temp);
    checkout += total;

    cart.innerHTML = `Your total is: $${checkout}`;
}
