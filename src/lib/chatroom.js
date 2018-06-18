'use strict';

const EventEmitter = require('events');
const logger = require('logger');
const User = require('../models/users');


const dispatchAction = (user, buffer) => {
    const entry = parseData(buffer);
    console.log(entry, 'This is the ENTRY');
    if (entry) event.emit(entry.command, entry, user);
};