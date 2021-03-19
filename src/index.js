const express = require('express');
const options = require('./modules');
const Server = require('./server');

const apolloServer = new Server(express);

apolloServer.setupApollo(options);
apolloServer.run();