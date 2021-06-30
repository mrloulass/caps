'use strict';

// Main Hub Application

const events = require('./events.js');

const order = require('./vendor.js');

// listen for the event
require('./vendor.js');
require('./driver.js');

// Manages the state of every package (ready for pickup, in transit, delivered)
// Logs every event to the console with a timestamp and the event payload
// i.e. "EVENT {}"

// const faker = require('faker');

// let randomName = faker.name.findName();
// let randomStore = faker.company.companyName();
// let randomOrderId = faker.finance.account();
// let randomAddress = faker.address.streetAddress();

// let currentTimeStamp = new Date();

// const order = {
//   event: 'pickup',
//   time: currentTimeStamp,
//   payload: 
//   {
//     store: randomStore,
//     orderID: randomOrderId,
//     customer: randomName,
//     address: randomAddress,
//   }
// }

events.on('pickup', pickup);
events.on('inTransit', inTransit);
events.on('delivered', delivered);



function pickup(payload) {
  console.log(payload)
  setTimeout(()=>{
  console.log('DRIVER:pick up', order.payload.orderID);
  },1000);
};

function inTransit(payload) {
    console.log(payload)
};

function delivered(payload) {
  events.emit('delivered', payload)
  console.log(payload)
  console.log('thank you');
};


