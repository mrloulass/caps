'use strict';

require('dotenv').config;

const MessageQueue = require ('../queue-server/index.js');
const messages = new MessageQueue('messages');

// 1st to setup socket.io
const io = require('socket.io');

const PORT = process.env.PORT || 3000

// create a socket for the server
const server = io(PORT);

// adding namespace for the socket messages
const caps = server.of('/caps');


// 1st listen for the connection event
// connect to clients
// the (payload) is coming from the clients
caps.on('connection', (socket) => {

  // proof socket is connected
  console.log('Socket is Connected :' + socket.id);

  socket.on('new message', payload => {

    try {
      let message = messages.add(payload);
      socket.emit('added');
      caps.emit('message', {
        id: message.id,
        payload: message.value
      });
    } catch (error) {
      console.log(error);
    }
  });

  socket.on('getall',()=>{
    let allMessages = messages.getAll();
    allMessages.forEach(message =>{
      socket.emit('message', message);
    });
  });

  socket.on('received', message =>{
    messages.received(message.id);
  });

  socket.on('pickup', (payload) => {
    console.log('EVENT :', payload)
    caps.emit('pickup', payload)
  });

  // this is were we put rooms here for the clients that cares about this information
  // broadcast sends events to all other sockets.(but not the current socket)
  socket.on('inTransit', (payload) => {
    console.log('EVENT :', payload);
    socket.broadcast.emit('inTransit', payload)
  });

  socket.on('delivered', (payload) => {
    console.log('EVENT :', payload);
    socket.broadcast.emit('delivered', payload)
  });

});
