/* 
  Process for JavaScript
    1. Figure out what steps we need (algorithm)
    2. Convert these steps in code 
*/

function subscribe() {
  const buttonElement = document.querySelector(".js-subscribe-button");

  if (buttonElement.innerText === "Subscribe") {
    buttonElement.innerHTML = "Subscribed";
    buttonElement.classList.add("is-subscribed");
  } else {
    buttonElement.innerHTML = "Subscribe";
    buttonElement.classList.remove("is-subscribed");
  }
}

function calculateTotal() {
  const inputElement = document.querySelector(".js-cost-input");
  // Nmber(): convert string value from <input> to a number for accurate mathematical calculations
  let cost = Number(inputElement.value);

  if (cost < 40) {
    cost += 10;
  }

  document.querySelector(".js-total-cost").innerHTML = `$${cost}`;
}

// Keyboard event
function handleCostKeydown(event) {
  console.log(event.key);

  if (event.key === "Enter") {
    calculateTotal();
  }
}
