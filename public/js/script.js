

    
function connect_to_socket() {
    
    var socket = io.connect('http://localhost:4000');


    socket.on('connect', function(){
        console.log("connected")

        socket.emit('join', {room: "12345"});



    socket.on('disconnect', function () {
        console.log('disconnected');

    });

    socket.on('listen', function (data) {


    $("#name").append(data.message.name);
    $("#surname").append(data.message.surname);
    $("#room").append(data.message.room);


    });



});

};
connect_to_socket();

   



