'use strict';

// This module handles the event listeners

const EventEmitter = require('events');
const logger = require('..lib/logger');

const event = new EventEmitter();

event.on('@all', (data, user) => {
    logger.log(logger.INFO, data);
    Object.keys(clientPool).forEach((userIdKey) => {
    const targetedUser = clientPool[userIdKey]; 
    targetedUser.socket.write(`<${user.alias}>: ${data.message}`);
  });
});

// Allows a user to change their randomly generated user name to an alias
event.on('@alias', (data, user) => {
    logger.log(logger.INFO, data);
    clientPool[user._id].alias = data.message;
    user.socket.write(`You have changed your username to ${data.message}\n`);
});
// This returns a list of all users currently in the chatroom
event.on('@users', (data, user) => {
    logger.log(logger.INFO, data);
    Object.keys(clientPool).forEach((userIdKey) => {
        user.socket.write(`${clientPool[userIdKey].alias}\n`);
    });
});
