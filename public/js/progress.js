const inProgressHandler = async (event) => {
    if (event.target.matches('.btn-inprogress')) {
        const task = event.target;
        const id = task.dataset.id;
        const progress = 'in-progress'

        const response = await fetch(`/api/progress/${id}`, {
            method: 'PUT',
            body: JSON.stringify({progress}),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('failed')
        }
    }
}

const completedHandler = async (event) => {
    if (event.target.matches('.btn-complete')) {

        const task = event.target;
        const id = task.dataset.id;
        console.log(id)

        const response = await fetch(`/api/progress/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ progress: 'completed' }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('oopsies')
        }
    }
}





const deleteTaskHandler = async (event) => {
    if (event.target.matches('.btn-delete')) {
        const task = event.target;
        const id = task.dataset.id;

        // Send a DELETE request to the API endpoint
        const response = await fetch(`/api/progress/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/');
            console.log('success')
        } else {
            alert('error');
        }
    }
};


document.querySelector('.on-click').addEventListener('click', inProgressHandler)
document.querySelector('.on-click').addEventListener('click', completedHandler)
document.querySelector('.on-click').addEventListener('click', deleteTaskHandler)