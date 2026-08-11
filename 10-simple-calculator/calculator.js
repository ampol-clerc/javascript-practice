/* When the page first loads, get the calculation using .getItem()
      Use a default value of "" if a calculation doesn't exist in local storage */
// Load initial calculation values from LocalStorage
let calculation = localStorage.getItem("calculation") || "";

// Display the calculation when the page first loads
displayCalculation();

// There's a lot of duplicated code in the buttons
// Create a function updateCalculation and reuse the code
function updateCalculation(value) {
  calculation += value;

  // Display the calculation on the page
  displayCalculation();

  // Whenever update the calculation, save it using .setItem()
  localStorage.setItem("calculation", calculation);
}

function displayCalculation() {
  document.querySelector(".js-calculation").innerHTML = calculation;
}
