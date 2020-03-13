const express = require('express')
const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res)=>
res.send('Hola Chat')
);
const server = http.listen(3300, ()=>
console.log('Hola desdee el chat node, escuchando desde 3300')
);