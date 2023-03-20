

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

export default function todoCreate(title, description, priority, project) {
  const createdDate = currentDate();

  
  
  return { title, description, priority, createdDate };
    
}

