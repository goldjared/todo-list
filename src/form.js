export default function todoForm() {
  const content = document.querySelector('.content');

  console.log('sfjafafsafsa');
  const formContainer = document.createElement('form');
  content.appendChild(formContainer);


  const formHeader = document.createElement('div');
  formHeader.classList.add('form-header');
  formHeader.textContent = 'Add Todo';
  // formContainer.appendChild(formHeader)

  

  const formTitleLabel = document.createElement('label');
  formTitleLabel.setAttribute('for', 'title');
  formTitleLabel.textContent = 'Title *'
  const formTitleInput = document.createElement('input');
  formTitleInput.setAttribute('type', 'text');
  formTitleInput.setAttribute('id', 'title');
  formTitleInput.setAttribute('name', 'title');
  formTitleInput.setAttribute('required', '');
  formTitleInput.setAttribute('placeholder', 'Gym tomorrow AM')

  const formDescLabel = document.createElement('label');
  formDescLabel.setAttribute('for', 'description');
  formDescLabel.textContent = 'Description *'
  const formDescInput = document.createElement('textarea');
  // formDescInput.setAttribute('type', 'text');
  formDescInput.setAttribute('id', 'description');
  formDescInput.setAttribute('name', 'description');
  formDescInput.setAttribute('required', '');
  formDescInput.setAttribute('placeholder', 'Pull day w/ cardio.')


  const formPriorityTitle = document.createElement('div');
  formPriorityTitle.textContent = 'Select Priority'
  formPriorityTitle.classList.add('form-priority-title');

  const formPriorityInput1 = document.createElement('input');
  formPriorityInput1.setAttribute('type', 'radio');
  formPriorityInput1.setAttribute('id', 'priority1');
  formPriorityInput1.setAttribute('name', 'priority');
  formPriorityInput1.setAttribute('value', 'low');
  const formPriorityLabel1 = document.createElement('label');
  formPriorityLabel1.setAttribute('for', 'priority1');
  formPriorityLabel1.textContent = 'Low';

  const formPriorityInput2 = document.createElement('input');
  formPriorityInput2.setAttribute('type', 'radio');
  formPriorityInput2.setAttribute('id', 'priority2');
  formPriorityInput2.setAttribute('name', 'priority');
  formPriorityInput2.setAttribute('value', 'normal');
  formPriorityInput2.setAttribute('checked', '');
  const formPriorityLabel2 = document.createElement('label');
  formPriorityLabel2.setAttribute('for', 'priority2');
  formPriorityLabel2.textContent = 'Normal';

  const formPriorityInput3 = document.createElement('input');
  formPriorityInput3.setAttribute('type', 'radio');
  formPriorityInput3.setAttribute('id', 'priority3');
  formPriorityInput3.setAttribute('name', 'priority');
  formPriorityInput3.setAttribute('value', 'high');
  const formPriorityLabel3 = document.createElement('label');
  formPriorityLabel3.setAttribute('for', 'priority3');
  formPriorityLabel3.textContent = 'High';

  const formProjectLabel = document.createElement('label');
  formProjectLabel.setAttribute('for', 'project');
  formProjectLabel.textContent = 'Project'
  const formProjectInput = document.createElement('input');
  formProjectInput.setAttribute('type', 'text');
  formProjectInput.setAttribute('id', 'project');
  formProjectInput.setAttribute('name', 'project');
  formProjectInput.setAttribute('placeholder', 'Leave blank for default')


  const formSubmitBtn = document.createElement('button');
  formSubmitBtn.classList.add('form-submit-btn');
  formSubmitBtn.textContent = 'Submit';

  const formResetBtn = document.createElement('button');
  formResetBtn.classList.add('form-reset-btn');
  formResetBtn.textContent = 'Reset';

  const formExitBtn = document.createElement('button');
  formExitBtn.classList.add('form-exit-btn');
  formExitBtn.textContent = 'x';

  const formRow1 = document.createElement('div');
  formRow1.classList.add('form-row-1');
  formRow1.append(formHeader, formExitBtn)

  const formRow2 = document.createElement('div');
  formRow2.classList.add('form-row-2');
  formRow2.append(formTitleLabel, formTitleInput)

  const formRow3 = document.createElement('div');
  formRow3.classList.add('form-row-3');
  formRow3.append(formDescLabel, formDescInput)

  const formRow4 = document.createElement('div');
  formRow4.classList.add('form-row-4');
  formRow4.append(formPriorityTitle, formPriorityInput1, formPriorityLabel1, formPriorityInput2, formPriorityLabel2, 
  formPriorityInput3, formPriorityLabel3)

  const formRow5 = document.createElement('div');
  formRow5.classList.add('form-row-5');
  formRow5.append(formProjectLabel, formProjectInput)

  const formRow6 = document.createElement('div');
  formRow6.classList.add('form-row-6');
  formRow6.append(formSubmitBtn, formResetBtn)
    
  formContainer.append(formRow1, formRow2 , formRow3, formRow4, 
    formRow5, formRow6)
}