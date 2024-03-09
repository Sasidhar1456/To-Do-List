document.addEventListener("DOMContentLoaded",function(){

    const textElement = document.getElementById("type");
    const textContent = textElement.innerHTML.trim();
    textElement.innerHTML = "";

    let index = 0;

    let arr =[" "," "," ","<b class'font-bold text-5xl font-sans'>|</b>"];
   

    const typingInterval = setInterval(() => {
        

            arr.splice(index,0,textContent[index]);
            textElement.innerHTML = arr.join("");
            index++;

        if(index === textContent.length){
            textElement.innerHTML = textContent;
            clearInterval(typingInterval);

            
        }

    },100)
});

function toggleTaskCompletion(checkbox) {
    const taskText = checkbox.parentElement.nextElementSibling.firstElementChild;
    taskText.classList.toggle('line-through', checkbox.checked);
}

function deleteTask(button){
    const task = button.parentElement.parentElement;
    if(confirm("You are deleting a task from the list")){
        task.remove();
    } 
}

function addTask() {
    // Get the input value
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value;

    // Create task elements
    const taskContainer = document.getElementById('taskContainer');
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('flex', 'justify-center', 'items-center', 'mt-5');

    
    const checkDiv = document.createElement('div');
    checkDiv.classList.add("mt-1");

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('h-5', 'w-5', 'checked:bg-forth', 'checked:border-transparent', 'focus:outline-none');
    checkbox.onclick = function() {
        toggleTaskCompletion(checkbox);
    };

    checkDiv.appendChild(checkbox);


    const spanDiv = document.createElement("div");
    spanDiv.classList.add("ml-3", "w-40");

    const taskSpan = document.createElement('div');
    taskSpan.classList.add('ml-3', 'w-40');
    const taskTextSpan = document.createElement('span');
    taskTextSpan.classList.add('text-secondary', 'text-xl', 'font-love', 'font-semibold', 'max-w-[200px]');
    taskTextSpan.innerText = taskText;
    taskSpan.appendChild(taskTextSpan);

    spanDiv.appendChild(taskSpan);

    
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("ml-3")

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('bg-forth', 'rounded-md', 'px-1');
    deleteButton.onclick = function() {
        deleteTask(deleteButton);
    };
    deleteButton.innerHTML = '<span class="text-third font-love">Delete</span>';

    buttonDiv.appendChild(deleteButton);

    // Append elements to the task container
    taskDiv.appendChild(checkDiv);
    taskDiv.appendChild(spanDiv);
    taskDiv.appendChild(buttonDiv);
    taskContainer.appendChild(taskDiv);

    // Clear the input field
    taskInput.value = '';
}
