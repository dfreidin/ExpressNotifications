$(document).ready(function(){
    var socket = io();
    socket.on("notify", function(data){
        $("#notifications").append("<p>" + data.msg + "</p>");
    });
    $("#notify_btn").click(function(){
        socket.emit("notified");
    });
});