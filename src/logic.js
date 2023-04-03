const todoVault = [];
const projectVault = ['default'];

function xlocalStorage() {
  const getStorage = () => {
    const testVault = JSON.parse(localStorage.getItem('todoVault'));
    console.log('get it', testVault);
    return testVault;
  }
  const uploadStorage = () => {
    console.log('upload it');
    localStorage.setItem('todoVault', JSON.stringify(todoVault))
    localStorage.setItem('projectVault', JSON.stringify(projectVault))
    console.log(getStorage(), 'this is the get from upload')
  }

  return { getStorage, uploadStorage }
}

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
  const selectedProjectList = [];
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
  xlocalStorage().uploadStorage();
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
  function projectDelete(verifyProject) {
    let checker = 0;
    todoVault.forEach((item) => {
      if(item.project === verifyProject.project) {
        checker += 1;
      }
    })
    
    if(checker > 1) {
      return;
    }

    projectVault.splice(projectVault.indexOf(verifyProject.project), 1);  
  }

  function todoStatus(todoIndex) {
    if (todoVault[todoIndex].status === 'incomplete') {
      todoVault[todoIndex].status = 'complete';
      console.log(
        'status changed to complete - mod.status()',
        `index: ${todoIndex}`
      );
    } else {
      todoVault[todoIndex].status = 'incomplete';
      console.log(
        'status changed to incomplete - mod.status()',
        `index: ${todoIndex}`
      );
    }
    xlocalStorage().uploadStorage();
  }

  function todoDelete(todoIndex) {
    projectDelete(todoVault[todoIndex]);
    todoVault.splice(todoIndex, 1);
    todoVault.forEach((currentTodo) => {
      if (currentTodo.todoVaultIndex > todoIndex) {
        currentTodo.todoVaultIndex -= 1;
      }
    });
    xlocalStorage().uploadStorage();
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

export {
  getTodo,
  modify,
  todoCreate,
  viewVault,
  projectView,
  currentDate,
  projectList,
  xlocalStorage,
};
