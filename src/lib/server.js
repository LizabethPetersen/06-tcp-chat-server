'use strict';

import { createServer } from 'net';

const logger = require('./logger');
const server = createServer();
const clientPool = {};
const User = require('../models/users');

const PORT = process.env.PORT || 3000;

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

server.listen(PORT, () => {
  logger.log(logger.INFO, `Server is listening on Port: ${PORT}`);
});