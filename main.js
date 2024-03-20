const counterNumber = document.querySelector("#counter");
const increaseButton = document.querySelector("#increase");
const decreaseButton = document.querySelector("#decrease");
const resetButton = document.querySelector("#reset");
const buttons = document.querySelectorAll(".btn");
let currentNumber = 0;

/* increaseButton.addEventListener("click", () => {
  currentNumber += 1;
  counterNumber.textContent = currentNumber;
  changeColor();
});
decreaseButton.addEventListener("click", () => {
  currentNumber -= 1;
  counterNumber.textContent = currentNumber;
  changeColor();
});
resetButton.addEventListener("click", () => {
  currentNumber = 0;
  counterNumber.textContent = currentNumber;
  changeColor();
});
*/
function changeColor() {
  if (currentNumber === 0) {
    counterNumber.style.color = "white";
  } else if (currentNumber < 0) {
    counterNumber.style.color = "red";
  } else if (currentNumber > 0) {
    counterNumber.style.color = "rgb(0, 197, 0)";
  }
}

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      currentNumber -= 1;
      counterNumber.textContent = currentNumber;
      changeColor();
    } else if (styles.contains("increase")) {
      currentNumber += 1;
      counterNumber.textContent = currentNumber;
      changeColor();
    } else {
      currentNumber = 0;
      counterNumber.textContent = currentNumber;
      changeColor();
    }
  });
});
