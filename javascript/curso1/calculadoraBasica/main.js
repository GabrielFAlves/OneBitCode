const num1 = prompt("Informe o primeiro número: ")
const num2 = prompt("Informe o segundo número: ")

const x = parseFloat(num1);
const y = parseFloat(num2);

const soma = x + y;
const sub = x - y;
const mult = x * y;
const divi = x / y;

alert(
    "Resultados:\n" +
    "\nSoma: " + soma +
    "\nSubtração: " + sub +
    "\nMultiplicação: " + mult +
    "\nDivisão: " + divi
  )