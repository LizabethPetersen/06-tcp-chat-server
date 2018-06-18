'use strict';

const EventEmitter = require('events');
const net = require('net');
const logger = require('logger');
const User = require('../models/users');

const PORT = process.env.PORT || 3000;

const server = net.createServer();
const event = new EventEmitter();
const socketPool = {};

const dispatchAction = (user, buffer) => {
    const entry = parseData(buffer);
    console.log(entry, 'This is the ENTRY');
    if (entry) event.emit(entry.command, entry, user);
};

server.listen(PORT, () => {
    logger.log(logger.INFO, `Server is listening on Port: ${PORT}`);
});

server.on('connection', (socket) => {
    const user = new User (socket);
    socket.write(`Welcome to my chatroom ${user.nickname}!\n`);
    socketPool[user._id] = user;
    logger.log(logger.INFO, `A new user named ${user_nickname} has entered the chatroom`);

    socket.on('data', (buffer) => {
        console.log(buffer);
        dispatchAction(user, buffer);
    });
});