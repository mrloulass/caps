'use strict';

// 1st send emit pickup
// 2nd listen on delivry

// require('dotenv').config;

const events = require('./events.js');

const faker = require('faker');

let randomName = faker.name.findName();
let randomStore = faker.company.companyName();
let randomOrderId = faker.finance.account();
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

setInterval(() => {
  events.emit('pickup', {EVENT:order});
}, 5000);


module.exports = order;
