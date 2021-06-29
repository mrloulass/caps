'use strict';

// Main Hub Application

const events = require('./events.js');

// listen for the event
require('./vendor.js');
require('./driver.js');

// Manages the state of every package (ready for pickup, in transit, delivered)
// Logs every event to the console with a timestamp and the event payload
// i.e. "EVENT {}"

events.on('pickup', pickup);
events.on('inTransit', inTransit);
events.on('delivered', delivered);


let currentTimeStamp = (new Date()).getDate();

function pickup(payload){
  console.log(currentTimeStamp);
  events.emit('pickup', {pickup:currentTimeStamp})
};
function inTransit(payload){
  console.log(currentTimeStamp);
  events.emit('inTransit', {inTransit:currentTimeStamp})
};
function delivered(payload){
  console.log(currentTimeStamp);
  events.emit('delivered', {delivered:currentTimeStamp})
  
};

