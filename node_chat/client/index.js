let socket = io('http://localhost:5555/');
let name = 'user_' + (Math.round(Math.random() * 100));
let dataObj = {};

function msg_system(message) {
  document.querySelector('.msg_system').textContent = message;
}

socket.on('connection', () => {
  msg_system('Connecting...');
});

socket.on('connect', () => {
  msg_system('Connected');
})

document.querySelector('#nick').textContent = name;

document
  .querySelector('.send')
  .addEventListener('click', (event) => {
    event.preventDefault();
    let msg = document.querySelector('#m').value;
    dataObj = {name : name, msg: msg};

    socket.emit('clientMessage', dataObj) //sending messages
    document.querySelector('#m').value = '';
  });

socket.on('newMessage', (data) => { //show user message to all clients
  let li = document.createElement('li');
  li.textContent = data.name  + ' ' + data.msg;

  document.querySelector('#messages').appendChild(li);
});
