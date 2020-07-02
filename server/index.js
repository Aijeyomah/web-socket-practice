const express = require('express')
const path = require('path')
const http = require('http')
const socketIo = require('socket.io')

app = express()
const publicPath = path.join(__dirname, '../public')
app.use(express.static(publicPath))

const server = http.createServer(app)
const io = socketIo(server)
let port = process.env.PORT || 4000

server.listen(port, ()=>{
    console.log('application listening on port 4000')
})
io.on('connection', (socket)=>{
    console.log('A new user is connected')

socket.emit('newEmail',{
    from : "omah@gmail.com",
    text: "I'm trying something new",
    createdAt: "2020"
})
socket.on('createEmail', (newEmail)=>{
    console.log('createEmail', newEmail)
})
socket.on('disconnect', ()=>{
    console.log('goodbye guys')
})
})

