const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);

taskInput.addEventListener( 'keydown', (event) =>{
    if(event.key === 'Enter') {
        addTask();
    }
} )


function addTask() {
    if(taskInput.value.trim() === '') return;
 
    const li = document.createElement('li');
    li.textContent = taskInput.value;
    li.classList.add('taskItem');

    li.addEventListener('click', () => {
        li.classList.toggle('completed')
    })

    taskList.appendChild(li);
    taskInput.value = "";


}