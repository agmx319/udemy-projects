// Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

function loadEventListeners() {

  //load event
  document.addEventListener('DOMContentLoaded', getTasks);
  //Add task event
  form.addEventListener('submit', addTask);

  // Remove event
  taskList.addEventListener('click', removetask);

  //Clear task
  clearBtn.addEventListener('click', clearTasks);

  //filter task
  filter.addEventListener('keyup', filterTask);
}

// get tasks from LS
function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task) {
    // Create li
    const li = document.createElement('li');
    li.className = 'collection-item';

    li.appendChild(document.createTextNode(task));

    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';

    li.appendChild(link);

    taskList.appendChild(li);    
    }
  )
  

}

//Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a Task!!!');
  } 

  // Create li
  const li = document.createElement('li');
  li.className = 'collection-item';

  li.appendChild(document.createTextNode(taskInput.value));

  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';

  li.appendChild(link);

  taskList.appendChild(li);
   // Add to local storage
  storeTaskInLocalStorage(taskInput.value);

  taskInput.value = '';

 

  e.preventDefault();

}

// add task to local storage function
function storeTaskInLocalStorage(task){
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  console.log(task);
  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

}

//Remove Task
function removetask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();

      // remove task from LS
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
    
  }
  
}

// Remove task from LS
function removeTaskFromLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){
    tasks.splice(index, 1);
  })

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Clear Tasks
function clearTasks(e) {
  // inner html
  //taskList.innerHTML = '';

  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  //clear tasks from local storage
  clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage(){
  localStorage.clear();
}

//filter tasks
function filterTask(e) {
  const text = e.target.value.toLowerCase();
  console.log(text);

  document.querySelectorAll('.collection-item').forEach(
    function(task){
      const item = task.firstChild.textContent;
      if (item.toLowerCase().indexOf(text) != -1){
        task.style.display = 'block';

      } else {  
        task.style.display = 'none';
      }
    }
  )
}
