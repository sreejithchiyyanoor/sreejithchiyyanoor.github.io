var d = new Date();
document.getElementById("date").innerHTML = d;
var inputNumber = "";
function myclick(value) {
    /*  if (value == '=') {
          getResult();     
      } else {
          inputNumber = inputNumber + value;
          document.getElementById('display').innerHTML = inputNumber;
      }
  }
  function getResult() {
      let result = eval(inputNumber);
      document.getElementById('display').innerHTML = eval(inputNumber).toString();
  
  }*/

    switch (value) {
        case "=":
            getResult();

            break;
        case "C":
            clear();
            break;
        case "<":
            backspace();
            break;

        default:
            inputNumber = inputNumber + value;
            document.getElementById('display').innerHTML = inputNumber;
    }
}
function getResult() {
    let result = eval(inputNumber);
    document.getElementById('answer').innerHTML = eval(inputNumber).toString();
    console.log(inputNumber);

}
function clear() {
    document.getElementById('display').innerHTML = '';
    document.getElementById('answer').innerHTML = '';
    inputNumber = '';
}
function backspace() {
    inputNumber = inputNumber.slice(0, inputNumber.length - 1);
    document.getElementById('display').innerHTML = inputNumber;
}
function keryboard(){
    
document.addEventListener("keydown", dealWithKeyboard, false);
}
var abc='see the diffrence';

function abdc(){

    document.getElementById("abc").innerHTML=abc;
console.log(abdc);

}
