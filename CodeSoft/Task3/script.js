const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
let input = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;

    if (value) {
      input += value;
      display.textContent = input;
    }
  });
});

document.getElementById("clear").addEventListener("click", () => {
  input = "";
  display.textContent = "0";
});

document.getElementById("equals").addEventListener("click", () => {
  try {
    input = eval(input).toString();
    display.textContent = input;
  } catch {
    display.textContent = "Error";
    input = "";
  }
});
// Percentage converts current input to value / 100
document.getElementById("percent").addEventListener("click", () => {
  try {
    input = (eval(input) / 100).toString();
    display.textContent = input;
  } catch {
    display.textContent = "Error";
    input = "";
  }
});

// Backspace removes last character
document.getElementById("backspace").addEventListener("click", () => {
  input = input.slice(0, -1);
  display.textContent = input || "0";
});
