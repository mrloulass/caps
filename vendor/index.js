'use strict';

require('dotenv').config;

const faker = require('faker')

let randomName = faker.name.findName();
let randomStore = faker.company.companyName();
let randomOrderId = faker.datatype.uuid();
let randomAddress = faker.address.streetAddress();

let currentTimeStamp = new Date();

const order = {
  event: 'pickup',
  time: currentTimeStamp,
  payload:
  {
    store: randomStore,
    orderID: randomOrderId,
    customer: randomName,
    address: randomAddress,
  }
}

const io = require('socket.io-client');

// set url and connect to server
const HOST_URL = process.env.HOST_URL || 'http://localhost:3000';

const NAMESPACE = process.env.NAMESPACE || 'caps';

// this code connect to the server socket
const socket = io.connect(`${HOST_URL}/${NAMESPACE}`);

// client needs to listen for a event ('delivered')
socket.on('delivered', (payload) => {
  console.log('Thank you,' + payload.payload.orderID);
});

setInterval(() => {
  socket.emit('pickup', order)
}, 500);

