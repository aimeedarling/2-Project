const createFormHandler = async (event) => {
    event.preventDefault();

    //collects value from the create form
    const newTask = document.querySelector("#task").value.trim();

    const response = await fetch('/api/task-routes', {
        method: 'POST',
        body: JSON.stringify({ task_name: newTask }),
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
        console.log(response)
    } else {
        console.error('Error creating the task:', response.statusText);
    }

}

document.querySelector('#create').addEventListener('click', createFormHandler)