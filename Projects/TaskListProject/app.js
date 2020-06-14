const taskList = document.getElementById('taskList');
const btnClearList = document.querySelector('#btnClearList');
const frmTask = document.querySelector('#frmTask');
const txtSearch = document.querySelector('#txtSearch');


//add event lisners

function addEventHandlers() {
  btnClearList.addEventListener('click', clearTask2);
  frmTask.addEventListener('submit', addTask);
  taskList.addEventListener('click', deleteTask);
  txtSearch.addEventListener('keyup', txtSearchKeyPress);
  window.addEventListener('DOMContentLoaded', loadLocalStorage);
}


addEventHandlers();

// local storage events
function loadLocalStorage() {
  loadFromLocalStorage();
}

function addtoLocalStorage(task) {
  const localStorageItem = localStorage.getItem('tasks');
  let tasks;
  if (localStorageItem === null) {
    tasks = [];
  }
  else {
    tasks = JSON.parse(localStorageItem)
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteFromLocalStorage(task) {
  if (localStorage.getItem('tasks') !== null) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach(function (taskItem, index) {
      if (taskItem === task) {
        tasks.splice(index, 1);
      }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

function loadFromLocalStorage() {
  const localStorageItem = localStorage.getItem('tasks');
  let tasks;
  if (localStorageItem === null) {
    tasks = [];
  }
  else {
    tasks = JSON.parse(localStorageItem)
    tasks.forEach(function (task) {
      const listElement = document.createElement('li');
      listElement.className = "collection-item";
      listElement.textContent = task;
      const hyperLink = document.createElement('a');
      hyperLink.className = "float-right";
      hyperLink.href = "#";
      hyperLink.innerHTML = "<i class='fa fa-trash' aria-hidden='true'></i>";
      listElement.appendChild(hyperLink);
      taskList.appendChild(listElement);
    })
  }
}

function clearLocalStorage() {
  localStorage.clear();
}

function txtSearchKeyPress(e) {
  const searchStr = e.target.value.toLowerCase();
  const items = taskList.querySelectorAll('.collection-item');
  items.forEach(function (item) {
    if (item.firstChild.textContent.toLowerCase().indexOf(searchStr) != -1) {
      item.style.display = 'block';
    }
    else {
      item.style.display = 'none';
    }
  });

}

function clearTasks() {
  const childElements = Array.from(taskList.children);
  childElements.forEach(function (node) {
    node.remove();
  })
  btnClearList.style.display = 'none';
}

function clearTask1() {
  taskList.innerHTML = '';
  btnClearList.style.display = 'none';
}

function clearTask2(e) {
  console.log(e);
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  btnClearList.style.display = 'none';
  clearLocalStorage();
}


function addTask() {
  let txtTask = document.getElementById('txtTask');
  if (txtTask.value) {
    const listElement = document.createElement('li');
    listElement.className = "collection-item";
    listElement.textContent = txtTask.value;
    const hyperLink = document.createElement('a');
    hyperLink.className = "float-right";
    hyperLink.href = "#";
    hyperLink.innerHTML = "<i class='fa fa-trash' aria-hidden='true'></i>";
    listElement.appendChild(hyperLink);
    taskList.appendChild(listElement);
    addtoLocalStorage(txtTask.value);
    txtTask.value = '';
    const clearButton = document.querySelector("#btnClearList");
    if (clearButton) {
      clearButton.style.display = "block";
    }
  }
  else {
    alert('Please enter a task to add')
  }
}
function deleteTask(e) {
  if (e.target.classList.contains('fa-trash')) {
    deleteFromLocalStorage(e.target.parentElement.parentElement.textContent);
    e.target.parentElement.parentElement.remove();

  }
  if (!taskList.firstElementChild) {
    btnClearList.style.display = 'none';
  }
}
