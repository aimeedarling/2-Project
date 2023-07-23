const inProgressHandler = async (event) => {
    if (event.target.matches('.btn-inprogress')) {

        const id = event.target.getAttribute("data-id")
        const response = await fetch(`/api/task/${id}`, {
            method: 'PUT',
            body: JSON.stringify({progress: 'in-progress'}), 
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
        if (response.ok) {
            document.location.reload()
        } else {
            alert('failed')
        }
    }
}



document.querySelector('.on-click').addEventListener('click', inProgressHandler)
document.querySelector('.on-click').addEventListener('click', deleteTaskHandler)