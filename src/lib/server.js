'use strict';

const PORT = process.env.PORT || 3000;

const logger = ('logger');

const server = net.createServer();
const event = new EventEmitter();
const clientPool = {};

server.on('connection', (socket) => {
    const user = new User (socket);
    socket.write(`Welcome to my chatroom ${user.nickname}!\n`);
    clientPool[user._id] = user;
    logger.log(logger.INFO, `A new user named ${user_nickname} has entered the chatroom`);

    socket.on('data', (buffer) => {
        console.log(buffer);
        dispatchAction(user, buffer);
    });
});

server.listen(PORT, () => {
    logger.log(logger.INFO, `Server is listening on Port: ${PORT}`);
});