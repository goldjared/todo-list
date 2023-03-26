import './style.css';
import { todoCreate, modify, viewVault, projectView, getTodo } from './logic';
import homePage from './home';
import { todoAddDisplay, todoBtn, todoForm } from './dom-workers';

// console.log(viewVault(), 'view1');
// todoCreate('get the eggs', 'they are cheaper', 'high', 'project10');
// modify().todoStatus(0);
// console.log(viewVault(), 'view2');

// (todoCreate('get the', 'theaper', 'high', 'work'));

// (todoCreate('WASABI', 'theaper', 'high', 'project10'));
// console.log(viewTodo(0));
// console.log(projectView('project10'));
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
        todoDomDeleteHandler()
        // todoListeners();
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

// function todoListeners() {
//   const deleteTodoBtn = document.querySelectorAll('.delete-btn');
//   deleteTodoBtn.forEach((i) => {
//     const deleteTodoBtn = document.querySelectorAll('.delete-btn');
//     deleteTodoBtn.forEach(function (i) {})
//   })
//   deleteTodoBtn.forEach(function (i) {
//     i.addEventListener('click', function() {
//       console.log(i);
//     });
//   });
// }



// todoBtn();
// todoAddDisplay(getTodo(0))
// todoAddDisplay(getTodo(1))

function todoDomDeleteHandler() {
  const todoDeleteBtns = document.querySelectorAll('.delete-btn');
  // todoDeleteBtns.forEach((btn) => {
  //   btn.removeEventListener()
  //   });

  todoDeleteBtns.forEach((btn) => {
    if(btn.getAttribute('listener') === 'true') return;
    btn.setAttribute('listener', 'true');
    btn.addEventListener('click', (e) => {
      
      console.log(e.target.parentNode.data)
      e.target.parentNode.remove(); // del html element
      //modify().todoDelete()
      // html dataset reducer > -1
      // todoobj todovaultindex reducer > -1
      console.log(viewVault())
    });
  })  
}
// todoDomDeleteHandler()
       
// console.log(modify().todoDelete(0));