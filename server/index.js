const  express = require('express') 
const path = require('path')
let app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


const publicPath = path.join(__dirname, '../public')
app.use(express.static(publicPath))
 
let port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log(`Application listening on port ${port}`)
});
 io.on('connection', (socket)=>{
    console.log('user is connected')
    socket.on('disconnect', ()=>{
        console.log('user is disconnected')
     })
    
 })
 