'use strict';

const io = require ('socket.io-client');

const HOST_URL = process.env.HOST_URL || 'http://localhost:3000';

const NAMESPACE = process.env.NAMESPACE || 'caps';

const socket = io.connect(`${HOST_URL}/${NAMESPACE}`);

const message = process.argv.splice(2)[0];

socket.emit ('new message', message );

socket.on('added', ()=>{
  socket.disconnect();
})

socket.on('delivered');

socket.emit('received', message =>{
  messages.received(message.id);
});
