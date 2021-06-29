'use strict';

require('dotenv').config;


const events = require('./events.js');

const STORE_NAME = process.env.STORE_NAME || 'Hello Flowers';

const order = {
  storeName:STORE_NAME,
  orderId:'e3669048-7313-427b-b6cc-74010ca1f8f0',
  customerName:'Mike Haul',
  address: 'Seattle, WA',
}

setInterval(()=>{
  console.log(order);
},5000);
