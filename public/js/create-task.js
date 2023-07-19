const createFormHandler = async (event) => {
    event.preventDefault();

    //collects value from the create form
    const newTask = document.querySelector("#task").value.trim();


    if (response.ok) {
        const response = await fetch('api/task-routes', {
            method: 'POST',
            body: JSON.stringify({ newTask }), // Use { newTask } instead of {newTask}
            headers: { 'Content-Type': 'application/json' }
        });
    } else {
        console.error('Error creating the task:', response.statusText);
    }

}