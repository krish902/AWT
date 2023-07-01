function validation() {
  let num1 = parseInt(document.getElementById("n1").value);
  let num2 = parseInt(document.getElementById("n2").value);
  document.getElementById("n11").innerHTML = "";
  document.getElementById("n21").innerHTML = "";
  if (isNaN(num1) || num1 === "") {
    document.getElementById("n11").style.color = "red";
    document.getElementById("n11").textContent = " *Please enter valid number";
  } else if (isNaN(num2) || num2 === "") {
    document.getElementById("n21").style.color = "red";
    document.getElementById("n21").textContent = " *Please enter valid number";
  }
}
function add() {
  let num1 = parseInt(document.getElementById("n1").value);
  let num2 = parseInt(document.getElementById("n2").value);
  validation();
  res = num1 + num2;
  document.getElementById("ans").innerHTML = res;
}
function sub() {
  let num1 = parseInt(document.getElementById("n1").value);
  let num2 = parseInt(document.getElementById("n2").value);
  validation();
  res = num1 - num2;
  document.getElementById("ans").innerHTML = res;
}
function mul() {
  let num1 = parseInt(document.getElementById("n1").value);
  let num2 = parseInt(document.getElementById("n2").value);
  validation();
  res = num1 * num2;
  document.getElementById("ans").innerHTML = res;
}
function div() {
  let num1 = parseInt(document.getElementById("n1").value);
  let num2 = parseInt(document.getElementById("n2").value);
  validation();
  res = num1 / num2;
  document.getElementById("ans").innerHTML = res;
}
