const todoVault = [];
const projectVault= ['default'];

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
  const projectChecker = projectVault.find(item => item === project);

  if(projectChecker === undefined) {
    projectVault.push(project);
  };
};

function todoCreate(title, description, priority, projectName) {
  const createdDate = currentDate();
  const status = 'incomplete';
  let project;

  if(projectName === undefined) {
    project = 'default';
  } else {
    project = projectName;
    projectCreate(project);
  }

  console.log('this is the projects array', todoVault);
  return todoVault.push({ title, description, priority, createdDate, status, project });
    
}
function modify() {
  function todoStatus(todoIndex) {
    if(todoVault[todoIndex].status === 'incomplete') {
      todoVault[todoIndex].status = 'complete';
    } else {
      todoVault[todoIndex].status = 'incomplete';
    }
  }
  
  function todoDelete(todoIndex) {
    todoVault.splice(todoIndex, 1);
  }
  return { todoStatus, todoDelete }
}
//  for debug 
function viewVault() { 
  return todoVault;
}


export { modify, todoCreate, viewVault }