//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener('click', addTodo);

//Function 

function addTodo(Event) {
    //prevent form from submitting
    Event.preventDefault();
    //Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo")
    //create List
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //check Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //Append To list
    todoList.appendChild(todoDiv);
    // clear todoImport value
    todoInput.value = "";

}
// const divElement = document.createElement('div');
// divElement.className = 'tumi';

// divElement.setAttribute('id', 'ami');
// divElement.setAttribute('title', 'hello');
// const container = document.querySelector('.todo-container');
// container.appendChild(divElement)


