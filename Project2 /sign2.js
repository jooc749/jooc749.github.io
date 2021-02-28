var button = document.getElementById("submitButton");
var nameField = document.getElementById("name");
var sign = document.getElementById("sign");

function createSign(){
  sign.innerText = nameField.value;
}

button.addEventListener("click",createSign,false);