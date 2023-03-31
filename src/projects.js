import { projectView, projectList } from './logic';
import { todoAddDisplay } from './dom-workers';
export default function viewProjects() {
  const content = document.querySelector('.content');
  const projectContainer = document.createElement('div');
  projectContainer.classList.add('projects')
  projectContainer.textContent = 'projects n stuff';
  content.appendChild(projectContainer);

  const projectFormContainer = document.createElement('form');
  projectFormContainer.classList.add('project-display-form')
  content.appendChild(projectFormContainer);

  const projectFormLabel = document.createElement('label');
  projectFormLabel.setAttribute('for', 'projects');
  projectFormLabel.textContent = 'Projects:';
  const projectFormSelect = document.createElement('select');
  projectFormSelect.setAttribute('name', 'projects');
  projectFormSelect.setAttribute('id', 'projects');

  projectFormContainer.append(projectFormLabel, projectFormSelect);
  // get projects, create a option for each project name.
  function projectOptionCreate() {
    console.log(projectList());
    const currentOptions = projectList();
    currentOptions.forEach(project => {
      const projectOption = document.createElement('option');
      projectOption.setAttribute('value', project);
      projectOption.textContent = `${project}`;
      projectFormSelect.appendChild(projectOption);
    })
  const projectFormSubmit = document.createElement('input');
  projectFormSubmit.setAttribute('type', 'submit');
  projectFormSubmit.setAttribute('value', 'Enter');
  projectFormSubmit.classList.add('project-entry-btn');
  projectFormContainer.appendChild(projectFormSubmit);
  (function projectListListener() {
    const projectListEnterBtn = document.querySelector('.project-entry-btn');
  
    // projectListEnterBtn.forEach((btn) => {
    //   if (btn.getAttribute('listener') === 'true') return;
    //   btn.setAttribute('listener', 'true');
    projectListEnterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(projectFormSelect.value); // this is giving choice of select from submit btn
        // should call something, which the end result is it will display everything matching this value
        console.log(projectView(projectFormSelect.value)); // gets array of right projects
        const selectedTodoGroup = projectView(projectFormSelect.value);
        addGroup(selectedTodoGroup);

        // now i need to take that array, foreach on it, with add display on each item.
      });
  }())

  function addGroup(todoArray) {
    todoArray.forEach((item) => {
      todoAddDisplay(item)})
  }
    
  }


  return { projectOptionCreate }
}
