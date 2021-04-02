const http = require('http');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const configApp = require('./config/configurations');


class Server {
    constructor(express){
        this.express = express;
        this.app = this.express();
        this.config = configApp;
        this.PORT = this.config.server.PORT || 8000;
    }

    setUpApollo(options){
        this.server = new ApolloServer({
            ...options
        })

        this.app.use(cors());
        this.app.use(this.express.json());
        const { app } = this;
        this.server.applyMiddleware({ app });
    }

    run(){
        const httpServer =  http.createServer(this.app);
        httpServer.listen(this.PORT, ()=>{
            console.log(`App is running on PORT ${this.PORT}`);
        })
    }
}

module.exports = Server;