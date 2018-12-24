const express = require('express');
const app = express();
const http = require('http').createServer(app);
const port = process.env.PORT || 5555;
const io = require('socket.io')(http);


app
  .use(express.static('client'))
  .get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
  });

http.listen(port, () => {
    console.log(`Listening on ${port} port`);
  });

  //web-socket
  io.on('connection', (socket) => { //событие, которое отлавливает подключение к сокету
    socket.on('clientMessage', (data) => {
      io.emit('newMessage', data); //server answer
    }) //отлавливает сообщения клиента

    console.log('new client connected');
  });
