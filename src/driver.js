'use starict';

// 1st listen on intransit
// 2nd send emit delivery

const events = require('./events.js');


const faker = require('faker');

let randomName = faker.name.findName();
let randomStore = faker.company.companyName();
let randomOrderId = faker.finance.account();
let randomAddress = faker.address.streetAddress();

let currentTimeStamp = new Date();

const order = {
  event: 'in-transit',
  time: currentTimeStamp,
  payload: 
  {
    store: randomStore,
    orderID: randomOrderId,
    customer: randomName,
    address: randomAddress,
  }
}

// setInterval(() => {
//   console.log(`DRIVER: picked up order ${randomOrderId}`);
//   events.emit('pickup');
//   },1000);

  setTimeout(()=>{
    events.emit('inTransit', {EVENT:order});
  },3000);



