const content = document.querySelector('.content');

function todoBtn() {
  const createTodoBtn = document.createElement('button');
  createTodoBtn.classList.add('create-todo-btn');
  createTodoBtn.textContent = 'New Todo +';
  content.appendChild(createTodoBtn);
  
    
}

function todoAddDisplay(todoObjIndex) {
  const createDisplay = document.createElement('div');
  createDisplay.classList.add('todo-display');
  
  content.appendChild(createDisplay);
  

  

  const convertTodoArray = todoObjIndex.info.split(',');
  
  // console.log(convertTodoArray);
  convertTodoArray.forEach(item => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo');
    todoItem.textContent = item;
    createDisplay.appendChild(todoItem);
  });
  const todoItemIndexValue = document.createElement('div');
  todoItemIndexValue.setAttribute('data-index', `${todoObjIndex.todoVaultIndex}`);
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

  //  each todo obj will be sent here, eg each todo objwill cll this.
  //  so each time called, this will create a element of obj, and append it to todo display.
}

function domDataIndexReducer(deletedIndexValue) {
  const todoDomIndexValues = document.querySelectorAll('.todo-index-value');

  todoDomIndexValues.forEach((currentTodo) => {
    if(currentTodo.dataset.index > deletedIndexValue) {
      currentTodo.dataset.index -= 1;
    }
    });

}

export { todoBtn, todoAddDisplay, domDataIndexReducer }
