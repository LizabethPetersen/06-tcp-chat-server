'use strict';

import '../events/events';
import 'net';
import './logger';
import './server';
const event = new EventEmitter();

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
  console.log(entry, 'This is the ENTRY');
  if (entry) event.emit(entry.command, entry, user);
};