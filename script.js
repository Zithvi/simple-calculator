function addNumbers(){

let number1 = Number(document.getElementById("num1").value);

let number2 = Number(document.getElementById("num2").value);

let answer = number1 + number2;

document.getElementById("result").innerHTML = "Result: " + answer;

}
