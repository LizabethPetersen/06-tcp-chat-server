'use strict';

// This module handles the event listeners

const EventEmitter = require('events');
const logger = require('./logger');

const event = new EventEmitter();

// Targets a message to all users
event.on('@all', (data, user) => {
  logger.log(logger.INFO, data);
  Object.keys(clientPool).forEach((userIdKey) => {
  const targetUsers = clientPool[userIdKey]; 
  targetUsers.socket.write(`<${user.nickname}>: ${data.message}`);
  });
});

// Allows a user to change their randomly generated user name to an alias
event.on('@alias', (data, user) => {
  logger.log(logger.INFO, data);
  clientPool[user._id].nickname = data.message;
  user.socket.write(`You have changed your username to ${data.message}\n`);
});

// This returns a list of all users currently in the chatroom
event.on('@users', (data, user) => {
  logger.log(logger.INFO, data);
  Object.keys(clientPool).forEach((userIdKey) => {
  user.socket.write(`${clientPool[userIdKey].alias}\n`);
  });
});

// This allows a direct message to a particular user
event.on('@dm', (data, user) => {
  logger.log(logger.INFO, data);
  Object.keys(clientPool).forEach((userIdKey) => {
  const targetOneUser = clientPool[userIdKey]; 
  targetOneUser.socket.write(`<${user.alias}>: ${data.message}`);
  });
});

// This allows a user to quit the chatroom
event.on('@quit', (data, user) => {
    logger.log(logger.INFO, data);
    let exit = server.close();
})
