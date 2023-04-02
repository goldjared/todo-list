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
  console.log(todoVaultIndex);

  if (projectName === '') {
    project = 'default';
  } else {
    project = projectName;
    projectCreate(project);
    // console.log(projectVault);
  }

  const info = `${title},${description},Priority: ${priority},Status: ${status},Project: ${project},Created: ${createdDate}`;

  // console.log('this is the projects array', todoVault)
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
    } else {
      todoVault[todoIndex].status = 'incomplete';
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

//  for debug
function viewVault() {
  return todoVault;
}

function getTodo(todoIndex) {
  if (todoIndex !== undefined) {
    return todoVault[todoIndex];
  }
  // console.log(todoVault[todoVault.length], 'length after create')
  // console.log(todoVault[todoVault.length - 1], 'length minus 1 after create')

  return todoVault[todoVault.length - 1];
}

// function todoIndexReducer(deletedIndexValue) { // ned to reduce index heres.

//   todoVault.forEach((currentTodo) => {
//     if(currentTodo.index > deletedIndexValue) {
//       currentTodo.index -= 1;
//     }
//     });

// }

export { getTodo, modify, todoCreate, viewVault, projectView, currentDate, projectList };
