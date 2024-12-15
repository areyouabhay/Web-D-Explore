const display = document.querySelector(".result");
function sum() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  if (isNaN(num1) || isNaN(num2)) {
    display.innerText = "Please enter valid numbers";
    return;
  }
  const result = num1 + num2;
  display.innerText = result;
}

function difference() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  if (isNaN(num1) || isNaN(num2)) {
    display.innerText = "Please enter valid numbers";
    return;
  }
  const result = num1 - num2;
  display.innerText = result;
}

function multiply() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  if (isNaN(num1) || isNaN(num2)) {
    display.innerText = "Please enter valid numbers";
    return;
  }
  const result = num1 * num2;
  display.innerText = result;
}

function divide() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  if (isNaN(num1) || isNaN(num2)) {
    display.innerText = "Please enter valid numbers";
    return;
  }
  if (num2 === 0) {
    display.innerText = "Cannot divide by zero";
  } else {
    const result = num1 / num2;
    display.innerText = result;
  }
}
function clearResult() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  display.innerText = "0";
}
