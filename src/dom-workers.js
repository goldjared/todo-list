import enableListeners from './index';

const content = document.querySelector('.content');
const sideBar = document.querySelector('.side-bar');

function todoBtn() {
  const createTodoBtn = document.createElement('button');
  createTodoBtn.classList.add('create-todo-btn');
  createTodoBtn.textContent = 'New Todo +';
  sideBar.appendChild(createTodoBtn);
}

function todoAddDisplay(todoObjIndex) {
  const createDisplay = document.createElement('div');
  createDisplay.classList.add('todo-display');

  content.appendChild(createDisplay);
  const convertTodoArray = todoObjIndex.info.split(',');
  convertTodoArray.forEach((item) => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo');
    todoItem.textContent = item;
    createDisplay.append(todoItem);
  });
  const todoCurrentStatus = document.createElement('div');
  todoCurrentStatus.classList.add('todo');
  todoCurrentStatus.setAttribute('id', 'status');
  todoCurrentStatus.textContent = `Status: ${todoObjIndex.status}`;
  createDisplay.appendChild(todoCurrentStatus);

  const todoItemIndexValue = document.createElement('div');
  todoItemIndexValue.setAttribute(
    'data-index',
    `${todoObjIndex.todoVaultIndex}`
  );
  todoItemIndexValue.classList.add('todo-index-value');
  createDisplay.appendChild(todoItemIndexValue);

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-btn');
  deleteButton.textContent = 'Delete';
  createDisplay.appendChild(deleteButton);

  const editButton = document.createElement('button');
  editButton.classList.add('edit-btn');
  editButton.textContent = 'Edit';
  createDisplay.appendChild(editButton);
}

function addGroup(todoArray) {
  todoArray.forEach((item) => {
    todoAddDisplay(item);
  });
  enableListeners();
}

function domDataIndexReducer(deletedIndexValue) {
  const todoDomIndexValues = document.querySelectorAll('.todo-index-value');

  todoDomIndexValues.forEach((currentTodo) => {
    if (currentTodo.dataset.index > deletedIndexValue) {
      currentTodo.dataset.index -= 1;
    }
  });
}

export { todoBtn, todoAddDisplay, addGroup, domDataIndexReducer };
