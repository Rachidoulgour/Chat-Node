$(function(){
    var socket = io.connect('http://localhost:8080');
    var username = $("#username")
    var register_username =$("#register_username")
    var message = $("#message")
    var sendMessage = $("#send_message")
    var chat = $("#chat")
    var typing = $("#typing")

    register_username.click(()=>{
        console.log(username.val())
        socket.emit('username_input', {username: username.val()})
    })
    sendMessage.click(()=>{
        event.preventDefault();
        console.log(message.val())
        socket.emit('new-message', {message:message.val()})
        console.log(message)
        message.val('')
    })
    socket.on('new-message', (data)=>{
        chat.append("<p class='message-sended'>"+data.username+': '+data.message+"<p>")
        typing.html('')
    })
    message.bind('keypress', ()=>{
        socket.emit('istyping')
    })
    socket.on('istyping', (data)=>{
        typing.html("<p><i>"+data.username+" is typing..."+"</i></p>")
    })
})


