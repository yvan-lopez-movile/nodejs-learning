const socket = io()

socket.on('welcomeMsg', (msg) => {
    console.log(msg)
})

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const msg = e.target.elements.message

    socket.emit('sendMessage', msg)
})

document.querySelector('#sendLocation').addEventListener('click', ()=>{
    if(!navigator.geolocation) {
        return alert('Geolocation is not supported by your browser.')
    }

    navigator.geolocation.getCurrentPosition((position) =>{
        const location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }

        socket.emit('sendLocation', location)
    })
})

socket.on('sendLocation', (msg) => {
    console.log(msg)
})