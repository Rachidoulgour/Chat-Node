const express = require('express')
const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res)=>
res.render('index')
);

const server = http.listen(8080, ()=>
console.log('Hola desdee el chat node, escuchando desde 3300')
);

io.on('connection', (socket)=>{
    console.log("New Client Connected")
});