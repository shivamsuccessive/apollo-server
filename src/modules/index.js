const { fileLoader, mergeTypes } = require('merge-graphql-schemas');
const userResolver = require('./user/query');
const traineeResolver = require('./trainee/query');
const path = require('path');
const { merge } = require('lodash');

const typesArray = fileLoader(path.join(__dirname, './**/*.graphql'));
const typeDefs = mergeTypes(typesArray, {all : true});

const resolvers = {
    userResolver,traineeResolver
}
const options = {
    typeDefs,
    resolvers: merge(resolvers.userResolver, resolvers.traineeResolver)
}

module.exports = options;