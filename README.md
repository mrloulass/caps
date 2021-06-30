# CAPS

## Phase 1 Requirements:

  - Our goal is to setup a system of events and handlers, with the intent being to change out the eventing system as we go, but keeping the handlers themselves largely the same. The task of “delivering a package” doesn’t change (the handler), even if the mechanism for triggering that task (the event) does.

## Name: Louis Lassegue

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


#### Running the App


## UML

![CAPS Event Driven Applications](./assets/events.png)

![CAPS Event Driven Applications](./assets/events2.png)

## Links

[]()
