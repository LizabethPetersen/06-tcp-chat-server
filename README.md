#Lab 06: TCP Chat Server

## Documentation
This cool app allows users to join and participate in a TCP chatroom. Within the chatroom, users can change their user id to a nickname (@alias) of their choosing, send a message to all users (@all), or send a message to a specific user (@dm <alias>).


## Initial Set-up – For MacOS Users
- You'll need to have Node.js installed. We'll use a computer networking utility called *netcat*. netcat allows reading from and writing to network connections using TCP or UDP. This app uses TCP to interact with the server. In your terminal, *brew install netcat*. 
- Create a repository that will contain all directories and modules necessary to building the chatroom app.
- Create a working branch; never work directly in the master branch

##### Configuration 
Configure the root of your repository with the following files and directories. Thoughfully name and organize any aditional configuration or module files.

* **README.md** - contains documentation
* **.env** - contains env variables (should be git ignored)
* **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file 
* **.eslintrc** - contains the course linter configuratoin
* **.eslintignore** - contains the course linter ignore configuration
* **package.json** - contains npm package config
  * create a `lint` script for running eslint (eslint **/*.js)
  * create a `start` script for running your server
* **index.js** - the entry point for your application
* **src/** - contains your core application files and folders
* **src/app.js** - (or main.js) contains your core application bootstrap
* **src/lib/** - contains module definitions

## Feature Tasks  
For this assignment, you will be building a TCP chatroom. Clients should be able to connect to the chatroom through the use of telnet. Clients should also be able to run special commands to exit the chatroom, list all users, reset their nickname, and send direct messages. You may add as many features to this application as you would like. Do not use any third party libraries and testing is *not* required.
