const todoVault = [];
const projectVault = ['default'];

function currentDate() {
  const date = new Date();

  function formatDate() {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const formattedDate = `${month}/${day}/${year}`;
    return formattedDate;
  }
  return formatDate();
}

function projectCreate(project) {
  const projectChecker = projectVault.find((item) => item === project);

  if (projectChecker === undefined) {
    projectVault.push(project);
  }
}

function projectView(verifyProject) {
  const selectedProjectList = []
  todoVault.forEach((todoItem) => {
    if (todoItem.project === verifyProject) {
      
      selectedProjectList.push(todoItem);
      
    }
    
  });
  return selectedProjectList;
}

function projectList() {
  return [...new Set(projectVault)];
}

function todoCreate(title, description, priority, projectName) {
  const createdDate = currentDate();
  const status = 'incomplete';
  let project;
  const todoVaultIndex = todoVault.length;

  if (projectName === '') {
    project = 'default';
  } else {
    project = projectName;
    projectCreate(project);
  }

  const info = `${title},${description},Priority: ${priority},Project: ${project},Created: ${createdDate}`;

  return todoVault.push({
    title,
    description,
    priority,
    createdDate,
    status,
    project,
    info,
    todoVaultIndex,
  });
}
function modify() {
  function todoStatus(todoIndex) {
    if (todoVault[todoIndex].status === 'incomplete') {
      todoVault[todoIndex].status = 'complete';
      console.log('status changed to complete - mod.status()', `index: ${todoIndex}`)
    } else {
      todoVault[todoIndex].status = 'incomplete';
      console.log('status changed to incomplete - mod.status()', `index: ${todoIndex}`)
    }
  }

  function todoDelete(todoIndex) {
    todoVault.splice(todoIndex, 1);
    todoVault.forEach((currentTodo) => {
      if (currentTodo.todoVaultIndex > todoIndex) {
        currentTodo.todoVaultIndex -= 1;
      }
    });
  }

  return { todoStatus, todoDelete };
}

function viewVault() {
  return todoVault;
}

function getTodo(todoIndex) {
  if (todoIndex !== undefined) {
    return todoVault[todoIndex];
  }

  return todoVault[todoVault.length - 1];
}

export { getTodo, modify, todoCreate, viewVault, projectView, currentDate, projectList };
