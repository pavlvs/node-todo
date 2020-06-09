document.addEventListener('click', e => {
    if (e.target.classList.contains('edit-me')) {
        let userInput = prompt('Enter your desired new text')
        axios.post('/update-item', { text: userInput }).then(() => {
            // TODO: something for later
        }).catch(() => console.log('Please try again later'))
    }
})