##### Minimum Requirements 
* Create a TCP Server using the NodeJS `net` module
* Create a Client constructor that models an individual connection 
  * Each client instance should contain (at least) `_id`, `nickname`, and `socket` properties
* Clients should be able to send messages to all other clients by sending it to the server
* Clients should be able to run special commands by sending messages that start with a command name
  * The client should send `@quit` to disconnect
  * The client should send `@list` to list all connected users
  * The client should send `@nickname <new-name>` to change their nickname
  * The client should send `@dm <to-username> <message>` to send a message directly to another user by their nickname

* Connected clients should be maintained in an in-memory collection called the `clientPool`
  * When a socket emits the `close` event, the socket should be removed from the client pool
  * When a socket emits the `error` event, the error should be logged on the server
  * When a socket emits the `data` event, the data should be logged on the server and the commands above should be implemented
  
## Stretch Goals
* Modularize your chatroom.js module so that you have separated out events and helper functions into their own separate modules.
* Add some error handling so that you cannot have duplicate users with the same nickname (this code is not set up to prevent that). 
* Currently, the way this code is set up, you'll have to do an O(n) lookup in order to DM a user or delete a user from your client pool. Reformat your code so that you can do these operations in O(1) time instead of O(n) time. **You may need to take up O(n) more space to get this done, but that's OK. This is a good tradeoff.** 

##  Documentation  
Write documention for starting your server connection and using the chatroom application.  Write this documentation as if you are directing someone who has no idea of the tools you are using (netcat, Putty, etc.) how to go through all the steps *from the start* with installing the right dependencies, etc. Be sure to use proper markdown constructs and `highlight blocks of code`.
