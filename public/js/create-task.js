
const createFormHandler = async (event) => {
    event.preventDefault();
    console.log('click')

    //collects value from the create form
    const newTask = document.querySelector("#task").value.trim();
    console.log(newTask)

    //need to pull this from session
    // const userId = req.session.user_id
    // console.log(userId)


    //Pass progress, task_name, user_id in this fetch call
    //get user_id from session

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
