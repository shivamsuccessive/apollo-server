const express = require('express');
const options = require('./modules');
const Server = require('./server');

const ApolloServer = new Server(express);
ApolloServer.setUpApollo(options);
ApolloServer.run();