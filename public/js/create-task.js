const createFormHandler = async (event) => {
    event.preventDefault();

    //collects value from the create form
    const newTask = document.querySelector("#task").value.trim();

    //need to pull this from session
    const user_id = 1;

    //Pass progress, task_name, user_id in this fetch call
    //get user_id from session

    const response = await fetch('/api/task-routes', {
        method: 'POST',
        body: JSON.stringify({ 
            task_name: newTask,
            progress: 'todo',
            user_id: user_id
        }),
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
        console.log(response)
    } else {
        console.error('Error creating the task:', response.statusText);
    }

}

document.querySelector('#create').addEventListener('click', createFormHandler)
