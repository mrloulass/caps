'use strict';

require('dotenv').config;

const io = require('socket.io-client');

// set url and connect to server
const HOST_URL = process.env.HOST_URL || 'http://localhost:3000';

const NAMESPACE = process.env.NAMESPACE || 'caps';

// this code connect to the server socket
const socket = io.connect(`${HOST_URL}/${NAMESPACE}`);

// wait 1.5 sec and then emit inTransit
// wait 3 sec and emit delivered
socket.on('pickup', (payload) => {

  setTimeout(() => {
    console.log('Order in transit :', payload.payload.orderID );
    socket.emit('inTransit', payload);
  }, 1500)

  setTimeout(() => {
    socket.emit('delivered', payload);
  }, 3000)
});
