var express = require("express");
var path = require("path")
var app = express()
var http = require('http').Server(app)
var io = require('socket.io').listen(http)
var redis = require('redis')


var subscribe = redis.createClient({ host: "127.0.0.1"});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
})


app.use(express.static('public/'));

port = 4000;

http.listen(port)


subscribe.select(0)


subscribe.on('message',function(channel,message){
    data = JSON.parse(message)

    let rooms = Object.keys(io.sockets.adapter.rooms);

    console.log("avaliable rooms",rooms)
    console.log("channel",channel)


    if(channel==="channel"){
        

        io.to(data.room).emit('listen', {message: data});

        }


    })

io.on('connection', function(socket){

    socket.on('join', function (data) {  
        console.log("joined",data.room)  
        socket.join(data.room);
       
    });
    
    socket.on('disconnect', function(reason){
        console.log('user disconnected,  the reason',reason);

    });
      
});


subscribe.subscribe("channel")
