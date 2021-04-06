const pubsub = require('./pubsub');

const Subscription = {
        createTrainee: {
        // More on pubsub below
        subscribe: () => pubsub.asyncIterator(['CREATE_TRAINEE']),
      }
    }
    // ...other resolvers...

  module.exports = Subscription;
  