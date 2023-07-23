const inProgressHandler = async (event) => {
    if (event.target.matches('.btn-inprogress')) {
        console.log('clicked')

        const id = event.target.getAttribute("data-id")
        console.log(id)
        // const progress = {progress: 'in-progress'}

        const response = await fetch(`/api/tasks/${id}`, {
            method: 'PUT',
            body: JSON.stringify('in-progress'), 
            headers: { 'Content-Type': 'application/json'}
        });
        if(response.ok) {
            document.location.reload();
        } else{
            alert('failed')
        }
    }

}

// const completedHandler = async (event) => {
//     if(event.target.matches('#completed-btn'))
// }

const deleteTaskHandler = async(event) => {
    if(event.target.matches('.btn-delete')) {
        const id = event.target.getAttribute('data-id')
        const response = await fetch (`/api/task/${id}`, {
            method: 'DELETE'
        });
        console.log(response)
        if (response.ok) {
            document.location.reload()
        } else {
            alert('failed')
        }
    }
}



document.querySelector('.on-click').addEventListener('click', inProgressHandler)
document.querySelector('.on-click').addEventListener('click', deleteTaskHandler)