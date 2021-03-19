const { fileLoader, mergeTypes } = require('merge-graphql-schemas');
const path = require('path');
const userResolvers = require('./user/query');

const typesArray = fileLoader(path.join(__dirname, './**/*.graphql'));

const typeDefs = mergeTypes(typesArray, {all : true});

// const{ makeExecutableSchema } = require('graphql-tools');
// const schema = makeExecutableSchema({typeDefs, userResolvers});

const options = {
    typeDefs,
    resolvers:{
        Query:{...userResolvers}
    }
}

module.exports = options