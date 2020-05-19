const socket = io()

socket.on('welcomeMsg', (msg) => {
    console.log(msg)
})

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const msg = e.target.elements.message

    socket.emit('sendMessage', msg)
})