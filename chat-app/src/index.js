const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

let count = 0

io.on('connection', (socket) => {
    console.log('New websocket connection')

    const msg = 'Welcome!'
    socket.emit('welcomeMsg', msg)
    socket.broadcast.emit('message', 'A new user has joined!')

    socket.on('sendMessage', (sendMessage) => {
        io.emit('sendMessage', sendMessage)
    })

    socket.on('disconnect', () => {
        io.emit('A user has left!')
    })
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})