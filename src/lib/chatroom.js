'use strict';

const EventEmitter = require('events');

const net = require('net');
const logger = require('./logger');
const User = require('../models/users');

const PORT = process.env.PORT || 3000;

const server = net.createServer();
const event = new EventEmitter();
const clientPool = {};

const parseData = (buffer) => {
  let text = buffer.toString().trim();
  if (!text.startsWith('@')) return null;
  text = text.split(' ');  
  const command = text;
  const message = text.slice(1).join(' ');  
  logger.log(logger.INFO, `THIS IS THE COMMAND: ${command}`);
  logger.log(logger.INFO, `THIS IS THE USER'S MESSAGE: ${message}`);  
  return {
    command,
    message,
  };
};

const dispatchAction = (user, buffer) => {
  const entry = parseData(buffer);
  console.log(entry, 'THIS IS THE ENTRY');
  if (entry) event.emit(entry.command, entry, user);
};

server.on('connection', (socket) => {
  const user = new User (socket);
  socket.write(`Welcome to my chatroom ${user.nickname}!\n`);
  clientPool[user._id] = user;
  logger.log(logger.INFO, `A new user named ${user.nickname} has entered the chatroom`);  
  socket.on('data', (buffer) => {
    console.log(buffer);
    dispatchAction(user, buffer);
  });
});

server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.log('Address in use, retrying...');
    setTimeout(() => {
      server.close();
      server.listen(PORT, HOST);
    }, 3000);
  }
});

server.on('close_server', function() {
  console.log('Server Closed');
  process.exit();
});

server.listen(PORT, () => {
  logger.log(logger.INFO, `Server is listening on Port: ${PORT}`);
});
