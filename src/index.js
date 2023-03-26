import './style.css';
import { todoCreate, modify, viewVault, projectView, getTodo } from './logic';
import homePage from './home';
import { todoAddDisplay, todoBtn, todoForm, domDataIndexReducer } from './dom-workers';

homePage(); //todo btn is created


const launchFormBtn = document.querySelector('.create-todo-btn');
launchFormBtn.addEventListener('click', () => {
  if(document.querySelector('form')) {
    document.querySelector('form').remove()
    return;
  }
  console.log('what')
  todoForm();
  enableFormListener();
});

function enableFormListener() {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.submitter.innerText)
    switch(e.submitter.innerText) {
      case 'Submit':
        todoCreate(form.title.value, form.description.value, form.priority.value, form.project.value);
        todoAddDisplay(getTodo());
        document.querySelector('form').remove();
        todoDeleteHandler();
        break;
      case 'Reset':
        form.reset();
        break;
      case 'x':
        document.querySelector('form').remove();
        break;
      default:
        alert('ERROR');
    }
    // todoCreate(form.title.value, form.description.value, form.priority.value, form.project.value);
    // console.log(viewTodo(0));
  
  });  
}

function todoDeleteHandler() {
  const todoDeleteBtns = document.querySelectorAll('.delete-btn');

  todoDeleteBtns.forEach((btn) => {
    if(btn.getAttribute('listener') === 'true') return;
    btn.setAttribute('listener', 'true');
    btn.addEventListener('click', (e) => {
      const currentTodoIndex = e.target.previousElementSibling.dataset.index
      domDataIndexReducer(currentTodoIndex); // reduce all html data val
      modify().todoDelete(currentTodoIndex); // delete the todo from vault
      e.target.parentNode.remove(); // del html element

      console.log(viewVault())
    });
  })  
}