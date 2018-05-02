const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public"));
const server = app.listen(8000);
const io = require("socket.io")(server);

io.on("connection", function(socket){
    io.emit("notify", {msg: "Socket ID " + socket.id + " joined us!"});
    socket.on("notified", function(data){
        io.emit("notify", {msg: "Socket ID " + socket.id + " just triggered a notification!"});
    });
    socket.on("disconnect", function(){
        socket.broadcast.emit("notify", {msg: "Socket ID " + socket.id + " left us!"});
    });
})