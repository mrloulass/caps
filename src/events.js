'use strict';

// Export One instance of the events that all modules can use
// Step1: Create Event Pool exports

const Events = require('events');
const events = new Events();


module.exports = events;
