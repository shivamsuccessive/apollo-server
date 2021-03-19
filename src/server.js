const http = require( 'http');
const { ApolloServer } = require('apollo-server-express');
const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
const cors = require( 'cors');
const bodyParser = require('body-parser');
const configApp = require( './config/configurations');

class Server{
    constructor(express){
        this.express = express;
        this.app = this.express();
        this.config = configApp;
        this.app.get("/home", (req, res)=>{
            res.send("you are in home page!")
        })
    }

    setupApollo(options){
        this.server = new ApolloServer({
            ...options
        })
        this.app.use(cors(), bodyParser.json());
        // this.app.use('/graphql', graphqlExpress({schema}));
        // this.app.use('/graphiql', graphiqlExpress({endpointURL : '/graphql'}));
        this.app.use(cors());
        this.app.use(this.express.json());
        // this.app.use(bodyParser.urlencoded({ extended: true }));
        const { app } = this;
        this.server.applyMiddleware({ app });
    }
    
    run(){
        const httpServer = http.createServer(this.app);
        this.app.get("/api/test", (req, res)=>{
            res.send("test API");
        })
        httpServer.listen(this.config.server.PORT, ()=>{
            console.log(`server is running on port ${this.config.server.PORT}`);
        })
    }
}

module.exports =  Server;