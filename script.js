let firstOperand = "";
let secondOperand = "";
let currentOperation = null;
let shouldResetScreen = false;

const currentDisplay = document.getElementById("current");
const historyDisplay = document.getElementById("history");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return null;
  return a / b;
}

function operate(operator, a, b) {
  const numA = Number(a);
  const numB = Number(b);

  switch (operator) {
    case "+":
      return add(numA, numB);
    case "-":
      return subtract(numA, numB);
    case "*":
      return multiply(numA, numB);
    case "/":
      return divide(numA, numB);
    default:
      return null;
  }
}

function resetScreen() {
  currentDisplay.textContent = "";
  shouldResetScreen = false;
}

function clear() {
  currentDisplay.textContent = "0";
  historyDisplay.textContent = "";
  firstOperand = "";
  secondOperand = "";
  currentOperation = null;
  shouldResetScreen = false;
}

function deleteNumber() {
  if (shouldResetScreen) return;
  if (currentDisplay.textContent === "Error") {
    clear();
    return;
  }
  currentDisplay.textContent = currentDisplay.textContent.slice(0, -1);
  if (currentDisplay.textContent === "") {
    currentDisplay.textContent = "0";
  }
}

function appendNumber(number) {
  if (currentDisplay.textContent === "0" || shouldResetScreen) {
    resetScreen();
  }
  if (number === "." && currentDisplay.textContent.includes(".")) return;
  currentDisplay.textContent += number;
}

function roundResult(number) {
  return Math.round(number * 100000) / 100000;
}

function setOperation(operator) {
  if (currentOperation !== null) evaluate();
  firstOperand = currentDisplay.textContent;
  currentOperation = operator;
  historyDisplay.textContent = `${firstOperand} ${operator}`;
  shouldResetScreen = true;
}

function evaluate() {
  if (currentOperation === null || shouldResetScreen) return;

  secondOperand = currentDisplay.textContent;
  const result = operate(currentOperation, firstOperand, secondOperand);

  if (result === null) {
    currentDisplay.textContent = "Error";
    historyDisplay.textContent = "";
    firstOperand = "";
    secondOperand = "";
    currentOperation = null;
    shouldResetScreen = true;
    return;
  }

  const formattedResult = roundResult(result);
  historyDisplay.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`;
  currentDisplay.textContent = formattedResult;
  firstOperand = formattedResult;
  currentOperation = null;
  shouldResetScreen = true;
}

// Event Listeners
document.querySelectorAll("[data-num]").forEach((button) => {
  button.addEventListener("click", () => appendNumber(button.dataset.num));
});

document.querySelectorAll("[data-operator]").forEach((button) => {
  button.addEventListener("click", () => setOperation(button.dataset.operator));
});

document
  .querySelector('[data-action="equals"]')
  .addEventListener("click", evaluate);
document
  .querySelector('[data-action="clear"]')
  .addEventListener("click", clear);
document
  .querySelector('[data-action="delete"]')
  .addEventListener("click", deleteNumber);

window.addEventListener("keydown", (e) => {
  if (e.key >= "0" && e.key <= "9") appendNumber(e.key);
  if (e.key === ".") appendNumber(e.key);
  if (e.key === "=" || e.key === "Enter") evaluate();
  if (e.key === "Backspace") deleteNumber();
  if (e.key === "Escape") clear();
  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
    setOperation(e.key);
  }
});
