const Query = {
    getMyProfile : ()=> ({
        id : 101,
        name : 'shivam',
        email : 'shivam@gmail.com'
    }),

    test :()=> 'this is test query!',
}

const userResolver = {
    Query
}
module.exports = userResolver;