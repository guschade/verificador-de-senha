function isPerfectSquare(number) {
  let sqrt = Math.sqrt(number);
  return Number.isInteger(sqrt);
}

function checkPerfectSquare() {
  var numberInput = document.getElementById("numberInput").value;
  var output = document.getElementById("output");

  var isPerfectSquare = Math.sqrt(numberInput) % 1 === 0;

  if (isPerfectSquare) {
    document.body.className = "perfect-square";

    output.innerHTML = numberInput + " é um quadrado perfeito!";
  } else {
    document.body.className = "not-perfect-square";

    output.innerHTML = numberInput + " não é um quadrado perfeito!";
  }
}
