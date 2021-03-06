// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
loadEventListeners();

function loadEventListeners() {
    // Add Task Event
    form.addEventListener('submit', addTask);
    // Remove Task Event
    taskList.addEventListener("click", removeTask);
    // Clear Task Event
    clearBtn.addEventListener("click", clearTask);
    // Filter Task Event
    filter.addEventListener("keyup", filterTask);
}

// Add Task
function addTask(e) {

    if (taskInput.value === "") {
        alert("Add a task");
    } else {
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className="collection-item";
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = "delete-item secondary-content";
    link.innerHTML = '<span>Delete</span>';
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
    }

    // Add to LS
    storeTaskInLocalStorage(taskInput.value);

    e.preventDefault();
}


// Remove Task
function removeTask (e) {
    if (e.target.parentElement.classList.contains("delete-item")){
        if(confirm("Are you sure?")){
        e.target.parentElement.parentElement.remove();
        }
    }
}

// Clear Task
function clearTask () {
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

// Filter Task
function filterTask(e){

    const text = e.target.value.toLowerCase();

    document.querySelectorAll(".collection-item").forEach(function(task){
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1){
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    })

}