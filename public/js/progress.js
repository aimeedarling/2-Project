const inProgressHandler = async (event) => {
    if (event.target.matches('.btn-inprogress')) {

        const id = event.target.getAttribute("data-id")
        console.log(id)
    }

}



document.querySelector('.on-click').addEventListener('click', inProgressHandler)