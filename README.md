# CAPS

## Name: Louis Lassegue

## Phase 1 Requirements: Events

  - Our goal is to setup a system of events and handlers, with the intent being to change out the eventing system as we go, but keeping the handlers themselves largely the same. The task of “delivering a package” doesn’t change (the handler), even if the mechanism for triggering that task (the event) does.


### Setup

Major functionality for this phase of the project.

- As a vendor, I want to alert the system when I have a package to be picked up

- As a driver, I want to be notified when there is a package to be delivered

- As a driver, I want to alert the system when I have picked up a package and it is in transit

- As a driver, I want to alert the system when a package has been delivered

- As a vendor, I want to be notified when my package has been delivered

- As developer, I want to use industry standards for managing the state of each package

- As a developer, I want to create an event driven system so that I can write code that happens in response to events, in real time

#### ENV Requirements

- none

#### Running the App

- use node in terminal to run console.logs 

## UML

![CAPS Event Driven Applications](./assets/events.png)

![CAPS Event Driven Applications](./assets/events2.png)

## Links

[]()

## Phase 2 Requirements: Socket.io

  - In Phase 2, we’ll be changing the underlying networking implementation of our CAPS system from using node events to using a library called socket.io so that we can do networked events. Socket.io manages the connection pool for us, makes broadcasting much easier to operate, and works well both on the terminal (between servers) and with web clients.

### Setup

The core functionality we’ve already built remains the same. The difference in this phase is that we’ll be creating a networking layer. As such, the user stories that speak to application functionality remain unchanged, but a new set theme emerges to get us through the refactoring.

- As a vendor, I want to alert the system when I have a package to be picked up

- As a driver, I want to be notified when there is a package to be delivered

- As a driver, I want to alert the system when I have picked up a package and it is in transit

- As a driver, I want to alert the system when a package has been delivered

- As a vendor, I want to be notified when my package has been delivered

#### ENV Requirements

- none

#### Running the App

- folders: server, vendor and driver

- use node in terminal to run console.logs 

## UML

![Socket.io image](./assets/socket.io.png)

![Socket.io image](./assets/socket.io2.png)

## Links

## Phase 3 Requirements: Message Queues

  - In phase 3, we’re going to implement a "queue" system so that nothing gets lost. Every event sent will be logged and held onto by the server until the intended recipient acknowledges that they received the message. A subscriber can get all of the messages they might have missed.

### Setup

The core functionality we’ll be building out the queue itself, getting our vendors subscribed to it, and focusing on just one event - delivered to set the pattern for subscribing to, and working with queues.

- As a vendor, I want to “subscribe” to “delivered” notifications so that I know when my packages are delivered

- As a vendor, I want to “catch up” on any “delivered” notifications that I might have missed so that I can see a complete log

- As a driver, I want to “subscribe” to “pickup” notifications so that I know what packages to deliver

- As a driver, I want to “catch up” on any “pickup” notifications I may have missed so that I can deliver everything

- As a driver, I want a way to “scan” a delivery so that the vendors know when a package has been delivered

#### ENV Requirements

- none

#### Running the App

- folder: queue-server

- use node in terminal to run console.logs 

## UML

![Message Queue image](./assets/queue1.png)

![Message Queue image](./assets/queue2.png)

## Links
