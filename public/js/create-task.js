
//create task button functionality

const createFormHandler = async (event) => {
    event.preventDefault();

    //collects value from the create form
    const newTask = document.querySelector("#task").value.trim();
    console.log(newTask)

    const response = await fetch('/api/tasks', {
        method: 'POST',
        body: JSON.stringify({ 
            task_name: newTask,
            progress: 'todo',
        }),
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
        document.location.reload()
    } else {
        console.error('Error creating the task:', response.statusText);
    }

}

document.querySelector('#create').addEventListener('click', createFormHandler)
