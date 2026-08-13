const todoList = [];

function addTodo() {
  // To get the text in the textbox
  // Get an element with the class "js-name-input" and put it into our JS
  const inputElement = document.querySelector(".js-name-input");

  // To get the text out use a property of the inputElement
  const name = inputElement.value;
  // console.log(name);

  // Add a value to the array
  todoList.push(name);
  console.log(todoList);

  // Reset the textbox empty
  inputElement.value = "";
}
