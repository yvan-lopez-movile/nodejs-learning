const socket = io()

// Elemnts
const $messageForm = document.querySelector('#message-form')
const $messageFormInput = $messageForm.querySelector('input')
const $messageFormButton = $messageForm.querySelector('button')
const $sendLocationBtn = document.querySelector('#sendLocation')

socket.on('message', (message) => {
    console.log(message)
})

$messageForm.addEventListener('submit', (e) => {
    e.preventDefault()

    $messageFormButton.setAttribute('disabled','disabled')
    $messageFormInput.value = ''
    $messageFormInput.focus()

    // disabled
    const message = e.target.elements.message.value

    socket.emit('sendMessage', message, (error) => {
        $messageFormButton.removeAttribute('disabled')
        // enabled
        if(error) {
            return console.log(error)
        }

        console.log('Message delivered!')
    })
})

document.querySelector('#sendLocation').addEventListener('click', ()=>{
    if(!navigator.geolocation) {
        return alert('Geolocation is not supported by your browser.')
    }

    $sendLocationBtn.setAttribute('disabled', 'disabled')

    navigator.geolocation.getCurrentPosition((position) =>{
        const location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }

        socket.emit('sendLocation', location, () => {
            $sendLocationBtn.removeAttribute('disabled')
            console.log("Location shared")
        })
    })
})