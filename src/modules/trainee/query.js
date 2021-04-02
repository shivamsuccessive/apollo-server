const {trainee} = require('./../../service/user');
const Mutation = require('./mutation');
const Query = {
    getAllTrainees : () => {
        return trainee.list()
    },
    getTraineeById : (root, args, context, info) => {
        return trainee.get(args.id)
    }
}

const traineeResolver = {
    Query,
    Mutation
}

module.exports = traineeResolver;