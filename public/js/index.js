const socket = io()

socket.on('connect', ()=>{
    console.log('connected to the server');

    socket.emit('createEmail', {
        to: 'jen@example.com', 
        text: 'Hey! this is Aijey'
    })

socket.on( 'disconnect', ()=>{
    console.log('disconnected from the server')

})
socket.on('newEmail', (email)=>{
    console.log('New Email', email)

})
})