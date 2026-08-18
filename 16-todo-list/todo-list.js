const todoList = [];

// Take our array and display each value on the page
/*.
  Steps (Algorith)
  1. Loop through the array
  2. Create some HTML code for each todo
  3. Put the HTML on web page
*/

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i <= todoList.length - 1; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
    <p>
      ${name} ${dueDate} 
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      ">Delete</button>
    </p>
    `;
    todoListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  // To get the text in the textbox
  // Get an element with the class "js-name-input" and put it into our JS
  const inputElement = document.querySelector(".js-name-input");

  // To get the text out use a property of the inputElement
  const name = inputElement.value;
  // console.log(name);

  // Get date selector element and put it into JS
  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  // Add a value to the array
  todoList.push({
    name: name,
    dueDate: dueDate,
  });

  // Reset the textbox empty
  inputElement.value = "";

  renderTodoList();
}
