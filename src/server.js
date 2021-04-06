const http = require('http');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const configApp = require('./config/configurations');
const {SubscriptionServer} = require('subscriptions-transport-ws');
// import { SubscriptionServer } from 'subscriptions-transport-ws';
const {execute,subscribe} = require('graphql');
const schema = require('./modules/index')
// import { execute, subscribe } from 'graphql';


class Server {
    constructor(express){
        this.express = express;
        this.app = this.express();
        this.config = configApp;
        this.PORT = this.config.server.PORT || 8000;
    }

    setUpApollo(schema){
        this.server = new ApolloServer({
            // subscriptions: {
            //     path: '/subscriptions'
            //   },
            schema
        })

        this.app.use(cors());
        this.app.use(this.express.json());
        const { app } = this;
        this.server.applyMiddleware({ app });
    }

    run(){
        const httpServer =  http.createServer(this.app);
        // httpServer.listen(this.PORT, ()=>{
        //     console.log(`App is running on PORT ${this.PORT}`);
        // })
        httpServer.listen(this.PORT, () => {
            new SubscriptionServer({
              execute,
              subscribe,
              schema,
            }, {
              server: httpServer,
            //   path: '/subscriptions',
            });
        });
    }
}







///-----------------------



// import express from 'express';
// import bodyParser from 'body-parser';
// import { ApolloServer, gql }  from 'apollo-server-express';
// // import { createServer } from 'http';
// // import { execute, subscribe } from 'graphql';
// // import { PubSub } from 'graphql-subscriptions';
// // import { SubscriptionServer } from 'subscriptions-transport-ws';
// import { myGraphQLSchema } from './my-schema';
// import options from './modules';

// const PORT = 3000;
// const app = express();

// app.use('/graphql', bodyParser.json());

// const apolloServer = new ApolloServer({ schema: myGraphQLSchema });
// apolloServer.applyMiddleware({ app });

// const pubsub = new PubSub();
// const server = createServer(app);

// server.listen(PORT, () => {
//     new SubscriptionServer({
//       execute,
//       subscribe,
//       schema: myGraphQLSchema,
//     }, {
//       server: server,
//       path: '/subscriptions',
//     });
// });


module.exports = Server;