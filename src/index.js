import './style.css';
import { todoCreate, getTodo, modify, xlocalStorage } from './logic';
import homePage from './home';
import todoForm from './form';
import viewProjects from './projects';
import { todoAddDisplay, todoBtn, domDataIndexReducer } from './dom-workers';

homePage();
todoBtn(); //todo btn is created
const launchFormBtn = document.querySelector('.create-todo-btn');
launchFormBtn.addEventListener('click', () => {
  if (document.querySelector('.todo-form')) {
    document.querySelector('.todo-form').remove();
    return;
  }
  todoForm();
  enableFormListener();
});

function enableFormListener() {
  const form = document.querySelector('.todo-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.submitter.innerText);
    switch (e.submitter.innerText) {
      case 'Submit':
        todoCreate(
          form.title.value,
          form.description.value,
          form.priority.value,
          form.project.value
        );
        // console.log(getTodo());
        todoAddDisplay(getTodo());
        document.querySelector('.todo-form').remove();
        enableListeners();
        break;
      case 'Reset':
        form.reset();
        break;
      case 'x':
        document.querySelector('.todo-form').remove();
        break;
      default:
        alert('ERROR');
    }
    // todoCreate(form.title.value, form.description.value, form.priority.value, form.project.value);
    // console.log(viewTodo(0));
  });
}

export default function enableListeners() {
  (function todoUpdateStatusHandler() {
    const todoStatusBtns = document.querySelectorAll('.edit-btn');
    todoStatusBtns.forEach((btn) => {
      if (btn.getAttribute('listener') === 'true') return;
      btn.setAttribute('listener', 'true');
      btn.addEventListener('click', (e) => {
        console.log(e.target.parentNode.querySelector('#status').textContent);
        const currentTodoStatus =
          e.target.parentNode.querySelector('#status').textContent;
        const currentTodoIndex =
          e.target.parentNode.querySelector('.todo-index-value').dataset.index;
        modify().todoStatus(currentTodoIndex); // i think status could call a DomStatus func
        if (currentTodoStatus === 'Status: incomplete') {
          e.target.parentNode.querySelector('#status').textContent =
            'Status: complete';
        } else {
          e.target.parentNode.querySelector('#status').textContent =
            'Status: incomplete';
        }
      });
    });
  })(); // this needed a semi colon, for this to work.

  (function todoDeleteHandler() {
    const todoDeleteBtns = document.querySelectorAll('.delete-btn');

    todoDeleteBtns.forEach((btn) => {
      if (btn.getAttribute('listener') === 'true') return;
      btn.setAttribute('listener', 'true');
      btn.addEventListener('click', (e) => {
        const currentTodoIndex = e.target.previousElementSibling.dataset.index;
        // console.log(e.target.previousElementSibling.dataset.index);
        domDataIndexReducer(currentTodoIndex); // reduce all html data val
        modify().todoDelete(currentTodoIndex); // delete the todo from vault
        e.target.parentNode.remove(); // del html element

        // console.log(viewVault());
      });
    });
  })();
}
// debug to create todos.
for (let i = 0; i < 5; i++) {
  todoCreate(`${[i]}`, 'yoo', 'high', 'wateru');
  todoAddDisplay(getTodo());
}

function tabListener() {
  const pageTabs = document.querySelectorAll('a');
  const content = document.querySelector('.content');

  pageTabs.forEach((btn) => {
    // if (btn.getAttribute('listener') === 'true') return;
    // btn.setAttribute('listener', 'true');

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(e.target.textContent);
      // console.log(content.lastChild)
      while (content.lastChild) {
        content.lastChild.remove();
      }
      const pageSelection = e.target.textContent;
      if (pageSelection === 'Home') {
        homePage();
      } else {
        viewProjects().projectOptionCreate();
      }
    });
  });
}
// xlocalStorage().getStorage();
// if there is local storage, for each item, todo create, and add to display.
if(xlocalStorage().checkLocalStorage() === true) {
  xlocalStorage().getStorage().forEach((item) => {
    todoCreate(item.title, item.description, item.priority, item.project, item.status, item.createdDate);
    todoAddDisplay(getTodo());
  })
}

// xlocalStorage().checkLocalStorage();
enableListeners();
tabListener();
// xlocalStorage().uploadStorage();


export { enableListeners };
