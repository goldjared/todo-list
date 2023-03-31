import { projectView, projectList } from './logic';

export default function viewProjects() {
  const content = document.querySelector('.content');
  const projectContainer = document.createElement('div');
  projectContainer.classList.add('projects')
  projectContainer.textContent = 'projects n stuff';
  content.appendChild(projectContainer);

  const projectFormContainer = document.createElement('form');
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
    
  }
  return { projectOptionCreate }
}
