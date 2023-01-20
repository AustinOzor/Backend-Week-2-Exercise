const express = require('express');
const server = express(); 

const handleAllRequests = (requestObject, responseObject) => {
    console.log("Hi, I just receive a request");
    const url = requestObject.url;
    responseObject.setHeader("content-type", "text/html");
    
    responseObject.end();
}

const handleHomeRequest = (req, res) => {
    res.send("<h1>Hello! Welcome to Aust Solutions</h1>");
};
const handleLogInRequest = (req, res) => {
    res.send("<h2>Welcome to the login page</h2>")
};

const handleProfileRequest = (req, res) => {
    res.send("<h3>You are here</h3>")
};

server.use('/', handleHomeRequest);
server.use('/login', handleLogInRequest);
server.use('/profile',handleProfileRequest);

server.use(handleAllRequests);


server.listen(3001, '127.0.0.1', () =>
console.log("server is ready to accept a request"))