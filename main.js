/* Set Max Length of an input type number */
document.querySelectorAll('input[type="number"]').forEach((input) => {
  input.oninput = () => {
    if (input.value.length > input.maxLength)
      input.value = input.value.slice(0, input.maxLength);
  };
});

/* Selecting all the elements for DOM manipulation */
const cardNumber = document.getElementById("card-number");
const cardholderName = document.getElementById("cardholder-name");
const cvc = document.getElementById("cvc");
const expDate = document.querySelector(".expire-date");
const payBtn = document.querySelector(".pay-btn");

payBtn.addEventListener("click", function () {
  const cardNumberFormat = cardNumber.value.split("");
  cardNumberFormat.splice(4, 0, "-");
  cardNumberFormat.splice(9, 0, "-");
  cardNumberFormat.splice(14, 0, "-");

  if (
    cardNumber.value === "" ||
    cardholderName.value === "" ||
    expDate.value === 0 ||
    cvc.value === ""
  ) {
    alert("Please fill all the inputs to continue");
  } else {
    document.querySelector(".card-number").textContent =
      cardNumberFormat.join("");
    document.querySelector(".cardholder-name").textContent =
      cardholderName.value;
    document.querySelector(".exp-date").textContent = expDate.value;
  }
  document.querySelector(".circle--2").classList.add("color-green");
  document.querySelector(".progress-bar-white").classList.add("color-green");
});
