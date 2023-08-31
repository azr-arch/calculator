const calculatorOperations = {
  del: handleDelete,
  reset: handleReset,
  "=": evaluate,
  "/": operations,
  "+": operations,
  "-": operations,
  "*": operations,
};

const themes = ["primary", "secondary", "tertiary"];

let currTheme = localStorage.getItem("currTheme");
if (!currTheme) {
  currTheme = "0";
  localStorage.setItem("currTheme", currTheme);
}

document.documentElement.setAttribute("data-theme", themes[currTheme]);

const themeToggle = document.getElementById("theme-toggle");
themeToggle.onclick = changeTheme;

function changeTheme() {
  currTheme = (currTheme + 1) % 3;
  localStorage.setItem("currTheme", currTheme);
  document.documentElement.setAttribute("data-theme", themes[currTheme]);
}

const buttonsEl = document.querySelectorAll("#numbers");
const operationsEl = document.querySelectorAll("#operations");
const decimalBtn = document.getElementById("decimal");

const outputPrevious = document.getElementById("previous-value");
const outputCurrent = document.getElementById("current-value");

buttonsEl.forEach((button) => {
  button.addEventListener("click", (e) => handleNumsClick(e));
});

decimalBtn.addEventListener("click", (e) => handleDecimal(e));

function handleNumsClick(e) {
  const value = e.currentTarget.dataset.value;
  if (
    outputCurrent.innerText === "0" ||
    outputCurrent.innerText.includes("N") ||
    outputCurrent.innerText.includes("I")
  ) {
    outputCurrent.innerText = value;
  } else {
    outputCurrent.innerText += value;
  }
}

function handleDecimal(e) {
  if (outputCurrent.innerText.includes(".")) return;
  outputCurrent.innerText += ".";
}

operationsEl.forEach((operationBtn) => {
  operationBtn.addEventListener(
    "click",
    calculatorOperations[operationBtn.dataset.value]
  );
});

function handleDelete() {
  let currText = outputCurrent.innerText;
  if (
    currText.length === 1 ||
    //for infinity
    currText.includes("I") ||
    //for NaN
    currText.includes("N")
  ) {
    outputCurrent.innerText = 0;
    return;
  }
  outputCurrent.innerText = currText.slice(0, currText.length - 1);
}

function handleReset() {
  outputCurrent.innerText = "0";
  outputPrevious.innerText = "";
}

function operations(e) {
  if (outputPrevious.innerText === "") {
    //helps in shifting values to above fox UX
    outputPrevious.innerText =
      outputCurrent.innerText + " " + e.currentTarget.dataset.value;
    outputCurrent.innerText = "0";
  } else {
    //operation was made consequently
    evaluate(false, e);
  }
}

function evaluate(fromEquals = true, e = null) {
  if (outputPrevious.innerText === "") return;
  let finalVal = outputPrevious.innerText + outputCurrent.innerText;
  //if operation was made from equals buttons
  if (fromEquals) {
    outputCurrent.innerText = eval(finalVal).toString();
    outputPrevious.innerText = "";
  } else {
    outputPrevious.innerText =
      eval(finalVal).toString() + " " + e.currentTarget.dataset.value;
    outputCurrent.innerText = "0";
  }
}
