let projects = [];

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



export default function todoCreate(title, description, priority, projectName) {
  const createdDate = currentDate();
  const status = 'incomplete';
  let project;

  if(projectName === undefined) {
    project = 'default';
  } else {
    project = projectName;
  }

  // const todo = { title, description, priority, createdDate, status, project };
  // console.log(todo);
  // projects.push(todo);
  console.log('this is the projects array', projects);
  return projects.push({ title, description, priority, createdDate, status, project });
    
}
function modify() {
  function todoStatus(todoIndex) {
    if(projects[todoIndex].project === 'incomplete') {
      projects[todoIndex].project = 'complete';
    } else {
      projects[todoIndex].project = 'incomplete';
    }
    
  }

  function todoDelete(todoIndex) {
    projects.splice(todoIndex, 1);
  }
  return { todoStatus, todoDelete }
}


export { modify, todoCreate }