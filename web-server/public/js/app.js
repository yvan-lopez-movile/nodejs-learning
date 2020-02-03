console.log('Client side javascript file is loaded!');

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msgOne = document.querySelector('#message-1')
const msgTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    msgOne.textContent = 'Loading...'
    msgTwo.textContent = ''
    const location = search.value;

    fetch('/weather/?address=' + location).then((response) => {
        response.json().then((data) => {
            msgOne.textContent = ''
            if (data.error) {
                msgOne.textContent = data.error
            } else {
                msgOne.textContent = data.location
                msgTwo.textContent = data.forecast
            }
        })
    })
})
