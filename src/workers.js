const content = document.querySelector('.content');

function todoBtn() {
  const createTodoBtn = document.createElement('button');
  createTodoBtn.classList.add('create-todo-btn');
  createTodoBtn.textContent = 'New Todo +';
  content.appendChild(createTodoBtn);
}

function todoAddDisplay(todo) {
  const createDisplay = document.createElement('div');
  createDisplay.classList.add('todo-display');
  content.appendChild(createDisplay);

  

  const displayArray = todo.info.split(',');
  
  console.log(displayArray);
  displayArray.forEach(item => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo');
    todoItem.textContent = item;
    createDisplay.appendChild(todoItem);
  })
  // 

  //each todo obj will be sent here, eg each todo objwill cll this.
  // so each time called, this will create a element of obj, and append it to todo display.
}

export { todoBtn, todoAddDisplay }
