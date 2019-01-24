var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.get('/socket/socket.io')

http.listen(3000, function() {
    console.log('listening on *:3000')
})

io.on('connection', function(socket) {
    console.log('a user connected')
    socket.on('disconnect', function(){
        console.log('a user disconnected')
    })
    socket.on('device-orientation', data => {
        console.log(data)
    })
    
    socket.on('device-motion', data => {
        console.log(data)
    })
})




